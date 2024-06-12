const jwt = require('jsonwebtoken');

module.exports = {
    createToken:(email)=>{
        jwt.sign({email:email},process.env.SERECT_TOKEN,{algorithm:'HS256'},(err,token)=>{
            return token;
        })
    },
    verifyToken:(req,res,next)=>{
        const token = req.headers.authorization?.slice(7);
        if(token){
            jwt.verify(token, process.env.SERECT_TOKEN, (err, decoded) => {
                if (err) {
                    res.status(404).json({ message: 'Unauthorized' });
                } else {
                    req.user = decoded;
                    next();
                }
            });
        }
        else{
            res.status(404).json({message:"Page not found"})
        }
    }
}