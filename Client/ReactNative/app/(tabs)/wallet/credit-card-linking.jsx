import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { CreditCardInput } from "react-native-credit-card-input";
import CreditCard from "../../../components/CreditCard";
import { addCard } from "../../api/creditcard.api.js";
import { router } from "expo-router";

const s = StyleSheet.create({
  cardView: {
    borderRadius: 15,
    alignSelf: "center",
    marginTop: 15,
    overflow: "hidden",
  },
  cardInput: {
    marginTop: 15,
    borderColor: "#fff",
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "#ccc",
    paddingVertical: 10,
  },
});

export default function CreditCardLinking() {
  const [focusedField, setFocusedField] = useState();
  const [formData, setFormData] = useState({ values: {} });
  const [cardHolderName, setCardHolderName] = useState("");

  const handleOnChange = (data) => {
    setFormData({ ...data, values: { ...data.values, name: cardHolderName } });
  };

  const validateCardNumber = (number) => {
    const visaMasterCardRe = /^\d{4} \d{4} \d{4} \d{4}$/;
    const amexRe = /^\d{4} \d{6} \d{5}$/;
    const dinersClubRe = /^\d{4} \d{6} \d{4}$/;
    const discoverRe = /^6(?:011|5\d{2}) \d{4} \d{4} \d{4}$/;
    const jcbRe = /^(?:2131|1800|35\d{3}) \d{4} \d{4} \d{4}$/;
    return (
      visaMasterCardRe.test(number) ||
      amexRe.test(number) ||
      dinersClubRe.test(number) ||
      discoverRe.test(number) ||
      jcbRe.test(number)
    );
  };

  const validateExpiry = (expiry) => {
    if (!expiry || expiry.length !== 5) return false;
    const [month, year] = expiry.split("/");
    const expiryDate = new Date(`20${year}`, month - 1);
    const currentDate = new Date();
    return expiryDate > currentDate && month >= 1 && month <= 12;
  };

  const validateCVC = (cvc) => {
    const re = /^\d{3,4}$/;
    return re.test(cvc);
  };

  const handleAddCard = async () => {
    const { number, expiry, cvc } = formData.values;
    const isCardNumberValid = validateCardNumber(number);
    const isExpiryValid = validateExpiry(expiry);
    const isCVCValid = validateCVC(cvc);
    const isNameValid = cardHolderName.length > 0;

    console.log({
      isCardNumberValid,
      isExpiryValid,
      isCVCValid,
      isNameValid,
    });

    if (isCardNumberValid && isExpiryValid && isCVCValid && isNameValid) {
      try {
        const [expiryMonth, expiryYear] = expiry.split("/");
        const response = await addCard({
          name: cardHolderName,
          number,
          cvv: cvc,
          expiryMonth,
          expiryYear: `20${expiryYear}`,
        });
        if (response && response.data) {
          console.log("Thêm thẻ tính dụng thành công:", response.data);
          router.back();
        }
      } catch (error) {
        console.error("Thêm thẻ thất bại:", error);
        Alert.alert(
          "Có lỗi",
          "Có lỗi xảy ra trong quá trình thêm thẻ tín dụng."
        );
      }
    } else {
      Alert.alert(
        "Thông tin thẻ không hợp lệ",
        "Kiểm tra lại thông tin thẻ tín dụng."
      );
    }
  };

  return (
    <ScrollView>
      <CreditCard
        focusedField={focusedField}
        type={formData?.values.type}
        number={formData?.values.number}
        expiry={formData?.values.expiry}
        cvc={formData?.values.cvc}
        name={cardHolderName}
      />
      <View className="px-4 mt-4">
        <Text className="font-semibold mb-2">CARDHOLDER NAME</Text>
        <TextInput
          style={s.input}
          placeholder="Your full name"
          value={cardHolderName}
          onChangeText={(text) => {
            setCardHolderName(text);
            setFormData((prevData) => ({
              ...prevData,
              values: { ...prevData.values, name: text },
            }));
          }}
        />
      </View>
      <CreditCardInput
        autoFocus
        style={s.cardInput}
        onChange={handleOnChange}
        onFocusField={setFocusedField}
      />
      <View className="px-4">
        <TouchableOpacity
          activeOpacity={0.7}
          className="w-full mt-4 py-4 items-center justify-center rounded-3xl bg-[#0D99FF]"
          onPress={handleAddCard}
        >
          <Text className="text-sm font-semibold text-white">Liên kết thẻ</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
