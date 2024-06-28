const {Transaction} = require('../models/transaction.model')
const {Currency,Wallet} = require('../models/wallet.model')
const {startSession} = require('mongoose')
const wallet = require('../services/wallet.services')
const {Response} = require('../utils/response')
module.exports  = {
    //admin
    getCurrency:async(req,res)=>{
        try {
            Currency.find(req.body).then(data=>{
                return Response(res,"Success",data,200)
                
            }).catch(err=>{
                return Response(res,err,null,400)
            })
        } catch (error) {
            return Response(res,error,null,400)
        }
    },
    addCurrency:async(req,res)=>{
        try {
            Currency.create(req.body).then(data=>{
                return Response(res,"Success",data,200)
                
            }).catch(err=>{
                return Response(res,err,null,400)
            })
        } catch (error) {
            return Response(res,error,null,400)
        }
    },
    //user
    sendMoney: async (req, res) => {
        try {
            const {receiver,amount,message,currency} = req.body
            const userID = req.user
            const user_wallet =await Wallet.findOne({userID:userID,'currencies.currency':currency})
            const currencyBalance = user_wallet.currencies.find(item => item.currency === currency).balance
            if(currencyBalance >= amount){
                Transaction.create({
                    type:'transfer',
                    amount:amount,
                    message:message,
                    currency:currency,
                    sender:userID,
                    receiver:receiver
                }).then(data=>{
                    return Response(res,"Nhập mã bảo mật",data,200)
                }).catch(error=>{
                    return Response(res,error,null,400)
                })
            }
            else{
                return Response(res,"Số dư không đủ",null,400)
            }
        } catch (error) {
            return Response(res,error,null,400)
        }
    },
    verifyTransaction:async (req,res)=>{
        const {security_code,sender,receiver,transactionID,currency,amount }= req.body;
        const session = await startSession();
        try {
            
            await session.withTransaction(async () => {
                if(req.security_code !== security_code){
                    await session.abortTransaction();
                    return Response(res,"Mã bảo mật không đúng vui lòng nhập lại",null,200)
                }
                //update balance's sender
                await Wallet.findOneAndUpdate(
                    {userID:sender,'currencies.currency':currency},
                    {$inc : {'currencies.$.balance':-amount}},
                    {session})
                //update balance's receiver
                await Wallet.findOneAndUpdate(
                    {userID:receiver,'currencies.currency':currency},
                    {$inc : {'currencies.$.balance':+amount}},
                    {session})
                //update status's transaction
                const data = await Transaction.findByIdAndUpdate({_id:transactionID},
                    {status:"completed"},
                    {new: true},
                    {session})
                return Response(res,"Success",data,200)

            });
        } catch (error) {
            console.log(error)
            return Response(res,error,null,400)
        }
        finally {
            session.endSession();
        }
    },
    getAddressETH:async(req,res)=>{
        try {
            const id = req.user
            const type = await WalletType.findOne({code:"ETH"})
            const wallet_eth =await Wallet.findOne({userID:id,walletTypeID:type._id}).populate('walletTypeID').exec()
            if(!wallet_eth){
                return res.status(400).json({message:"Người dùng chưa tạo ví ETH"})
            }
            const wallet={
                address:wallet_eth.address,
                balance:wallet_eth.balance,
                walletType:wallet_eth.walletTypeID
            }
            return res.status(200).json({message:"Success",data:wallet})
        } catch (error) {
            return res.status(400).json({error:error})
        }
    }
}