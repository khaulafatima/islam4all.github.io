const fs = require('fs')
    readline = require('readline')
    path = require('path'),
    http = require('http'),
    _ = require('lodash'),
    getMP3Duration = require('get-mp3-duration');


const downloadFile = (url, dest) => {

    return new Promise((resolve, reject) => {
        //return resolve();
        const file = fs.createWriteStream(dest, { flags: "wx" });

        const request = http.get(url, response => {
            if (response.statusCode === 200) {
                response.pipe(file);
            } else {
                file.close();
                fs.unlink(dest, (err) => {
                    console.log(`error: issue for ${dest}`, err);
                    reject(`Server responded with ${response.statusCode}: ${response.statusMessage}`);
                }); // Delete temp file  
            }
        });

        request.on("error", err => {
            file.close();
            console.log('msg : deleting file : ------> ', dest);
            fs.unlink(dest, (err) => {
                console.log(`error: issue for ${dest}`, err);
                reject(err.message);
            }); // Delete temp file

        });

        file.on("finish", () => {
            console.log(`msg : file download completed for : ${dest} `);
            file.close();
            resolve();
        });

        file.on("error", err => {
            file.close();

            if (err.code === "EEXIST") {
                reject("File already exists");
            } else {
                fs.unlink(dest, () => {}); // Delete temp file
                reject(err.message);
            }
        });
    });
};

const readInputFile = async (fileName) => {

    return new Promise((resolve, reject) => {
        const fileInput = [];
        if ( !fs.existsSync( fileName ) ) {
            reject(`file ${fileName} cant be found!`);
        }
        const rd = readline.createInterface({
            input: fs.createReadStream(fileName),
            output: process.stdout,
            console: false
        });
        rd.on('line', (line) => {
            line = line.replace(/(\r\n|\n|\r)/gm,"");
            if (line !== '' && !/^#/.test(line)) {
                fileInput.push(line);
            }
        });
        rd.on('error', (error) => {
            reject( new Error(error));
        });
        rd.on('close', () => {
            resolve(fileInput);
        })
    });    
};


const filterMp3FileName = async(fileList) => {

    const fileListMp3 = [];    
    if (!Array.isArray(fileList) || fileList.length === 0) {
        return Promise.resolve(fileListMp3);
    }
    for( const fileName of fileList) {
        if (/mp3$/.test(fileName))  {
            fileListMp3.push(fileName);
        }
    }
    return Promise.resolve(fileListMp3);
};


const writeJsonFile = async (filePath, content) => {
    return new Promise((resolve, reject)=> {
        try {
            let jsonString = JSON.stringify(content);
            fs.writeFileSync(filePath, jsonString, 'utf8');
            resolve(true);
        } catch(err) {
            reject(err);
        }
    });
};

const readJsonStatFile = async (filePath) => {

    try {
        if (!fs.existsSync(filePath)) {
            fs.writeFileSync(filePath, JSON.stringify({}));
        }
        const jsonString = fs.readFileSync(filePath);
        const jsonObj = JSON.parse(jsonString)
        return Promise.resolve(jsonObj);
    } catch(err) {
        console.log('msg : error', err);
        return Promise.reject('could not read file');
    }
};

const readOutputDir = async (outputDir) => {
    if (!fs.existsSync(outputDir)) {
        console.log(`msg : ${outputDir} could not be found!`);
        console.log(`msg : creating ${outputDir}`);
        fs.mkdirSync(outputDir);
    }
    const fileList = fs.readdirSync(outputDir);
    return Promise.resolve(fileList);
};

const getMp3FileNameFromUrl = async (url) => {
    if (typeof url !== 'string') return null;

    //volume01/(0003)fateha/fateha(intro).mp3
    if (!/volume\d{2}/.test(url)) return null;

    //now get the mp3 name 
    let mp3FileName =  null;
    let tmpMatch = url.match(/.+\/(?<filename>.+\.mp3)$/);
    if (tmpMatch && tmpMatch.groups && tmpMatch.groups.filename) {
        mp3FileName = tmpMatch.groups.filename;
    } 
    // replacement part of ()
    mp3FileName = mp3FileName.replace(/\(|\)/gi, "_");
    //replacement part of %20
    mp3FileName = mp3FileName.replace(/\%\d{1,}/gi, "");
    return mp3FileName;
};

const getMp3Duration = async (filePath) => {
    return new Promise((resolve, reject) => {
        try {
            const buffer = fs.readFileSync(filePath);
            const duration = getMP3Duration(buffer);
            resolve(duration);
        } catch(err) {
            reject(err);
        }

    });
};

// read the input file
// read the out put dir
// check if the file already exists
//  if yes generate the stats for mp3
// no file found , download the file , 
// generate the state of the file
const timeConverter =  (number, unit) => {
    let d, h, m, s
  
    if (isNaN(number)) {
      throw new TypeError('Value sent to seconds-converter must be a number.')
    }
  
    if (unit === 'sec' || unit === 'seconds') {
      s = number
    } else if (unit === 'ms' || unit === 'milliseconds' || !unit) {
      s = Math.floor(number / 1000)
    } else {
      throw new TypeError('Unit must be \'sec\' or \'ms\'');
    }
  
    m = Math.floor(s / 60)
    s = s % 60
    h = Math.floor(m / 60)
    m = m % 60
    d = Math.floor(h / 24)
    h = h % 24
    if (s < 10) s = '0' + s;
    if (m < 10) m = '0' + m;
    if (h < 10) h = '0' + h;

    return {days: d, hours: h, minutes: m, seconds: s}
};

( async()=> {

    try {

        let outputDir = "tafeemQuranMp3";
        const jsonFileName = "fileDownload.json";
        const fileWithUrls = '../docs/tafheem_ul_quran.md'|| './docs/test.txt' ;

        console.log(`msg : reading file : ${fileWithUrls}`);
        const fileInput = await readInputFile(path.join(__dirname,fileWithUrls));
        console.log(`msg : file reading completed. Input file length ${fileInput.length}`);

        console.log(`msg : reading output dir : ${outputDir}`);
        const outputDirFiles = await readOutputDir(path.join(__dirname , outputDir));
        console.log('msg : dir reading completed.');

        console.log(`msg : reading json file : ${jsonFileName}`);
        const jsonObject = await readJsonStatFile(path.join(__dirname,outputDir, jsonFileName));
        console.log('msg : json file reading completed.');

        console.log(`msg : filtering mp3 file for output dir ${outputDir}`);
        const filemp3s = await filterMp3FileName(outputDirFiles);
        console.log(`msg : mp3 file found. ${filemp3s.length}`);

        let indexCount =1 ;
        for(const urlLink of fileInput) {

            const fileName = await getMp3FileNameFromUrl(urlLink);
            console.log(`get the file Name : ${fileName}`);
            if ( !fileName) {
                console.log(`msg : could not get fileName ${fileName} for ${urlLink}`);
                continue;
            }
            if  ( !_.includes(filemp3s, fileName) || !jsonObject.hasOwnProperty(fileName) ) {

                const errorMsg = await downloadFile(urlLink, path.join(__dirname ,outputDir, fileName));
                if (errorMsg) {
                    indexCount++;
                    console.log(`error : for file ${fileName} ${errorMsg}`);
                    continue;
                } else {
                    console.log(`msg: ${fileName}  downloaded`);
                }
            }
            //get stats
            console.log('msg: getting stats for file ...');
            const stats = fs.statSync(path.join(__dirname ,outputDir, fileName));
            const fileSizeInBytes = stats.size;
            
            console.log(`msg: file size in bytes : ${fileSizeInBytes}`);

            //add stats obj to jsonObj
            const durationInMiliSec  = await getMp3Duration(path.join(__dirname ,outputDir, fileName));
            console.log(`msg: mili sec : ${durationInMiliSec}`);
            if (durationInMiliSec instanceof Error) {
                indexCount++;
                continue;
            }
            const durationInSec =  Math.round(durationInMiliSec / 1000);
            const timeObj = timeConverter(durationInMiliSec, 'ms');
            if (timeObj instanceof Error) continue;

            const jsonObj = {
                file_name: fileName,
                duration_in_sec: durationInSec,
                duration_in_mili_sec: durationInMiliSec,
                time : `${timeObj.hours}:${timeObj.minutes}:${timeObj.seconds}`,
                length_in_bytes : fileSizeInBytes,
                index: indexCount,
            };

            jsonObject[fileName] = jsonObj;
            let err = writeJsonFile(path.join(__dirname,outputDir, jsonFileName), jsonObject);
            if (err instanceof Error) {
                indexCount++;
                continue;
            }
            //write the jsonObj to the file
            console.log(jsonObj);
            indexCount++;    
        }

    } catch(err) {
        console.log(`Error : ${err}`);
    }
})();
