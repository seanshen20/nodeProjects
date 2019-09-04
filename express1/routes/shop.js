const express = require('express')
const router = express.Router()
const path = require('path')
const adminData = require('./admin')

router.get("/favicon.ico", (req, res) => res.sendStatus(204));
// router.get('/', (req, res, next) => {
//     console.log('shop.js', adminData.products);
//     res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'))
// })

// router.get('/', (req, res, next) => {
//     const products = adminData.products
//     res.render('shop', {prods: products, docTitle: 'Shop'})
// })

router.get('/', (req, res, next) => {
    const products = adminData.products
    res.render('shop', {
        prods: products,
        pageTitle: 'Shop',
        path: '/'
    })
})

module.exports = router 