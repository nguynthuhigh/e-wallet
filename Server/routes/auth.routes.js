const express = require('express')
const router = express.Router();
const AuthController = require('../controller/auth.controller')
const roleMiddleware = require("../middlewares/role.middleware")
const ROLE = require('../utils/role')
router.post('/signup',AuthController.Register)
router.post('/signup/verify',AuthController.VerifyAccount)
router.post('/signin',AuthController.Login)
router.post('/signin/verify',AuthController.VerifyLogin)

router.get('/account',roleMiddleware.Authenciation(ROLE.USER),AuthController.Account) 
router.put('/update',roleMiddleware.Authenciation(ROLE.USER),AuthController.updateProfile)  


//partner

module.exports = router;
