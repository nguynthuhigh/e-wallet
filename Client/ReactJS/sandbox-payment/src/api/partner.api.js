import axios from "axios";
import Cookies from "universal-cookie";
const cookie = new Cookies()
export const getProfilePartner =async ()=>{
    return await axios.get(process.env.REACT_APP_LOCAL_HOST+'/api/v1/partner/dashboard',{
        headers:{
            Authorization: 'Bearer '+cookie.get('token_auth')
        }
    })
}
export const updateProfilePartner =async (body)=>{
    try{
        return await axios.put(process.env.REACT_APP_LOCAL_HOST+'/api/v1/partner/update-profile',body,{
            headers:{
                Authorization: 'Bearer '+cookie.get('token_auth')
            }
        })
    }catch(error){
        console.log(error)
    }
    
}
const exportObject = {
    getProfilePartner,
    updateProfilePartner
}
export default exportObject;