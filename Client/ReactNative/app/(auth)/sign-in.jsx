import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import AccountIcon from "../../assets/svg/account_ic.svg";
import PasswordIcon from "../../assets/svg/password_ic.svg";
import BG_BCIcon from "../../assets/svg/bg_BCic.svg";
import BG_PPIcon from "../../assets/svg/bg_PPic.svg";
import BG_ETHIcon from "../../assets/svg/bg_ETHic.svg";
import BG_USDTIcon from "../../assets/svg/bg_USDTic.svg";
import { router } from "expo-router";

import { Link } from "expo-router";
import axios from "axios";
const SignIn = () => {
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");
  const [errorLogin,setErrorLogin] = useState(null)
  const login = async () => {
    try {
      console.log(process.env.API_URL + "/api/v1/user/signin");
      const response = await fetch(
        "https://presspay-api.azurewebsites.net/api/v1/user/signin",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: text,
            password: password,
          }),
        }
      );
      const data = await response.json();
      console.log("Login response:", data);
      if (response.status === 200) {
        router.push({ pathname: "/verify-sign-in", params: { text } });
      }
    } catch (error) {
      console.error(error.response.data.message);
      setErrorLogin(error.response.data.message)
    }
  };
  return (
    <SafeAreaView style={styles.backgroundColor}>
      <ScrollView>
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
          <Text className="font-bold text-[24px] text-center mt-10 mb-3">
            Đăng Nhập
          </Text>
          {errorLogin ? <Text className="text-center text-red-400 mb-1 mt-0" >{errorLogin}</Text> : ''}
          <View className="   h-[150px]">
            <View className="h-[65px] flex-row items-center  rounded-[30px] border-[1.5px] border-[#0094FF] ">
              <View className="flex-row items-center ml-4">
                <AccountIcon className="" />
                <TextInput
                  style={styles.input}
                  className="font-semibold ml-4"
                  placeholder="Email"
                  onChangeText={(newText) => setText(newText.toLowerCase())}
                  defaultValue={text}
                ></TextInput>
              </View>
            </View>
            <View className="h-[65px] flex-row items-center mt-2 rounded-[30px] border-[1.5px] border-[#0094FF]">
              <View className="flex-row items-center ml-4">
                <PasswordIcon />
                <TextInput
                  style={styles.input}
                  className="font-semibold ml-4"
                  placeholder="Mật khẩu"
                  secureTextEntry
                  onChangeText={(newText) => setPassword(newText)}
                  defaultValue={password}
                ></TextInput>
              </View>
            </View>
          </View>
          <TouchableOpacity className="items-end">
            <Text className="my-2 font-bold">Quên mật khẩu?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={login} className="w-full">
            <View className="w-full bg-[#0094FF] h-[60px] flex-row items-center justify-center rounded-full mt-6">
              <Text className="text-white text-[20px] text-center font-bold">
                Đăng Nhập
              </Text>
            </View>
          </TouchableOpacity>
          <View className="items-center mt-5">
            <Text className="">
              Bạn là người dùng mới?{" "}
              <Link href="/sign-up" className="text-[#0094FF]">
                Đăng Ký
              </Link>
            </Text>
          </View>
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
export default SignIn;
