import axios from "axios"
import AsyncStorage from "@react-native-async-storage/async-storage"
export const getTransaction =async()=>{
    try {
        const token = await AsyncStorage.getItem('AccessToken')
        const response = await axios.get(`${process.env.API_URL}/api/v1/transaction/get/transactions`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
        return response.data
    } catch (error) {
        console.log(error)
    }
}
export const getTransactionDetails =async(id)=>{
    try {
        const token = await AsyncStorage.getItem('AccessToken')
        const response = await axios.get(`${process.env.API_URL}/api/v1/transaction/get/transaction/details/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
        return response
    } catch (error) {
        console.log(error)
    }
}

const api = {
    getTransaction,
    getTransactionDetails
}
export default api