const {startSession} = require('mongoose')
const {TransactionType,Transaction} = require('../models/transaction.model')
const {Wallet,WalletType} = require('../models/wallet.model')

module.exports = {
    createTransactionType:async(req,res)=>{
        TransactionType.create(req.body).then(result =>{
            res.status(200).json({message:"Success",data:result})
        }).catch(err=>{
            respone.Error(res,"Fail",err)
        })
    },
    //user
    getTransactions:async(req,res)=>{
        try {
            const id = req.user
            const transactions=await Transaction.find({$or:[{receiver:id},{sender:id}]}).populate('transactionTypeID').exec()
            res.status(200).json({message:"Success",data:transactions})
        } catch (error) {
            res.status(400).json({error:error})
            
        }
    },
    getTransactions_send:async(req,res)=>{
        try {
            const id = req.user
            const transactions=await Transaction.find({sender:id}).populate('transactionTypeID').exec()
            res.status(200).json({message:"Success",data:transactions})
        } catch (error) {
            res.status(400).json({error:error})
            
        }
    },
    getTransactions_receive:async(req,res)=>{
        try {
            const id = req.user
            const transactions=await Transaction.find({receiver:id}).populate('transactionTypeID').exec()
            res.status(200).json({message:"Success",data:transactions})
        } catch (error) {
            res.status(400).json({error:error})
            
        }
    }
}