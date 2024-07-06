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


const api = {
    getTransaction
}
export default api