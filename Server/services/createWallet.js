const {Wallet} = require('../models/wallet.model')

module.exports = {
    autoCreateWallet:async (userID)=>{
        await Wallet.create(userID)
    }
}