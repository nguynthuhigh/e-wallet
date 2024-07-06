import axios from "axios"
import AsyncStorage from "@react-native-async-storage/async-storage"
export const getProfile =async()=>{
    try {
        const token = await AsyncStorage.getItem('AccessToken')
        const response = await axios.get(`${process.env.API_URL}/api/v1/user/profile`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const signUp =async(body)=>{
    try {
        const response = await axios.post(`${process.env.API_URL}/api/v1/user/signup`,body);
        return response
    } catch (error) {
        console.log(error)
    }
}
const api = {
    getProfile
}
export default api