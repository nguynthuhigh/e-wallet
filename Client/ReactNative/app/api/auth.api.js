import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const getProfile = async () => {
    const token = await AsyncStorage.getItem("AccessToken");
    const response = await axios.get(
      `${process.env.API_URL}/api/v1/user/profile`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
};

export const signUp = async (body) => {
    const response = await axios.post(
      `${process.env.API_URL}/api/v1/user/signup`,
      body
    );
    return response;
}
export const updateInfo = async (body) => {
  const token = await AsyncStorage.getItem("AccessToken");
  const response = await axios.put(
    `${process.env.API_URL}/api/v1/user/update-profile`,body,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response;
};

const api = {
  getProfile,
  signUp,
  updateInfo
};
export default api;
