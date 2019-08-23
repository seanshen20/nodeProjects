const request = require('request')

const weather = (location, callback) => {
    const url = 'https://api.darksky.net/forecast/cf3a3b458461992d69fb3affec49b72a/' + encodeURIComponent(location.latitude) + ','+ encodeURIComponent(location.longitude)
    request({url, json: true}, (error, res) => {
        if (error) {
            callback('Unable to connect to weather service !')
        } else if (res.body.error) {
            callback('Unable to find location')
        } else {
            callback(undefined, res.body.daily)
        }
    })
} 

module.exports = weather