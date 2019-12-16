const mysql = require('mysql')

const db = mysql.createConnection({
    host:'localhost',
    port:3306,
    user: 'admin',
    password: 'password',
    database:'library'
})

db.connect();

module.exports = db;