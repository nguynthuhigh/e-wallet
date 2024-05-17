const express = require('express')
const router = express.Router();
const {User} = require('../models/user.model')
const jwt = require("jsonwebtoken")
const bcrypt = require('bcryptjs');

router.post('/signUp',(req,res)=>{
    const {phone, password} = req.body;
    bcrypt.hash(password,8,(err,hash)=>{
        User.create({phone: phone, password: hash}).then((data)=>{
            res.status(200).json(data);
        }).catch(err=>{
            res.status(400).json(err);
        })
    })
})  

router.post('/signIn',async(req,res)=>{
    const {phone, password} = req.body;
    const userFind = await User.findOne({phone:phone})
    if(userFind){
        const passwordHash = userFind.password;
        bcrypt.compare(password,passwordHash,(err,result)=>{
            if(result === true){
                jwt.sign({phone:phone},process.env.SERECT_TOKEN,{algorithm:'HS256'},(err,token)=>{
                    res.status(200).json({token:token, message:"Đăng nhập thành công"})
                })
            }
            else{
                res.status(400).json({err, message:"Mật khẩu không đúng"})
            }
        })
    }
    else{
        res.status(400).json({message:"Tài khoản hoặc mật khẩu không đúng"})
    }
    
})
router.post('/auth',async(req,res)=>{
    const token = req.headers.authorization?.slice(7);
    if(token){
        jwt.verify(token, process.env.JWT_PRIVATE_KEY, (err, decoded) => {
            if (err) {
                res.status(401).json({ message: 'Unauthorized' });
            } else {
                res.status(200).json({ id: decoded.id });
            }
        });
    }
    else{
        res.status(404).json({message:"Page not found"})
    }
})
module.exports = router;
