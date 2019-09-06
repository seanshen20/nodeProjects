const fs = require('fs')
const uuid = require('uuid/v1');

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
        this.id = productObject.id
    }
    async save() {
        this.id = uuid()
        const products = await getProductsFromFile()
        products.push(this)
        fs.writeFile(path, JSON.stringify(products), err => {
            console.log(err)
        })
    }
    static async fetchAll() {
        return await getProductsFromFile()
    }

    static async findById(id, cb) {
        const products = await getProductsFromFile()
        const product = products.find(ele => ele.id === id)
        cb(product)
    }

    static async updateProduct(product) {
        const products = await getProductsFromFile()
        const i = products.findIndex(p => p.id === product.id)
        products[i] = product
        fs.writeFile(path, JSON.stringify(products), err => {console.log(err)}) 
    }
}