const express = require('express')
const router = express.Router()

const users = []

router.get('/users', (req, res) => {
    res.render('users', {title: "User Page"})
})

router.post('/users', (req, res) => {
    const user = req.body
    users.push(user)
    res.redirect('/users')
})

exports.router = router 
exports.users =users