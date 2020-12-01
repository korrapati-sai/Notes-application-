const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

// create a add command
yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        body:{
            describe:'the body',
            demandOption: true,
            type:'string'
        },
        title:{
            describe:'Note title',
            demandOption: true,
            type:'String'

        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
})

// create a remove command
yargs.command({
    command:'remove',
    describe:'Remove a note',
    builder:{
        title:{
            describe:"to remove the title",
            demandOption: true,
            type:'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

// create a lsit command
yargs.command({
    command:'list',
    describe:'listing the notes',
    handler(){
        notes.listNotes()
    }
})

// create a read command
yargs.command({
    command:'read',
    describe:'to read the contents of the note',
    builder:{
title:{
    describe:"this is the notes",
    demandOption: true,
    type: 'string'
}
    },
    handler(argv){
      notes.readNote(argv.title)
    }
})

//console.log(yargs.argv)

yargs.parse()