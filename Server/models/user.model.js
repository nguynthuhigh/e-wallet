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

    }
},{
    timestamps: true 
})
const User = model('User',userSchema)
module.exports = {User}