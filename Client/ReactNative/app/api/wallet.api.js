import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const sendMoney = async (body) => {
  const token = await AsyncStorage.getItem("AccessToken");
  const response = await axios.post(
    `${process.env.API_URL}/api/v1/wallet/send-money`,
    body,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response;
};
export const confirmSendMoney = async (body) => {
  try {
    const token = await AsyncStorage.getItem("AccessToken");
    const response = await axios.post(
      `${process.env.API_URL}/api/v1/wallet/send-money/verify`,
      body,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const getWallet = async () => {
  try {
    const token = await AsyncStorage.getItem("AccessToken");
    const response = await axios.get(
      `${process.env.API_URL}/api/v1/wallet/get-wallet`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const depositMoney = async (body) => {
  try {
    const token = await AsyncStorage.getItem("AccessToken");
    const response = await axios.post(
      `${process.env.API_URL}/api/v1/wallet/deposit-money`,
      body,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
const api = {
  sendMoney,
  confirmSendMoney,
  getWallet,
  depositMoney,
};
export default api;
