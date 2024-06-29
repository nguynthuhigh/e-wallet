const { Wallet,Currency } = require('../models/wallet.model');
const { ethers } = require('ethers');

module.exports = {
  createWallet: (userID) => {
    return new Promise(async(resolve, reject) => {
        const EVMwallet = ethers.Wallet.createRandom();
        
        const getCurrency = await Currency.find();
        const currencies = []

        getCurrency.forEach(getCurrency=>{
            currencies.push({currency:getCurrency._id,balance:0})
        })
        Wallet.create({
            address: EVMwallet.address,
            mnemonic: EVMwallet.mnemonic.phrase,
            userID: userID,
            currencies: currencies
        }).then(() => {
            resolve(true);
        }).catch((err) => {
            reject(err);
        });
    });
  }
};
