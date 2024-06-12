const controller = require('../controller/role.controller')
const express = require('express')
const router = express.Router()
const role = require('../middlewares/role.middleware')
router.put('/admin',controller.putRoleAdmin)
router.put('/marketing',controller.putRoleMarketing)
router.put('/finance',controller.putRoleFinance)
router.put('/support',controller.putRoleSupport)

router.post('/listSupport',role.verifyRoleSupport,controller.getList)

module.exports = router