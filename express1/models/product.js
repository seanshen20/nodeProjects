const fs = require('fs')
const { dataPath } = require('../util/path')
const path = dataPath('product.json')
const getProductsFromFile = async () => {
    const promise = new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            let products = []
            if (!err) {
                products = JSON.parse(data)
            }
            resolve(products)
        })
    })
    return await promise
}
module.exports = class Product {
    constructor(productObject) {
        this.title = productObject.title
        this.imageUrl = productObject.imageUrl
        this.description = productObject.description
        this.price = productObject.price
    }
    async save() {
        this.id = Math.random().toString()
        const products = await getProductsFromFile()
        products.push(this)
        fs.writeFile(path, JSON.stringify(products), err => {
            console.log(err)
        })
    }
    static async fetchAll() {
        return await getProductsFromFile()
    }
}