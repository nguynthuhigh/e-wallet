const { Wallet } = require('../models/wallet.model');
const { ethers } = require('ethers');

module.exports = {
  createWallet: (userID) => {
    return new Promise((resolve, reject) => {
      const EVMwallet = ethers.Wallet.createRandom();
      
      const usdCurrencyId = 'USD';
      const vndCurrencyId = 'VND';
      const ethCurrencyId = 'ETH';

      Wallet.create({
        address: EVMwallet.address,
        mnemonic: EVMwallet.mnemonic.phrase,
        userID: userID,
        currencies: [
          { balance: 0, currency: usdCurrencyId },
          { balance: 0, currency: vndCurrencyId },
          { balance: 0, currency: ethCurrencyId }
        ]
      }).then(() => {
        resolve(true);
      }).catch((err) => {
        reject(err);
      });
    });
  }
};
