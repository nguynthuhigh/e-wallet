import axios from "axios"
import AsyncStorage from "@react-native-async-storage/async-storage"
export const getUser =async(email)=>{
    try {
        const response = await axios.get(`${process.env.API_URL}/api/v1/user/getuser?email=${email}`);
        return response
    } catch (error) {
        console.log(error)
    }
}

const api = {
    getUser
}
export default api