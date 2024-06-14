class Respone{
    Success(res,msg,data){
        res.status(200).json({msg,data})
    }
    Error(res,msg,data){
        res.status(400).json({msg,data})
    }
}
module.exports = new Respone()