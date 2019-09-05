const Product = require('../models/product')

exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {
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
    res.render('shop', {
        prods: await Product.fetchAll(),
        pageTitle: 'Shop',
        path: '/'
    })

    // const callback = (product) => {
    //     res.render('shop', {
    //         prods: product,
    //         pageTitle: 'Shop',
    //         path: '/'
    //     })
    // }
    // Product.fetchAll(callback)


}