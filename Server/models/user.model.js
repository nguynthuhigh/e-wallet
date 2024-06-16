const {Schema, model} = require('mongoose')

const userSchema = new Schema({
    full_name:{
        type:String,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
    },
    role:{
      type:String,
      required:true,
      default:"user"

    },inactive:{
        type:Boolean,
        required:true,
        default:false
    },
},{
    timestamps: true 
})
const User = model('User',userSchema)
module.exports = {User}