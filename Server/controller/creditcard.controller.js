const { model } = require('mongoose')
const {CreditCard} = require('../models/creditcard.model')
const cryptoJS = require('../utils/crypto-js')
const { number } = require('yup')


module.exports = {
    addcard: async (req,res,next)=>{
        const {email,number} = req.body
        const card = await CreditCard.find({email:email,number:number})
        if (card.length === 0){
            CreditCard.create(req.body).then(data =>{
                res.json({message:"Success",data:data})
            }).catch(err=>{
                res.status(400).json({error:err})
            })
        }
        else{
            res.status(400).json({message:"Thẻ đã tồn tại"})
        }
       
    },
    getCard:async(req,res,next)=>{
       try {
            const card = await CreditCard.find({email:req.body.email})
            if(card.length != 0){
                let list_card = []
                card.forEach(element => {
                    const decrypt = {
                            _id: element._id,
                            email: element.email,
                            number: element.number,
                        }
                    list_card.push(decrypt)
                }); 
                res.status(200).json({message:"Success",data:list_card})
            }
            else{
                res.status(400).json({message:"Bạn chưa thêm thẻ"})
            }
       } catch (error) {
            res.status(400).json({error:error})
       }
    
    },
    getCard_details:async (req,res)=>{
        const card = await CreditCard.findOne({_id:req.body._id})
        console.log(cryptoJS.decrypt(card.cvv))
    },
    testCrypto:(req,res)=>{
        const encrypt = cryptoJS.encrypt("123");
        console.log(encrypt)
        console.log(cryptoJS.decrypt(encrypt))
    }
}