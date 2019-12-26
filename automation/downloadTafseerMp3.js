const fs = require('fs')
    readline = require('readline');;

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



const readOutputDir = async (outputDir) => {
    if (!fs.existsSync(outputDir)) {
        console.log(`msg : ${outputDir} could not be found!`);
        console.log(`msg : creating ${outputDir}`);
        fs.mkdirSync(outputDir);
    }
    const fileList = fs.readdirSync(outputDir);
    return Promise.resolve(fileList);

}
// read the input file
// read the out put dir
// check if the file already exists
//  if yes generate the stats for mp3
// no file found , download the file , 
// generate the state of the file

( async()=> {

    try {

        let fileInput = await readInputFile('./mp3DownloadLink123.txt');
        let outputDirFiles = await readOutputDir("");
    } catch(err) {
        console.log(`Error : ${err}`);
    }
})();
