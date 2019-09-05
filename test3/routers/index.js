const express = require('express')
const router = express.Router()
const userData = require('./users')

router.get('/', (req, res) => {
    console.log(userData.users)
    res.render('home', {
        users: userData.users,
        title: 'Home Page'
    })
})

module.exports = router
