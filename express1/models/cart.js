const fs = require('fs')
const { dataPath } = require('../util/path')
const path = dataPath('cart.json')

module.exports = class cart {
    static addProduct(id, price) {
        fs.readFile(path, (err, content) => {
            let cart = { products: [], totalPrice: 0 }
            if (!err) cart = JSON.parse(content)
            let found = false
            for (let prod of cart.products) {
                if (prod.id === id) {
                    prod.qty += 1
                    found = true
                    break
                }
            }
            if (!found) cart.products.push({ id: id, qty: 1 })
            // string to number
            cart.totalPrice += +price
            fs.writeFile(path, JSON.stringify(cart), err => console.log(err))
        })
    }

    static deleteProduct(id, price) {
        fs.readFile(path, (err, fileContent) => {
            if (err) return
            const cart = JSON.parse(fileContent)
            const product = cart.products.find(p => p.id === id)
            if (typeof product !== 'undefined') {
                cart.totalPrice = cart.totalPrice - product.qty * price
                cart.products = cart.products.filter(p => p.id !== id)
                fs.writeFile(path, JSON.stringify(cart), err => console.log(err))
            }
        })
    }
}