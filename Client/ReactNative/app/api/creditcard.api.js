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
    console.log("Thêm thẻ thất bại:", error);
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
    console.log("Failed to fetch cards:", error);
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
    console.log("Không thể lấy chi tiết thẻ:", error);
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
    console.log("Cập nhật thông tin không thành công:", error);
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
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Xóa thẻ thất bại:", error);
  }
};
export const fetchCards = async () => {
  try {
    const response = await getCards();
    if (response?.data && Array.isArray(response.data)) {
      const detailedCards = await Promise.all(
        response.data.map(async (card) => {
          const cardDetails = await getCardDetails(card._id);
          return {
            ...cardDetails.data,
            id: card._id,
            type: card.type,
          };
        })
      );
      return detailedCards;
    } else {
      Alert.alert(
        "Thông báo!",
        "Bạn chưa có thẻ tín dụng nào. Nhấn vào liên kết thẻ tín dụng để liên kết với thẻ tín dụng của bạn nhé!!"
      );
    }
  } catch (error) {
    console.log("Unable to fetch card list:", error);
  }
};
