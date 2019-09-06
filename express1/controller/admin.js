const Product = require('../models/product')

exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product', {
        pageTitle: 'Shop',
        path: '/admin/add-product'
    })
}

exports.postAddProduct = (req, res, next) => {
    console.log(req.body)
    const product = new Product(req.body)
    product.save()
    res.redirect('/admin/add-product')
}

exports.getProducts = async (req, res, next) => {
    res.render('admin/products', {
        prods: await Product.fetchAll(),
        pageTitle: 'Admin Products',
        path: '/admin/products'
    })
}