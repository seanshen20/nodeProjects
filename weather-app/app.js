const geocode = require('./utils/geocode')
const weather = require('./utils/weather')
const request = require('request')

const location = process.argv[2]
if (location) {
    geocode(location, (error, data) => {
        if (error) {
            return console.log(error)
        }
        weather(data, (error, data) => {
            if (error) return console.log(error)
            console.log(data.summary)
        })
        console.log('data', data)
    })
} else {
    console.log('Input location');
}


// write a promise 
// const geo = () => {
//     return new Promise((resolve) => {
//         geocode('Beijing', (error, data) => {
//             return resolve(data)
//         })
//     })
// }
// geo().then(result => weather(result, (error, data) => {
//     console.log('data :', data.summary);
// }))

// async await 
// const forecast = async () => {
//     const location = await geo();
//     console.log(location);
//     weather(location, (error, data) => {
//         console.log(data.summary);
//     })
// }
// forecast()



