const {User} = require('../models/user.model')

module.exports = {
    getUsers:(req,res)=>{
        User.find() 
        .then(data => {
            res.status(200).json(data); 
        })
        .catch(err => {
            res.status(500).json({ error: err });
        })
    },
    banUser:(req,res)=>{
        User.findByIdAndUpdate(req.body._id,{inactive:true}).then(data => {
            res.status(200).json({message:"Success",data}); 
        })
        .catch(err => {
            res.status(500).json({ error: err });
        })
    },
    unbanUser:(req,res)=>{
        User.findByIdAndUpdate(req.body._id,{inactive:false}).then(data => {
            res.status(200).json({message:"Success",data}); 
        })
        .catch(err => {
            res.status(500).json({ error: err });
        })
    }
}