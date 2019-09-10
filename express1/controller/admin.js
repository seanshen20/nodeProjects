const Product = require('../models/product')

exports.getAddProduct = (req, res, next) => {
    res.render('admin/edit-product', {
        pageTitle: 'Shop',
        path: '/admin/add-product'
    })
}

// redundant edit check
exports.getEditProduct = (req, res, next) => {
    const editMode = req.query.edit
    if (!editMode) {
        return res.redirect('/')
    }
    Product.findById(req.params.productId, product => {
        if (!product) {
            return res.redirect('/')
        }
        res.render('admin/edit-product', {
            pageTitle: 'Edit Product',
            path: '/admin/edit-product',
            edit: editMode,
            product: product
        })
    })
}

exports.postEditProduct = (req, res, next) => {
    const product = new Product(req.body)
    Product.updateProduct(product)
    res.redirect('/')
}

exports.postAddProduct = (req, res, next) => {
    console.log(req.body)
    const product = new Product(req.body)
    product.save().then(
        () => res.redirect('/')
    ).catch(() => {
        console.log(err)
    })

}

exports.getProducts = async (req, res, next) => {
    res.render('admin/products', {
        prods: await Product.fetchAll(),
        pageTitle: 'Admin Products',
        path: '/admin/products'
    })
}

exports.postDeleteProduct = (req, res, next) => {
    Product.deleteById(req.body.productId, () => {
        res.redirect('/admin/products')
    })
}