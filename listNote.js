const fs = require('fs')
const chalk = require('chalk')

const data= fs.readFileSync('notes.json').toString()
const JSON_Data = JSON.parse(data)

const listNote= function(){
    console.log(chalk.cyan("NOTES"))
    const title = JSON_Data.filter(function(note){
        console.log(chalk.magenta(note.title))
    })
}

module.exports = listNote