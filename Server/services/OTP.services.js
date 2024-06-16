const {OTP} = require('../models/otp.model')
const bcrypt = require('../utils/bcrypt');

module.exports = {
    createOTP:async(email,passwordHash,OTP_Generator)=>{
        const hash = bcrypt.bcryptHash(OTP_Generator)
        await OTP.create({email: email,password:passwordHash,otp: hash})
    },
    verifyOTP:(otp,hash)=>{
        return bcrypt.bcryptCompare(otp, hash);
    }
}