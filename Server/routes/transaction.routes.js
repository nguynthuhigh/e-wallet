const controller = require('../controller/transaction.controller')
const express = require('express')
const router = express.Router()
const roleAuth = require('../middlewares/role.middleware')
const ROLE = require('../utils/role')

router.post('/post/transaction-type',roleAuth.verifyRole(ROLE.ADMIN),controller.createTransactionType)
router.get('/get/transactions',roleAuth.Authenciation(ROLE.USER),controller.getTransactions)
router.get('/get/transactions-send',roleAuth.Authenciation(ROLE.USER),controller.getTransactions_send)
router.get('/get/transactions-receive',roleAuth.Authenciation(ROLE.USER),controller.getTransactions_receive)


module.exports = router