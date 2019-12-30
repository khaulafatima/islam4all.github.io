const fs = require('fs')
    readline = require('readline')
    path = require('path'),
    http = require('http'),
    asyncForEach = require('async/forEachSeries');


const downloadFile = async (url, destination) => {

    var file = fs.createWriteStream(dest);
    var request = http.get(url, function (response) {
        response.pipe(file);
        file.on('finish', function () {
            file.close(cb);
        });
    });
};

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

// read the input file
// read the out put dir
// check if the file already exists
//  if yes generate the stats for mp3
// no file found , download the file , 
// generate the state of the file

( async()=> {

    try {

        let outputDir = "";
        const jsonFileName = "";

        const fileInput = await readInputFile('./mp3DownloadLink123.txt');
        const outputDirFiles = await readOutputDir("");
        const jsonObject = await readJsonStatFile(path.join(outputDir, jsonFileName));
        const filemp3 = await filterMp3FileName(outputDirFiles);
        forEachSeries(fileInput, (urlLink, next)=> {
            //check the file in the dir
            let fileName = await getMp3FileNameFromUrl(urlLink);
            if (!fileName) return next(fileName);
            if (!jsonObject[fileName]) {
                // download it if not available

            }
            
            

            // get the stats

            //write the json file
        }, (err)=> {

        });

    } catch(err) {
        console.log(`Error : ${err}`);
    }
})();
