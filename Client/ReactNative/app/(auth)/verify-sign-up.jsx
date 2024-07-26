import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import BG_BCIcon from "../../assets/svg/bg_BCic.svg";
import BG_PPIcon from "../../assets/svg/bg_PPic.svg";
import BG_ETHIcon from "../../assets/svg/bg_ETHic.svg";
import BG_USDTIcon from "../../assets/svg/bg_USDTic.svg";
import OTPIcon from "../../assets/svg/ic_OTP.svg";
import { useLocalSearchParams, router } from "expo-router";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { err } from "react-native-svg";

const VerifySignUp = () => {
  const { email } = useLocalSearchParams();
  const [OTP, setOTP] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const handleOTPChange = (newOTP) => {
    setOTP(newOTP);
    if (newOTP.length === 6) {
      handleOTP(newOTP);
    }
  };

  const handleOTP = async (newOTP) => {
    try {
      const response = await axios.post(
        "https://presspay-api.azurewebsites.net/api/v1/user/signup/verify",
        {
          email: email,
          otp: newOTP,
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      const data = response.data;

      if (response.status === 200) {
        console.log(data.token);
        await AsyncStorage.setItem("AccessToken", data.token);
        router.replace("/install-security");
      } else if (response.status === 400) {
        if (data.message === "Không thể xác thực OTP vui lòng thử lại") {
          setErrorMessage("Không thể xác thực OTP, vui lòng thử lại.");
        } else if (data.message === "Mã OTP đã hết hạn vui lòng thử lại") {
          setErrorMessage("Mã OTP đã hết hạn, vui lòng thử lại.");
        } else {
          setErrorMessage("Xác thực không thành công, vui lòng thử lại.");
        }
      }
    } catch (error) {
      console.error("Error response:", error.response);
      setErrorMessage(error.response.message);
    }
  };

  return (
    <SafeAreaView style={styles.backgroundColor}>
      <ScrollView>
        <View className="h-[255px]  flex flex-wrap justify-center ml-[110px]">
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
        <View className="p-6 pt-0 bg-white rounded-[35px] h-full">
          <View
            className="absolute top-[-50px] ml-[105px]"
            style={styles.rotatedUSDTIcon}
          >
            <BG_USDTIcon />
          </View>
          <Text className="font-bold text-[24px]  text-center mt-10 mb-5">
            Xác Thực Đăng Ký
          </Text>
          <View className="items-center mb-5">
            <Text className="text-[18px]">Mã OTP đã gửi đến</Text>
            <Text className="text-[#0094ff] font-bold text-[18px] mb-2">
              {email}
            </Text>
          </View>
          {errorMessage ? <Text className="text-center text-red-400 mb-1 mt-0" >{errorMessage}</Text> : ''}
          <View className="border-[1.5px] border-[#0094FF] rounded-[30px] h-[75px]">
            <View className="h-[100%] flex-row items-center ml-4">
              <OTPIcon />
              <TextInput
                style={styles.input}
                className="font-semibold ml-4"
                placeholder="Nhập mã OTP"
                maxLength={6}
                onChangeText={handleOTPChange}
                defaultValue={OTP}
                keyboardType="numeric"
              />
            </View>
          </View>
          {errorMessage ? (
            <Text className="text-red-500 text-center">{errorMessage}</Text>
          ) : null}
          <TouchableOpacity className="items-end">
            <Text className="my-4 text-[#0094ff] font-bold">Gửi lại mã</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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

export default VerifySignUp;
