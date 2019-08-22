const fs = require('fs')
const chalk = require('chalk')

const listNote = () => {
    const note = loadNotes()
    console.log(chalk.inverse('Your notes'))
    note.forEach(e => {
        console.log(chalk.blue(e.title) + ':' + chalk.yellow(e.body))
    })    
}

const readNote = (title) => {
    const notes = loadNotes()
    const search = notes.find(note => note.title === title)
    if (search) {
        console.log(chalk.green.bold(search.title + ': '+ search.body))
    } else {
        console.log(chalk.red.inverse('Not found'))
    }
}

const addNote = (title, body) => {
    const notes = loadNotes()
    // const duplicateNotes = notes.filter(note => note.title === title)
    const duplicateNote = notes.find(note => note.title === title)
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(notes)
    } else {
        console.log('Note title taken')
    }
}

const removeNote = (title) => {
    const copy = loadNotes()
    const notes = copy.filter(note => {
        return note.title !== title
    })
    if (notes.length === copy.length) {
        console.log(chalk.red.inverse('No note found'))
    } else {
        console.log(chalk.green.inverse('Note removed'))
        saveNotes(notes)
    }
    // while (true) {
    //     const index = notes.map(e => e.title).indexOf(title)
    //     if (index !== -1) {
    //         notes.splice(index, 1)
    //     } else {break}

    // }
    console.log(notes)
}

const saveNotes = (notes) => {
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJson)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    } catch (e) {
        return []
    }
}


module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNote: listNote,
    readNote: readNote
}