const express = require('express')
const router = express.Router();
const AuthController = require('../controller/partner/auth.controller')
const roleMiddleware = require("../middlewares/role.middleware")

router.post('/signup',AuthController.signUp)
router.post('/verify',AuthController.verifyAccount)



module.exports = router;
