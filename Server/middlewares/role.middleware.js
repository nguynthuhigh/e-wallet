const tokenAuth = require('../services/tokenServices')
const { User } = require('../models/user.model');
exports.verifyRole = (role)=>{
    return async  (req, res, next) => {
        const token = req.headers.authorization?.slice(7);
        if(token){
            try {
                const result = await tokenAuth.verifyToken(token);
                const user = await User.findById(result.id);
                if (user && user.role === role) {
                    req.user = result.id;
                    return next();
                } else {
                    return res.status(400).json({ message: "Không đủ quyền truy cập" });
                }
            } catch (err) {
                return res.status(400).json({ error: err.message });
            }
        }
        else{
            return res.status(404).json({message:"Page not found"})
        }
    };
}
exports.VerifyUser = (req,res,next)=>{

    const token = req.headers.authorization?.slice(7);
    if(token){
        tokenAuth.verifyToken(token).then(result =>{
            req.user = result.id
            next()
        }).catch(err =>{
            return res.status(400).json({error:err})
        })

    }
    else{
        return res.status(404).json({message:"Page not found"})
    }
}