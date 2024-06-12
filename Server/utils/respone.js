class Respone{
    Success(res,msg,data){
        res.status(200).json({msg,data})
    }
}
module.exports = new Respone()