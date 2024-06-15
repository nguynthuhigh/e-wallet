const {Schema, model} = require('mongoose')

const transactionTypeSChema = new Schema({
    typeName:{
        type:String,
        required:true,
    }
})

const transactionSchema = new Schema({
    amount:{
        type:Number,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    transactionTypeID:{
        type:Schema.Types.ObjectId,
        ref:'TransactionType',
        required:true,
    },
    sender:{
        type:Schema.Types.ObjectId,
        ref:'Wallet',
        required:true, 
    },
    receiver:{
        type:Schema.Types.ObjectId,
        ref:'Wallet',
        required:true,
    },
    branchID:{
        type:Schema.Types.ObjectId,
        ref:'PartnerBranch',
    }
},{
    timestamps: true 
})


const TransactionType = model('TransactionType',transactionTypeSChema)
const Transaction= model('Transaction',transactionSchema)

module.exports = {TransactionType,Transaction}