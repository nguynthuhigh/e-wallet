const respone = require("../utils/respone");    
const {User} = require('../models/user.model'); 
const OTPservices = require('../services/OTPservices')
const otpGenerator = require('otp-generator')
const {OTP} = require('../models/otp.model')
const bcrypt = require('../utils/bcrypt');
const nodemailer = require('../services/nodemailer')
module.exports  = {
    Register:async (req,res)=>{
        const {email,password} = req.body
        const user =await User.findOne({email:email})
        const passwordHash = bcrypt.bcryptHash(password)
        if(!user){
            const OTP_Generator = otpGenerator.generate(6, {digits:true, upperCaseAlphabets: false, lowerCaseAlphabets: false, specialChars: false });
            try {
                //create OTP
                await OTPservices.createOTP(email,passwordHash,OTP_Generator)
                //send nodemailer
                

                console.log(nodemailer.sendMail(email,"Mã OTP của bạn "+OTP_Generator +" Nhập mã pay acc!","Chúng tôi đến từ pressPay!"))
                console.log(email)
                res.status(200).json({message:"Check your email",email:email})

            } catch (error) {
                res.status(400).json(error)
            }
        }
        else{
            return res.status(400).json({message:"Tài khoản đã tồn tại"})
        }
        
    },
    VerifyAccount:async(req,res)=>{
       try {
            const {email,otp} = req.body;
            const otpArray = await OTP.find({email:email})
            otpSchema=otpArray[otpArray.length-1]
            if(otpSchema){
                if(OTPservices.verifyOTP(otp,otpSchema.otp)){
                    await User.create({email:email,password:otpSchema.password})
                    await OTP.deleteMany({email:email})
                    return res.status(200).json({message:"Sucess",message:"Xác thực OTP thành công"})
                }
                else{
                    return res.status(400).json({message:"Không thể xác thực OTP vui lòng thử lại"})
                }
            }
            else{
                return res.status(400).json({message:"Mã OTP đã hết hạn vui lòng thử lại"})
            }

       } catch (error) {
            return res.status(400).json({erorr:error,message:"Mã OTP đã hết hạn vui lòng thử lại"})
       }
    },
    Login: async(req,res)=>{
        try {
            const {email, password} = req.body;
            const userFind = await User.findOne({email:email})
            if(userFind){
                const passwordHash = userFind.password;
                if(bcrypt.bcryptCompare(password,passwordHash)){
                    const token = createToken(email);
                    res.status(200).json({token:token,message:"Đăng nhập thành công"})
                }
                else{
                    res.status(400).json({err, message:"Mật khẩu không đúng"})
                }
            }
            else{
                res.status(400).json({message:"Tài khoản hoặc mật khẩu không đúng"})
            }
        } catch (error) {
            res.status(400).json({error:error,message:"Tài khoản hoặc mật khẩu không đúng"})
        }
    },
    Account: async (req,res)=>{
        const userFind = await User.findOne({phone:req.user.phone})
        res.status(200).json(userFind)
    }
}
