routeHandler = (req, res) => {
    const url = req.url
    const method = req.method
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html')
        res.write(
            `<html>
                <head>
                    <title>My first Page</title>
                </head>
                <body>
                    <h1>Home page</h1>
                    <form action="/create-user" method="POST">
                        <input type="text" name="username">
                        </input>
                        <button type="submit">
                            submit
                        </button>
                    <form>
                </body>
            </html>`

        )
        return res.end()
    }
    if (url === '/users') {
        res.setHeader('Content-Type', 'text/html')
        res.write(
            `
                    <html>
                        <head>
                            <title>User</title>
                        </head>
                        <body>
                            <ul><li>User1</li></ul>
                        </body>
                    </html>
                    `
        )
        return res.end()
    }
    if (url === '/create-user' && method === 'POST') {
        const body = []
        req.on('data', (chunk) => {
            body.push(chunk)
        })
        
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString()
            const input = parsedBody.split('=')[1]
            console.log(input)
            res.statusCode = 302
            res.setHeader('Location', '/')
            return res.end()
        })

    }

}

exports.handler = routeHandler


