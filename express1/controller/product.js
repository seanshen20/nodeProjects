const Product = require('../models/product')

exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product', {
        pageTitle: 'Shop',
        path: '/admin/add-product'
    })
}

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title)
    product.save()
    res.redirect('/admin/add-product')
}

exports.getProducts = async (req, res, next) => {
    res.render('shop/product-list', {
        prods: await Product.fetchAll(),
        pageTitle: 'Shop',
        path: '/'
    })
}