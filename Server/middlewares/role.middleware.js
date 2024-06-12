const auth = require('../services/tokenServices')
const Role = require('../utils/role')
const { User } = require('../models/user.model');
exports.verifyRoleSupport =  (req, res, next) => {
     auth.verifyToken(req, res, async () => {
        try {
            const userFind = await User.findOne({ phone: req.user.phone });
            if (userFind.role === Role.SUPPORT) {
                return next(); 
            }
            res.status(401).json("Page not found");
        } catch (error) {
            res.status(500).json({ message: "Internal Server Error" });
        }
    });
};
exports.VerifyRoleUser =()=>{

}