const { Wallet,Currency } = require('../models/wallet.model');
const { ethers } = require('ethers');

module.exports = {
  createWallet: (userID,partnerID) => {
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
            partnerID:partnerID,
            currencies: currencies
        }).then(() => {
            resolve(true);
        }).catch((err) => {
            reject(err);
        });
    });
  },
  checkBalance:(userID,currency,amount)=>{

  },
  getBalance:(userID,currency)=>{

  },
  updateBalance:(userID,currency,amount)=>{
    
  }
};
