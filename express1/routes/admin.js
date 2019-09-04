const express = require('express')
const router = express.Router()
const {viewPath} = require('../util/path')

const products = []

router.get('/add-product', (req, res, next) => {
    res.sendFile(viewPath('add-product.html'))
})

router.post('/add-product', (req, res, next) => {
    console.log(req.body)
    products.push({title: req.body.title})
    res.redirect('/admin/add-product')
})


exports.routes = router
exports.products = products