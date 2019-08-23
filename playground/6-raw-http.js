const https = require('https')

const url = 'https://api.darksky.net/forecast/cf3a3b458461992d69fb3affec49b72a/40,-40'

const request = https.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data += chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })

})

request.on('error', (error) => {
    console.log('An error', error)
})
request.end()
