const Product = require('../models/product')
const Cart = require('../models/cart')

exports.getProducts = async (req, res, next) => {
    Product.fetchAll()
        .then(([rows, col]) => {
            console.log(rows);
            res.render('shop/product-list', {
                prods: rows,
                pageTitle: 'All Products',
                path: '/products'
            })
        })
        .catch(err => console.log(err))
}

exports.getProduct = (req, res, next) => {
    const prodId = req.params.productId
    Product.findById(prodId)
        .then(
            ([product]) => {
                res.render('shop/product-detail', {
                    product: product[0],
                    pageTitle: product.title,
                    path: '/products'
                })
            })
        .catch (err =>console.log(err))
}





exports.getIndex = (req, res, next) => {
    Product.fetchAll()
        .then(([rows, col]) => {
            console.log(rows);
            res.render('shop/index', {
                prods: rows,
                pageTitle: 'Shop',
                path: '/'
            })
        })
        .catch(err => console.log(err))
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