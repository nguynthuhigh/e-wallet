const {Schema, model} = require('mongoose')

const creaditCardSchema = new Schema({
    email: String,
    number: String,
    cvv: String,
    expires: String
})
const CreditCard = model('CreditCard',creaditCardSchema)
module.exports = {CreditCard}
