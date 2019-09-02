const fs = require('fs')

const requestHandler = (req, res) => {
    const url = req.url
    const method = req.method
    if (url === '/') {
        res.write(`<html>
    <head>
        <title>Enter Message</title>
    </head>
    <body>
        <form action="/message" method="POST">
            <input type="text" name="message"/>
            <button type="submit">
                Send
            </button>
           
        </form>
    </body>
    </html>`)
        return res.end()
    }
    if (url === '/message' && method === 'POST') {
        const body = []
        req.on('data', (chunk) => {
            console.log(chunk)
            body.push(chunk)
        })
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString()
            const pattern = /\w+\\?\w+/g
            console.log(parsedBody.match(pattern)[1])
            fs.writeFile('message.txt', parsedBody.match(pattern)[1], (err) => {
                res.statusCode = 302
                res.setHeader('Location', '/')
                return res.end()
            })
        })

    }

    res.setHeader('Content-Type', 'text/html')
    res.write(`<html>
    <head>
        <title>My first Page</title>
    </head>
    <body>
        <h1>Hello</h1>
    </body>
    </html>`)
    res.end()
}

// module.exports = {
//     handler: requestHandler,
//     someText: 'abc'
// }

exports.handler = requestHandler

