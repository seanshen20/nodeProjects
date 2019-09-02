const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const weather = require('./utils/weather')
const axios = require('axios')
const app = express()


// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialPath = path.join(__dirname, '../templates/partials')
// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))


app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Sean Shen'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Lu'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Helper Page',
        help: 'this is a help',
        name: 'Lucas'
    })
})

app.get('/test', (req, res) => {
    const response = res
    axios.get('https://api.darksky.net/forecast/cf3a3b458461992d69fb3affec49b72a/50,50')
        .then(res => response.send(res.data))
    
})
app.get('/weather', (req, res) => {
    const location = req.query.address
    if (!location) {
        return res.send({ error: 'Please input a location' })
    }
    
    geocode(location, (error, data) => {
        if (error) {
            return res.send({ error: error })
        }
        const geo = data
        weather(data, (error, data) => {
            if (error) return res.send({ error: error })
            return res.send({ 
                location: geo.location,
                forecast: data.daily.summary,
                address: location
             })
        })
    })

})



app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Sean',
        errorMessage: 'Help article not found'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Sean',
        errorMessage: 'Page not found'
    })
})

app.listen(3001, () => {
    console.log('Server is up on port 3001.')
})


