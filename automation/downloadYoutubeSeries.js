const YAML = require('yamljs');
const fs = require('fs');
const chalk = require('chalk');
const yargs = require('yargs');
const _ = require('lodash');
const youtubeDownloader = require('horizon-youtube-mp3');
const log = console.log;

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
let argv = yargs
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
console.log(argv);

let file = null;
if (_.includes(argv._, 'dy') || _.includes(argv._, 'dw_yt_mp3')) {
    if (argv.yml) {
         
    } else if (argv.link) {
        log(chalk.green('msg : link downloader 🔗 in development 😉😉😉'));
    } else {
        log(chalk.red.bold('msg : 😞😞😞 neither file 📁 or youtubr link 🔗 is provided.'));
        process.exit(0);
    }
}
let fileName = null;
if (fs.existsSync(fileName)) {
    
    
}
const fileContent = YAML.load(fileName);
//various lib for asyn Neo-Async and promise https://github.com/suguru03/aigle



