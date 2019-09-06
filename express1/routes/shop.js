const express = require('express')
const router = express.Router()
const shopController = require('../controller/shop')


router.get("/favicon.ico", (req, res) => res.sendStatus(204));
// router.get('/', (req, res, next) => {
//     console.log('shop.js', adminData.products);
//     res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'))
// })

// router.get('/', (req, res, next) => {
//     const products = adminData.products
//     res.render('shop', {prods: products, docTitle: 'Shop'})
// })

router.get('/', shopController.getIndex)

router.get('/products', shopController.getProducts)

router.get('/cart', shopController.getCart)

router.get('/orders', shopController.getOrders)

router.get('/checkout', shopController.getCheckout)

module.exports = router 