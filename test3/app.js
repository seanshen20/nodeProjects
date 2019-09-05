const express = require('express')
const homeRoute = require('./routers/index')
const userData = require('./routers/users')
const bodyParser = require('body-parser')
const app = express()

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended: true}))
app.use(homeRoute)
app.use(userData.router)
app.use((req, res) => {
    res.send('<h1>404 Page</h1>')
})
app.listen(3001)

