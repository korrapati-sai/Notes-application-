const fs = require('fs')
const chalk = require('chalk')
const getNotes = () => {
    return 'Your notes...'
}

const addNote =  (title, body) => {
    const notes = loadNotes()
     const duplicateNote = notes.find((note) => note.title === title)
    // const duplicateNotes = notes.filter(function (note) {
    //     return note.title === title
    // })


    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.bgGreen('New note added!'))
    } else {
        console.log(chalk.bgRed('Note title taken!')  )
    }
}

const saveNotes = (notes) =>  {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesTokeep = notes.filter((note) => note.title !== title)
    if(notes.length > notesTokeep.length){
        console.log(chalk.bgGreen('Notes removed'))
        saveNotes(notesTokeep)
    }
    else{
        console.log(chalk.bgRed('No Note found!'))
    }
  

}

const listNotes =() => {
    const notes = loadNotes()
    console.log(chalk.bgGreen('your notes'))
    notes.forEach((note) => {
        console.log(note.title)
        
    })
}

const loadNotes =  () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const readNote = (title) =>{
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
    if(note){
        console.log(chalk.bgGray(note.title))
        console.log(note.body)

    }else{
        console.log(chalk.bgRed('note not found'))
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}