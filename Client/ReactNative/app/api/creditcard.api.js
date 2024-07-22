import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const addCard = async ({
  name,
  number,
  cvv,
  expiryMonth,
  expiryYear,
  type,
}) => {
  try {
    const token = await AsyncStorage.getItem("AccessToken");
    const body = {
      name,
      number,
      cvv,
      expiryMonth,
      expiryYear,
      type,
    };

    const response = await axios.post(
      `${process.env.API_URL}/api/v1/card/addcard`,
      body,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Thêm thẻ thất bại:", error);
  }
};

export const getCards = async () => {
  try {
    const token = await AsyncStorage.getItem("AccessToken");
    const response = await axios.get(
      `${process.env.API_URL}/api/v1/card/getcards`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Failed to fetch cards:", error);
  }
};

export const getCardDetails = async (cardID) => {
  try {
    const token = await AsyncStorage.getItem("AccessToken");
    const response = await axios.get(
      `${process.env.API_URL}/api/v1/card/details/${cardID}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Không thể lấy chi tiết thẻ:", error);
  }
};

export const editCard = async ({
  cardID,
  name,
  number,
  cvv,
  expiryMonth,
  expiryYear,
  type,
}) => {
  try {
    const token = await AsyncStorage.getItem("AccessToken");
    const body = {
      cardID,
      name,
      number,
      cvv,
      expiryMonth,
      expiryYear,
      type,
    };

    const response = await axios.put(
      `${process.env.API_URL}/api/v1/card/editcard`,
      body,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Cập nhật thông tin không thành công:", error);
  }
};

export const deleteCard = async (cardID) => {
  try {
    const token = await AsyncStorage.getItem("AccessToken");
    const response = await axios.delete(
      `${process.env.API_URL}/api/v1/card/deletecard/${cardID}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Xóa thẻ thất bại:", error);
  }
};
