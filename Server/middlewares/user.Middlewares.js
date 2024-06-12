const {registerSchema} = require("../validators/userValidator")
exports.validateRegister = async (req, res, next) => {
    try {
        await registerSchema.validate(req.body);
        next();
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};