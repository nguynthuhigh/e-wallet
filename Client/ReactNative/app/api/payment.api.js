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
export const confirmPayment = async (body) => {
    const token = await AsyncStorage.getItem("AccessToken");
    const response = await axios.post(
      `${process.env.API_URL}/api/v1/confirm-payment`,
      body,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  };
export const getTransaction = async (token) => {
  const response = await axios.get(
    `${process.env.API_URL}/payment-gateway?token=${token}`
  );
  return response;
};
export const applyVoucher = async (body) => {
  const response = await axios.post(
    `${process.env.API_URL}/api/v1/apply-voucher`,body
  );
  return response;
};
const api = {
  sendMoney,
  getTransaction,
  applyVoucher
};
export default api;
