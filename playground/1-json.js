const fs = require('fs')
// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// const bookJson = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJson)

// const dataBuffer = fs.readFileSync('1-json.json')
// console.log(dataBuffer.toString())
// const data = JSON.parse(dataBuffer.toString())
// console.log(data.title)

const object = JSON.parse(fs.readFileSync('1-json.json').toString()) 
console.log('object :', object);
object.name = 'sean'
object.age = 33
fs.writeFileSync('1-json.json', JSON.stringify(object))