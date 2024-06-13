const { model } = require('mongoose')
const CreditCard = require('../models/creditcard.model')

const cryptoJS = require('../utils/crypto-js')
module.exports = {
    addcard: (req,res,next)=>{
        const  {email,number,cvv,expires} = req.body;
        const encrypt = cryptoJS.encrypt('123')
        console.log(encrypt)
        console.log(cryptoJS.decrypt(encrypt))


        res.json({message:"ok"})
    }
}