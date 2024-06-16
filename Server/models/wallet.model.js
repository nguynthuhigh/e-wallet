const {Schema, model} = require('mongoose')

const walletTypeSchema = new Schema({

    code:{
        type: String,
        required:true,
        unique:true
    },
    name:{
        type: String,
        required:true,
    }
},{
    timestamps: true 
})

const walletSchema = new Schema({
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
    walletTypeID:{
        type:Schema.Types.ObjectId,
        ref:'WalletType'
    }
},{
    timestamps: true 
})

const WalletType = model('WalletType',walletTypeSchema)
const Wallet= model('Wallet',walletSchema)

module.exports = {WalletType,Wallet}
