const fs = require('fs')
const { dataPath } = require('../util/path')
module.exports = class Product {
    constructor(title) {
        this.title = title
    }

    save() {
        const path = dataPath('product.json')
        fs.readFile(path, (err, data) => {
            let products = []
            if (!err) {
                products = JSON.parse(data)
            }
            products.push(this)
            fs.writeFile(path, JSON.stringify(products), err => {
                console.log(err)
            })
        })
    }

    static async fetchAll(callback) {
        const path = dataPath('product.json')
        
        // fs.readFile(path, (err, data) => {
        //     let products = []
        //     products = JSON.parse(data)
        //     console.log(products)
        //     callback(products)
        // })
        const promise = new Promise ((resolve) => {
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
}