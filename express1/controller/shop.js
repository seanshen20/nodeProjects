const Product = require('../models/product')

exports.getProducts = async (req, res, next) => {
    res.render('shop/product-list', {
        prods: await Product.fetchAll(),
        pageTitle: 'All Products',
        path: '/products'
    })
}

exports.getIndex = async (req, res, next) => {
    res.render('shop/index', {
        prods: await Product.fetchAll(),
        pageTitle: 'Shop',
        path: '/'
    })
}

exports.getCart = (req, res) => {
    res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart'
    })
}

exports.getOrders = (req, res) => {
    res.render('shop/orders', {
        path: '/orders',
        pageTitle: 'Your Orders'
    })
}

exports.getCheckout = (req, res) => {
    res.render('shop/checkout', {
        path: '/checkout',
        pageTitle: 'Checkout'
    })
}