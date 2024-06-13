const express = require('express')
const router = express.Router();
const AuthController = require('../controller/auth.controller')
const userAuth = require("../middlewares/user.Middlewares")
router.post('/register',userAuth.validateRegister,AuthController.Register)
router.post('/verify',AuthController.VerifyAccount)
router.post('/login',AuthController.Login)
router.post('/account',AuthController.Account) //Need auth user
router.put('/update',AuthController.updateProfile)  //Need auth user

module.exports = router;
