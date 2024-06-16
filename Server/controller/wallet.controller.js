const {Wallet,WalletType} = require('../models/wallet.model')
const {TransactionType,Transaction} = require('../models/transaction.model')
const {startSession} = require('mongoose')
const respone = require('../utils/respone')
module.exports  = {
    //admin
    createWalletType:async(req,res)=>{
        WalletType.create(req.body).then(result =>{
            res.status(200).json({message:"Success",data:result})
        }).catch(err=>{
            respone.Error(res,"Fail",err)
        })
    },
    getWalletType:async(req,res)=>{
   
        WalletType.find().then(result =>{
            res.status(200).json({message:"Success",data:result})
        }).catch(err=>{
            respone.Error(res,"Fail",err)
        })
    },
    //user
    
    sendMoney: async (req, res) => {
        const session = await startSession();
        try {
            await session.withTransaction(async () => {
                const { receiver, amount, wallet_type, transaction_type, message } = req.body;
                const sender = req.user;
        
                const [walletType, transactionType] = await Promise.all([
                    WalletType.findOne({ code: wallet_type }).session(session),
                    TransactionType.findOne({ type: transaction_type }).session(session),
                ]);
        
                if (!walletType || !transactionType) {
                    throw new Error("Invalid wallet or transaction type");
                }
        
                const balanceSender = await Wallet.findOne({ userID: sender, walletTypeID: walletType._id }).session(session);
        
                if (balanceSender.balance < amount) {
                    await session.abortTransaction();
                    return res.status(401).json({ message: "Không đủ số dư" });
                }
        
                const updateOperations = [
                    Wallet.updateOne({ userID: sender, walletTypeID: walletType._id }, { $inc: { balance: -amount } }).session(session),
                    Wallet.updateOne({ userID: receiver, walletTypeID: walletType._id }, { $inc: { balance: amount } }).session(session),
                ];
                await Promise.all(updateOperations);
                await Transaction.create([{
                    amount: amount,
                    description: message,
                    transactionTypeID: transactionType._id,
                    sender: sender,
                    receiver: receiver,
                }], { session });
            });
            res.status(200).json({ message: "Chuyển tiền thành công" });
        } catch (error) {
            await session.abortTransaction();
            res.status(400).json({ error: error.message });
        } finally {
            session.endSession();
        }
    }
}