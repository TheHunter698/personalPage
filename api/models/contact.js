const mongoose = require('mongoose')
const Schema = mongoose.Schema

var contactSchema = new Schema({
    name = String,
    surname = String,
    email = String,
    phone = Number,
})

var contact = mongoose.model('contacts', contactSchema)
module.exports = contact