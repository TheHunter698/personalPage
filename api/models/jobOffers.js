const mongoose = require('mongoose')
const Schema = mongoose.Schema

var jobOfferSchema = new Schema({
    contact = String,
    position = String,
    time = String,
    location = String,
})

var jobOffer = mongoose.model('jobs', jobOfferSchema)
module.exports = jobOffer