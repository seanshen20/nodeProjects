const Cart = require('./cart')
const db = require('../util/database')

module.exports = class Product {
    constructor(productObject) {
        this.title = productObject.title
        this.imageUrl = productObject.imageUrl
        this.description = productObject.description
        this.price = productObject.price
        this.id = productObject.id
    }
    save() {
        return db.execute('insert into products (title, price, imageUrl, description) values (?, ?, ?, ?)',
            [this.title, this.price, this.imageUrl, this.description])
    }
    static fetchAll() {
        return db.execute('SELECT * FROM products')
    }

    static async findById(id) {
        return db.execute('select * from products where products.id = ?', [id])
    }

    static async updateProduct(product) {

    }

    static async deleteById(id, cb) {

    }

}