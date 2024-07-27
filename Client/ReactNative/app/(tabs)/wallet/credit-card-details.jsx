import React from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { deleteCard } from "../../api/creditcard.api";
import CreditCard from "../../../components/CreditCard";
const CreditCardDetails = () => {
  const { item } = useLocalSearchParams();
  const cardDetails = JSON.parse(item);
  const deleteACard = async () => {
    try {
      const response = await deleteCard(cardDetails.id);
      if (response.message === "Success") {
        Alert.alert("Thông báo!", "Xóa thẻ thành công", [
          {
            text: "OK",
            onPress: () => router.push("/wallet/credit_card"),
          },
        ]);
      } else {
        Alert.alert("Lỗi", "Xóa thẻ thất bại");
      }
    } catch (error) {
      Alert.alert("Lỗi", "Đã xảy ra lỗi trong quá trình xóa thẻ");
    }
  };
  return (
    <View className="px-4">
      <CreditCard
        type={cardDetails.type}
        number={cardDetails.number}
        expiry={`${cardDetails.expiryMonth}/${cardDetails.expiryYear % 100}`}
        cvc={cardDetails.cvc}
        name={cardDetails.name}
      />
      <View className="flex-row items-center justify-center px-4 mt-6">
        <TouchableOpacity
          className="bg-red-400 px-5 py-3 rounded-lg"
          activeOpacity={0.7}
          onPress={() =>
            Alert.alert(
              "Chú ý!!",
              "Nếu xóa thẻ bạn sẽ không thể khôi phục lại thẻ đã xóa.",
              [
                {
                  text: "Cancel",
                },
                {
                  text: "Xác nhận",
                  onPress: () => {
                    deleteACard();
                  },
                },
              ]
            )
          }
        >
          <Text className="text-white font-semibold text-sm">Xóa thẻ</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreditCardDetails;