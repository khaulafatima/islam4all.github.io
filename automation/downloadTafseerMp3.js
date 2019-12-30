const fs = require('fs')
    readline = require('readline')
    asyncForEach = require('async/forEachSeries');


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

        const fileInput = await readInputFile('./mp3DownloadLink123.txt');
        const outputDirFiles = await readOutputDir("");``
        const filemp3 = await filterMp3FileName(outputDirFiles);
        forEachSeries(fileInput, (urlLink, next)=> {
            //check in driectory

            // download it if not available

            // get the stats

            //write the json file
        });

    } catch(err) {
        console.log(`Error : ${err}`);
    }
})();
