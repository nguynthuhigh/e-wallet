const {Schema, model} = require('mongoose')

const userSchema = new Schema({
    phone:{
        type:String,
        required:[true,"Phone number is invalid"],
        unique:[true,"Phone number already exists"],
        minLength:[10,"Phone number is invalid"],

    },
    password:{
        type:String,
        required:true,
        minLength:[6,"Password must be at least 6 characters"]
    }
})
const User = model('User',userSchema)
module.exports = {User}