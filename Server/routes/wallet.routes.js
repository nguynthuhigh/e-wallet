const express = require('express')
const router = express.Router()
const roleAuth = require('../middlewares/role.middleware')
const ROLE = require('../utils/role')
const controller = require('../controller/wallet.controller')

// router.get('/getusers',roleAuth.verifyRole(ROLE.ADMIN),controller.getUsers)
// router.put('/ban/user',roleAuth.verifyRole(ROLE.ADMIN),controller.banUser)
router.post('/send-money',roleAuth.Authenciation(ROLE.USER),controller.sendMoney)
router.put('/send-money/verify',roleAuth.Authenciation(ROLE.USER),controller.verifyTransaction)
router.post('/get/address-eth',roleAuth.Authenciation(ROLE.USER),controller.getAddressETH)
router.post('/post/currency',roleAuth.verifyRole(ROLE.ADMIN),controller.addCurrency)
router.get('/get/currency',controller.getCurrency)



module.exports = router