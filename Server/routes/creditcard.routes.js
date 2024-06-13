const express = require('express')
const router = express.Router()
const creditcard = require('../controller/creditcard.controller')
router.get('/test-crypto',creditcard.addcard)

module.exports = router