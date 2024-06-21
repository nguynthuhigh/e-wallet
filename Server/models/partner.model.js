const {Schema, model} = require('mongoose')


const partnerSchema = new Schema({
    brandName:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true 
    },
    phone:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    branchID:[{
        type:Schema.Types.ObjectId,
        ref:'PartnerBranch',
    }]
},{
    timestamps: true 
})

const partnerBranchSchema = new Schema({
    branchName:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    partnerID:{
        type:Schema.Types.ObjectId,
        ref:'Partner',
        required:true
    }

},{
    timestamps: true 
})

