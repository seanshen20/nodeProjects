const express = require('express')
const router = express.Router()
const adminController = require('../controller/admin')


// router.get('/add-product', (req, res, next) => {
//     res.sendFile(viewPath('add-product.html'))
// })

// /admin/
router.get('/add-product', adminController.getAddProduct)

router.post('/add-product', adminController.postAddProduct)

router.get('/products', adminController.getProducts)

router.get('/edit-product/:productId', adminController.getEditProduct)

router.post('/edit-product/', adminController.postEditProduct)

router.post('/delete-product/', adminController.postDeleteProduct)


module.exports = router
