import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import BG_BCIcon from "../../assets/svg/bg_BCic.svg";
import BG_PPIcon from "../../assets/svg/bg_PPic.svg";
import BG_ETHIcon from "../../assets/svg/bg_ETHic.svg";
import BG_USDTIcon from "../../assets/svg/bg_USDTic.svg";
import OTPIcon from "../../assets/svg/ic_OTP.svg";
import { router } from "expo-router";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const InstallSecurity = () => {
  const [securityCode, setSecurityCode] = useState("");
  const [confirmSecurityCode, setConfirmSecurityCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSecurityCodeSubmit = async () => {
    if (securityCode !== confirmSecurityCode) {
      setErrorMessage("Mã bảo mật không khớp");
    } else {
      setErrorMessage("");
      try {
        const token = await AsyncStorage.getItem("AccessToken");
        const response = await axios.put(
          "https://presspay-api.azurewebsites.net/api/v1/user/update-security-code",
          { security_code: securityCode },
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200) {
          router.push("/home");
        } else {
          setErrorMessage("Có lỗi xảy ra, vui lòng thử lại.");
        }
      } catch (error) {
        console.error(error);
        setErrorMessage("Có lỗi xảy ra, vui lòng thử lại.");
      }
    }
  };

  return (
    <SafeAreaView style={styles.backgroundColor}>
      <View className="h-[255px] flex flex-wrap justify-center ml-[110px]">
        <View className="absolute top-2 ml-[-10px]">
          <BG_BCIcon />
        </View>
        <View className="absolute top-[35px]">
          <BG_PPIcon />
        </View>
        <View
          className="absolute ml-[180px] top-[60px] "
          style={styles.rotatedETHIcon}
        >
          <BG_ETHIcon />
        </View>
      </View>
      <View className="p-6 pt-0 bg-white rounded-[35px] h-[80%]">
        <View
          className="absolute top-[-50px] ml-[105px]"
          style={styles.rotatedUSDTIcon}
        >
          <BG_USDTIcon />
        </View>
        <Text className="font-bold text-[24px] text-center mt-10 mb-5">
          Cài Đặt Mã Bảo Mật
        </Text>
        <View className="border-[1.5px] border-[#0094FF] rounded-[30px]  h-[75px] mt-2">
          <View className="h-[100%] flex-row items-center ml-4">
            <OTPIcon />
            <TextInput
              style={styles.input}
              className="font-semibold ml-4"
              placeholder="Nhập mã bảo mật"
              onChangeText={(newText) => setSecurityCode(newText)}
              defaultValue={securityCode}
            ></TextInput>
          </View>
        </View>
        <View className="border-[1.5px] border-[#0094FF] rounded-[30px]  h-[75px] mt-4">
          <View className="h-[100%] flex-row items-center ml-4">
            <OTPIcon />
            <TextInput
              style={styles.input}
              className="font-semibold ml-4"
              placeholder="Nhập lại mã bảo mật"
              onChangeText={(newText) => setConfirmSecurityCode(newText)}
              defaultValue={confirmSecurityCode}
            ></TextInput>
          </View>
        </View>
        {errorMessage ? (
          <Text className="text-red-500 text-center">{errorMessage}</Text>
        ) : null}
        <TouchableOpacity
          onPress={handleSecurityCodeSubmit}
          className="w-full mt-10"
        >
          <View className="w-full bg-[#0094FF] h-[60px] flex-row items-center justify-center rounded-full mt-6">
            <Text className="text-white text-[20px] text-center font-bold">
              Xác Nhận
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 300,
    height: 60,
    margin: 12,
    padding: 10,
    fontSize: 18,
  },
  backgroundColor: {
    backgroundColor: "rgba(94, 187, 253, 0.5)",
  },
  rotatedETHIcon: {
    transform: [{ rotate: "10deg" }],
  },
  rotatedUSDTIcon: {
    transform: [{ rotate: "-10deg" }],
  },
});

export default InstallSecurity;
