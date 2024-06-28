const {Schema, model} = require('mongoose')
const cryptoJS = require('../utils/crypto-js')

const currencySchema = new Schema({
    _id:{
        type: String,
    },
    symbol:{
        type: String,
        required:true,
        unique:true
    },
    name:{
        type: String,
        required:true,
        unique:true

    }
},{
    timestamps: true 
})

const walletSchema = new Schema({
    address:{
        type:String,
        required:false,
    },
    mnemonic:{
        type:String,
        required:false,
        set:cryptoJS.encrypt,
    },
    balance:{
        type:Number,
        required:true,
        default:0
    },
    userID:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    currencies:[{
        balance:{
            type:Number,
            default:0,
            required:true
        },
        currency:{
            type:String,
            required:true,
            ref:'Currency',
        }
    }]
},{
    timestamps: true 
})

const Currency = model('Currency',currencySchema)
const Wallet= model('Wallet',walletSchema)

module.exports = {Wallet,Currency}
