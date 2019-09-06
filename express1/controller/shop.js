const Product = require('../models/product')
const Cart = require('../models/cart')

exports.getProducts = async (req, res, next) => {
    res.render('shop/product-list', {
        prods: await Product.fetchAll(),
        pageTitle: 'All Products',
        path: '/products'
    })
}

exports.getProduct = (req, res, next) => {
    const prodId = req.params.productId
    Product.findById(prodId, product => {
        console.log(product)
        res.render('shop/product-detail', {
            product: product,
            pageTitle: product.title,
            path: '/products'
        })
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

exports.postCart = (req, res) => {
    const prodId = req.body.productId
    console.log(prodId);
    Product.findById(prodId, product => {
        Cart.addProduct(prodId, product.price)
    })
    res.redirect('/cart')
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