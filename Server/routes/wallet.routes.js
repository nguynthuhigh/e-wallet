const express = require('express')
const router = express.Router()
const roleAuth = require('../middlewares/role.middleware')
const ROLE = require('../utils/role')
const controller = require('../controller/wallet.controller')

// router.get('/getusers',roleAuth.verifyRole(ROLE.ADMIN),controller.getUsers)
// router.put('/ban/user',roleAuth.verifyRole(ROLE.ADMIN),controller.banUser)
router.post('/post/walletype',roleAuth.verifyRole(ROLE.ADMIN),controller.createWalletType)
router.get('/get/walletype',roleAuth.verifyRole(ROLE.ADMIN),controller.getWalletType)
router.put('/send-money',roleAuth.VerifyUser,controller.sendMoney)
router.post('/post/wallet-eth',roleAuth.VerifyUser,controller.ethWallet)
router.post('/get/address-eth',roleAuth.VerifyUser,controller.getAddressETH)


module.exports = router