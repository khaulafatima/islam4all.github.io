const YAML = require('yamljs'),
    fs = require('fs'),
    chalk = require('chalk'),
    yargs = require('yargs'),
    _ = require('lodash'),
    youtubeDownloader = require('horizon-youtube-mp3');

const log = console.log;
const stream = fs.WriteStream;

//const { getInfo , downloadToLocal } = promisify.methods(youtubeDownloader, ['getInfo' , 'downloadToLocal']);


// user input will list of url input.yml
// validate the url
// than create the output json
/*
    {
        mp3_filenname: null,
        youtube_link: null,
        description: null,


    }
*/
const argv = yargs
    .usage('$0 <command> [option]')
    .command({
        command: 'dw_yt_mp3',
        aliases: ['dy'],
        desc: 'download youtube video file as mp3',
    })
    .demandCommand(1, "")
    .strict()
    .option('yml', {
        alias: 'y',
        type: 'string',
        description: 'input yml file'
    })
    .option('link', {
        alias: 'l',
        type: 'string',
        description: 'youtube link'
    })
    .option('output', {
        alias: 'o',
        type: 'string',
        description: 'output directory for the task'
    })
    .help()
    .argv;

const _getYoutubeUrlInfo = async (url = null)=> {
    return new Promise((resolved, reject)=> {
        youtubeDownloader.getInfo(url, (err, data)=> {
            if (err) return reject(err);
            resolved(data);
        });
    });
}

const processLink = async (url = null) => {
    let youtubeInfo = await getInfo(url);
};

const processYMLFile = (ymlFile= null) => {

    if (fs.existsSync(ymlFile)) {
        log(log(chalk.red(`msg : yml file 📁 '${ymlFile}' cnt be found`)));
        return false;
    }
    const fileContent = YAML.load(ymlFile);
    return fileContent;
};

//various lib for asyn Neo-Async and promise https://github.com/suguru03/aigle
let file = null,
    link = null;
if (_.includes(argv._, 'dy') || _.includes(argv._, 'dw_yt_mp3')) {
    if (argv.yml) {
        file = argv.yml;
    } else if (argv.link) {
        link = argv.link;
        (async ()=> {
            let youtubeData = await _getYoutubeUrlInfo(link);
            if (youtubeData) {
                log(youtubeData);
            } else {
                log(log(chalk.red(`msg : something went wrong`)));
            }
        })();

    } else {
        log(chalk.red.bold('msg : 😞😞😞 neither file 📁 or youtube link 🔗 is provided.'));
        process.exit(0);
    }
}
