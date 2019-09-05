const express = require('express')
const router = express.Router()
const productController = require('../controller/product')


// router.get('/add-product', (req, res, next) => {
//     res.sendFile(viewPath('add-product.html'))
// })

router.get('/add-product', productController.getAddProduct)

router.post('/add-product', productController.postAddProduct)


module.exports = router
