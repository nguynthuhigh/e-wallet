const { date } = require('yup');
const {WalletType} = require('../models/wallet.model')
const respone = require('../utils/respone')
module.exports  = {
    createWalletType:async(req,res)=>{
        WalletType.create(req.body).then(result =>{
            res.status(200).json({message:"Success",data:result})
        }).catch(err=>{
            respone.Error(res,"Fail",err)
        })
    }
}