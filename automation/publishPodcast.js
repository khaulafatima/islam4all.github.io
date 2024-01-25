//This app will create app 
//1. support new folder for rss fee
//2. ead the yml file fo the post 
//3. generate the xml feed using the pod 
//4. commit the code 
const  inquirer = require('inquirer');



inquirer.prompt([
    {
        name: 'createNewPod',
        message: 'Do u want to create new podcastFeed?',
        default: 'n',
        choices: ['Y', 'n']
    }

]).then(answers => {
    console.info('Answer:', answers.createNewPod);
    //if (answers.createNewPod ==)
});