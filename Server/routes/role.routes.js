const controller = require('../controller/role.controller')
const express = require('express')
const router = express.Router()
const role = require('../middlewares/role.middleware')
const ROLE = require('../utils/role')
// router.put('/admin',role.verifyRole(ROLE.ADMIN),controller.putRoleAdmin)
// router.put('/marketing',role.verifyRole(ROLE.ADMIN),controller.putRoleMarketing)
// router.put('/finance',role.verifyRole(ROLE.ADMIN),controller.putRoleFinance)
// router.put('/support',role.verifyRole(ROLE.ADMIN),controller.putRoleSupport)

router.post('/listSupport',controller.getList)

module.exports = router