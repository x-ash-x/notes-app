const yargs = require('yargs')
const fs = require('fs')
const notes = require('./addNote.js')
const { demandOption, describe } = require('yargs')
const removeNotes = require('./removeNote.js')
const listNote = require('./listNote.js')
const readNotes = require('./readNote.js')

yargs.command({
    command: 'list',
    describe:'Lists all notes',
    handler: function(){
        listNote()
    }
})

yargs.command({
    command : 'read',
    describe : 'read a note',
    handler: function(argv){
        readNotes(argv.title)
    },
    builder : {
        title: {
            describe:'Enter title to read note',
            demandOption : true,
            type: 'string'
        }
    }
})

yargs.command({
    command : 'add',
    describe : 'Add a note',
    handler: function(argv){
        notes(argv.title,argv.body)
    },
    builder: {
        title: {
            describe : 'Title of the note',
            demandOption : true,
            type: 'string'
        },
        body: {
            describe: 'Note content',
            demandOption : true,
            type : 'string'
        }
    }

})

yargs.command({
    command:'remove',
    describe:'removes a note',
    handler: function(argv){
        removeNotes(argv.title)
    },
    builder:{
        title:{
            describe:'removes a note',
            demandOption:true
        }
    }
})

yargs.parse()