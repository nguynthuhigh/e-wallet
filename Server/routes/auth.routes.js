const express = require('express')
const router = express.Router();
const AuthController = require('../controller/auth.controller')
const roleMiddleware = require("../middlewares/role.middleware")

router.post('/register',AuthController.Register)
router.post('/verify',AuthController.VerifyAccount)
router.post('/login',AuthController.Login)
router.post('/login/verify',AuthController.VerifyLogin)

router.get('/account',roleMiddleware.VerifyUser,AuthController.Account) 
router.put('/update',roleMiddleware.VerifyUser,AuthController.updateProfile)  

module.exports = router;
