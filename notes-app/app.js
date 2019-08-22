const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes')

yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        content: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.addNote(argv.title, argv.content)
    }
        
})

yargs.command({
    command:'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    describe: 'Remove a note',
    handler: (argv)=> notes.removeNote(argv.title)
})

yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: ()=>console.log('List your notes')
})

yargs.command({
    command: 'read',
    describe: 'Reading a note',
    handler: ()=>console.log('Reading a note')
})

yargs.parse()