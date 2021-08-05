const fs = require('fs')
const chalk = require('chalk')

var dataBuffer = fs.readFileSync('notes.json')
var dataJSON = dataBuffer.toString()
var data = JSON.parse(dataJSON)

const removeNotes = function(title){
    const notes = data.filter(function(note){
        return note.title!==title
    })
    update(notes)
}

const update = function(notes){
    if(data.length<=notes.length){
        console.log(chalk.bgRed('No such note found!!'))
    } else {
        const notesJSON = JSON.stringify(notes)
        fs.writeFileSync('notes.json',notesJSON)
        console.log(chalk.bgGreen('Note removed Successfully'))
    }
}

module.exports = removeNotes
