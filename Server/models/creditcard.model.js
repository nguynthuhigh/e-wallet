const {Schema, model} = require('mongoose')
const cryptoJS = require('../utils/crypto-js')
const { scrypt } = require('crypto')
const creaditCardSchema = new Schema({
    email: {
        type:String,
    },
    number: {
        type: String,
    },
    cvv: {
        type: String,
        set:cryptoJS.encrypt,
    },
    expires: {
        type: String,
        set:cryptoJS.encrypt,
    },
},
)
const CreditCard = model('CreditCard',creaditCardSchema)
module.exports = {CreditCard}
