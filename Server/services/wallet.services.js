const {Wallet,WalletType} = require('../models/wallet.model')

module.exports = {
    generateWalletVND:async (userID)=>{
        try {
            const type = await WalletType.findOne({code:"VND"})
            if(!type){
                throw new Error("Can't find wallet type")
            }
            const walletTypeID = type._id
            console.log(walletTypeID)
            await Wallet.create({userID:userID,walletTypeID:walletTypeID}).then(()=>{
                return true
            }).catch(()=>{
                console.error("Error generation VND wallet:", err);
            });
            
        } catch (error) {
            console.error("Error generation VND wallet:", err);
            return false;
        }
    },
    generateWalletUSD:async (userID)=>{
        try {
            const type = await WalletType.findOne({code:"USD"})
            if(!type){
                throw new Error("Can't find wallet type")
            }
            const walletTypeID = type._id
            await Wallet.create({userID:userID,walletTypeID:walletTypeID});
            return true
        } catch (error) {
            console.error("Lỗi khi tạo ví USD:", err);
            return false;
        }
    },
    generateWalletETH:async (userID)=>{
        try {
            const type = await WalletType.findOne({code:"ETH"})
            if(!type){
                throw new Error("Can't find wallet type")
            }
            const walletTypeID = type._id
            await Wallet.create({userID:userID,walletTypeID:walletTypeID});
            return true
        } catch (error) {
            console.error("Lỗi khi tạo ví ETH:", err);
            return false;
        }
    },
}