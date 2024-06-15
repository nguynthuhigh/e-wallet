const express = require('express')
const router = express.Router()
const creditcard = require('../controller/creditcard.controller')

router.post('/addcard',creditcard.addcard)
router.get('/getcards/:id',creditcard.getCardS)
router.get('/details/:id',creditcard.getCardDetails)
router.put('/editcard',creditcard.editCard)
router.delete('/deletecard/:id',creditcard.deleteCard)



module.exports = router