import axios from "axios";
import Cookies from "universal-cookie";
const cookie = new Cookies()
export const addVoucher = async(body)=>{
    return await axios.post(process.env.REACT_APP_LOCAL_HOST+`/api/v1/voucher/add-voucher`,body,{
        headers:{
            Authorization: 'Bearer '+cookie.get('token_auth')
        }
    })
 
}
const exportObject = {
    addVoucher
}
export default exportObject;