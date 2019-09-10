const mysql = require('mysql2')

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node-project',
    password: 'sean',
    port: 3303
    
})

module.exports = pool.promise()