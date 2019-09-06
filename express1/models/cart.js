const fs = require('fs')
const { dataPath } = require('../util/path')
const path = dataPath('cart.json')

module.exports = class cart {
    static addProduct(id, price) {
        fs.readFile(path, (err, content) => {
            let cart = {products: [], totalPrice: 0}
            if (!err)  cart = JSON.parse(content)
            let found = false
            for(let prod of cart.products) {
                if (prod.id === id) {
                    prod.qty += 1
                    found = true
                    break
                }
            }
            if (!found) cart.products.push({id: id, qty: 1})
            // string to number
            cart.totalPrice += +price 
            fs.writeFile(path, JSON.stringify(cart), err => console.log(err) )
        })
    }
}