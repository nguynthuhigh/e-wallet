const {Transaction} = require('../models/transaction.model')
const {Currency,Wallet} = require('../models/wallet.model')
const {startSession} = require('mongoose')
const wallet = require('../services/wallet.services')
const {Response} = require('../utils/response')
const bcrypt = require('../utils/bcrypt')
const stripe = require('../services/stripe.services')
const {CreditCard} = require('../models/creditcard.model')
const { compare } = require('bcryptjs')
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
            const getCurrency = await Currency.findOne({symbol:currency});

            const user_wallet =await Wallet.findOne({userID:userID})
            const currencyBalance = user_wallet.currencies.find(item => item.currency.equals(getCurrency._id))
            if(currencyBalance.balance >= amount){
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
            console.log(error)
            return Response(res,error,null,400)
        }
    },
    verifyTransaction:async (req,res)=>{
        const {security_code,sender,receiver,transactionID,currency,amount }= req.body;
        const session = await startSession();
        try {
            const getCurrency = await Currency.findOne({symbol:currency});
            await session.withTransaction(async () => {
                if(bcrypt.bcryptCompare(security_code,req.security_code)){
                    await session.abortTransaction();
                    return Response(res,"Mã bảo mật không đúng vui lòng nhập lại",null,200)
                }
                //update balance's sender
                await Wallet.findOneAndUpdate(
                    {userID:sender,'currencies.currency':getCurrency._id},
                    {$inc : {'currencies.$.balance':-amount}},
                    {session})
                //update balance's receiver
                await Wallet.findOneAndUpdate(
                    {userID:receiver,'currencies.currency':getCurrency._id},
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
    depositMoney:async(req,res)=>{
        try {
            const userID = req.user
            const {currency,amount,cardID} = req.body
            //find user's card
            const card = await CreditCard.findById(cardID)
            if(!card){
                return Response(res,{message:"Vui lòng thêm thẻ",card:"null"},null,400)
            }
            const number = card.number.substring(card.number.length-4,card.number.length-1)
            //create history transaction
            await Transaction.create({
                type:'deposit',
                amount:amount,
                message:"Nạp tiền từ thẻ "+"***"+number,
                currency:currency,
                sender:userID,
                creditcard:card._id,
            }).then(data=>{
                Response(res,"Nhập mã bảo mật để tiếp tục",data,200)
            }).catch(error=>{
                Response(res,error,null,400)
            })
        } catch (error) {
            Response(res,error,null,400)
        }
   
    },
    verifyDepositMoney:async(req,res)=>{
        const userID = req.user
        const {currency,amount,transactionID,security_code} = req.body
        const session = await startSession()
        try{
            await session.withTransaction(async () => {
                
                if(!bcrypt.bcryptCompare(security_code,req.security_code)){
                    return Response(res,"Mã bảo mật sai vui lòng nhập lại",null,400)
                }
                const paymentIntent =await stripe.depositStripe(amount,currency)
                if(paymentIntent.status !== 'succeeded'){
                    return Response(res,"Nạp tiền thất bại",null,400)
                }else{
                    const getCurrency = await Currency.findOne({symbol:currency})
                    //update user's wallet
                    await Wallet.findOneAndUpdate(
                        {userID:userID,'currencies.currency':getCurrency._id},
                        {$inc : {'currencies.$.balance':+amount}})
                    //update user's transaction
                    const data = await Transaction.findByIdAndUpdate(transactionID,
                        {status:"completed"},
                        {new: true},{session})
                    return Response(res,"Nạp tiền thành công",data,200)
                }
            })
        }catch (error){
            console.log(error)
            Response(res,error,null,400);
        }
        finally {
            session.endSession();
        }
    },
    getWallet:async(req,res)=>{
        const id =req.user
        console.log(req.user)
        Wallet.findOne({userID:req.user}).populate('currencies.currency').then(data=>{
            Response(res,"Success",data,200);
        }).catch(err=>{
            Response(res,err,null,400);
        })
    }
}