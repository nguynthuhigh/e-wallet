const tokenAuth = require('../services/tokenServices')
const { User } = require('../models/user.model');
exports.verifyRole =  (req, res, next,role) => {
    tokenAuth.verifyToken(req, res, async () => {
        try {
            const userFind = await User.findOne({ phone: req.user.phone });
            if (userFind.role === role) {
                return next(); 
            }
            res.status(401).json("Page not found");
        } catch (error) {
            res.status(500).json({ message: "Internal Server Error" });
        }
    });
};
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
    // auth.verifyToken(req,res, async ()=>{
    //     try {

    //         const userFind = await User.findById(id);
    //         req.user = {userFind}
    //     } catch (error) {
    //         res.status(404).json({ message: "Page not found" }); 
    //     }
    // })
}