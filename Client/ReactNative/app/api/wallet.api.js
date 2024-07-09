import axios from "axios"
import AsyncStorage from "@react-native-async-storage/async-storage"
export const sendMoney =async(body)=>{
    try {
        const token = await AsyncStorage.getItem('AccessToken')
        const response = await axios.post(`${process.env.API_URL}/api/v1/wallet/send-money`,body,{
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
        return response.data
    } catch (error) {
        console.log(error)
    }
}
export const confirmSendMoney =async(body)=>{
    try {
        const token = await AsyncStorage.getItem('AccessToken')
        const response = await axios.post(`${process.env.API_URL}/api/v1/wallet/send-money/verify`,body,{
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
        return response.data
    } catch (error) {
        console.log(error)
    }
}
export const getWallet =async()=>{
    try {
        const token = await AsyncStorage.getItem('AccessToken')
        const response = await axios.get(`${process.env.API_URL}/api/v1/wallet/get-wallet`,{
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
        return response.data
    } catch (error) {
        console.log(error)
    }
}
const api = {
    sendMoney,
    confirmSendMoney,
    getWallet
}
export default api