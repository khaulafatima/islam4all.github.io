const fs = require('fs')
    readline = require('readline')
    path = require('path'),
    http = require('http'),
    _ = require('lodash'),
    mp3Duration = require('mp3-duration');
    ;

const downloadFile = (url, dest) => {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest, { flags: "wx" });

        const request = http.get(url, response => {
            if (response.statusCode === 200) {
                response.pipe(file);
            } else {
                file.close();
                fs.unlink(dest, () => {}); // Delete temp file
                reject(`Server responded with ${response.statusCode}: ${response.statusMessage}`);
            }
        });

        request.on("error", err => {
            file.close();
            fs.unlink(dest, () => {}); // Delete temp file
            reject(err.message);
        });

        file.on("finish", () => {
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
    

/* const downloadFile = async (url, destination) => {

    var file = fs.createWriteStream(destination);
    var request = http.get(url, (response) => {
        if () {

        }
        response.pipe(file);
        file.on('finish', function () {
            file.close(cb);
        }
        ).on('error', (err) => {             
            fs.unlink(destination); 
            if (cb) cb(err.message);
          });;
    });
};
 */
const readInputFile = async (fileName) => {

    const fileInput = [];
    if ( !fs.existsSync( fileName ) ) {
        return Promise.reject(`file ${fileName} cant be found!`);
    }
    const rd = readline.createInterface({
        input: fs.createReadStream(fileName),
        output: process.stdout,
        console: false
    });
    rd.on('line', (line) => {
        fileInput.push(line);
    });
    rd.on('error', (error) => {
        return Promise.reject( new Error(error));
    });

    return Promise.resolve(fileInput);
};


const filterMp3FileName = async(fileList) => {
    

    const fileListMp3 = [];    
    if (!Array.isArray(fileList) || fileList.length === 0) {
        return Promise.resolve(fileListMp3);
    }
    fileList.forEach(element => {
        if (/\/mp3$/.test(element)) fileListMp3.push(element);
    });
    return Promise.resolve(fileListMp3);
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
    if (typeof url !== String) {
        return null;
    }
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
        mp3Duration(filePath, (err, duration) {
            if (err) reject(err.message);
            //console.log('Your file is ' + duration + ' seconds long');
            resolve(duration);
        });
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
  
    return {days: d, hours: h, minutes: m, seconds: s}
};

( async()=> {

    try {

        let outputDir = "";
        const jsonFileName = "";

        const fileInput = await readInputFile('./mp3DownloadLink123.txt');
        const outputDirFiles = await readOutputDir(outputDir);
        const jsonObject = await readJsonStatFile(path.join(outputDir, jsonFileName));
        const filemp3s = await filterMp3FileName(outputDirFiles);
        for(const urlLink of fileInput) {

            const fileName = await getMp3FileNameFromUrl(urlLink);
            if ( !fileName) {
                console.log(`msg : could not get fileName ${fileName} for ${urlLink}`);
                continue;
            }
            if  ( !jsonObject[fileName] ) {

                //check the file in the dir
                if (_.includes(filemp3s, fileName)) {
                    console.log(`msg : ${fileName} is available}`);
                    continue;
                }
                const errorMsg = await downloadFile(urlLink, path.join(outputDirFiles, fileName));
                if (errorMsg) {
                    console.log(`error : for file ${fileName} ${errorMsg}`);
                    continue;
                }
                //get stats
                const stats = fs.statSync(path.join(outputDirFiles, fileName));
                const fileSizeInBytes = stats.size;
                //add stats obj to jsonObj
                const durationInMiliSec  = await getMp3Duration(path.join(outputDirFiles, fileName));
                if (durationInMiliSec instanceof Error) {
                    continue;
                }
                const durationInSec =  Math.floor(durationInMiliSec / 1000);
                const timeObj = timeConverter(durationInMiliSec, 'ms');
                if (timeObj instanceof Error) continue;

                const jsonObj = {
                    file_name: fileName,
                    duration_in_sec: durationInSec,
                    duration_in_mili_sec: durationInMiliSec,
                    time : `${timeObj.hours}:${timeObj.minutes}:${timeObj.seconds}`,
                };

                //write the jsonObj to the file

                console.log(jsonObj);
                
            }


        }

    } catch(err) {
        console.log(`Error : ${err}`);
    }
})();
