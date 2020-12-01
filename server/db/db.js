const knex = require('knex')
const config = require('./knexfile')
const env = process.env.NODE_ENV || 'development'
const connection = knex(config[env])

function listProducts (db = connection) {
    return db('products').select()
}













module.exports = {
    listProducts
}