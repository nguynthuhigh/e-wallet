const express = require('express')
const router = express.Router()
const creditcard = require('../controller/creditcard.controller')
router.post('/addcard',creditcard.addcard)
router.get('/getcard',creditcard.getCard)
router.get('/test',creditcard.testCrypto)
router.get('/details',creditcard.getCard_details)



module.exports = router