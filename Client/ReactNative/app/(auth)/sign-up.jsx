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
import AccountIcon from "../../assets/svg/account_ic.svg";
import PasswordIcon from "../../assets/svg/password_ic.svg";
import BG_BCIcon from "../../assets/svg/bg_BCic.svg";
import BG_PPIcon from "../../assets/svg/bg_PPic.svg";
import BG_ETHIcon from "../../assets/svg/bg_ETHic.svg";
import BG_USDTIcon from "../../assets/svg/bg_USDTic.svg";
import { Link, router } from "expo-router";
import axios from "axios";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading,setIsLoading] = useState(false)
  const validateEmail = (inputEmail) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(inputEmail);
  };
  const handleSignUp = async () => {
    if(!validateEmail(email)){
      return setErrorMessage("Email không đúng định dạng")
    }
    if(password === "" || email === ""){
      return setErrorMessage("Vui lòng điền thông tin")
    }
    if(password.length < 6){
      return setErrorMessage("Vui lòng mật khẩu phải dài hơn 6 ký tự")
    }
    if (password !== confirmPassword) {
      setErrorMessage("Mật khẩu không khớp");
    } else {
      setErrorMessage("");
      try {
        setIsLoading(true)
        const response = await axios.post(
          "https://presspay-api.azurewebsites.net/api/v1/user/signup",
          {
            email: email,
            password: password,
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
          router.push({ pathname: "/verify-sign-up", params: { email } });
        } else if (
          response.status === 400 &&
          data.message === "Tài khoản đã tồn tại"
        ) {
          setErrorMessage("Tài khoản đã tồn tại");
        } else {
          setErrorMessage("Đăng ký không thành công, vui lòng thử lại");
        }
      } catch (error) {
        console.error(error);
        setErrorMessage(error.response.data.message);
        setIsLoading(false)
      }
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
          <Text className="font-bold text-[24px] text-center mt-10 mb-5">
            Đăng Ký
          </Text>
          <View className="  h-[228px] mb-1">
            <View className="h-[65px] flex-row items-center mt-2 rounded-[30px] border-[1.5px] border-[#0094FF]">
            <View className="flex-row items-center ml-4">
              <AccountIcon />
              <TextInput
                style={styles.input}
                className="font-semibold ml-4"
                placeholder="Email"
                onChangeText={(newText) => setEmail(newText.toLowerCase())}
                defaultValue={email}
              />
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
              />
            </View>
            </View>
            <View className="h-[65px] flex-row items-center mt-2 rounded-[30px] border-[1.5px] border-[#0094FF]">
            <View className="flex-row items-center ml-4">
              <PasswordIcon />
              <TextInput
                style={styles.input}
                className="font-semibold ml-4"
                placeholder="Nhập lại mật khẩu"
                secureTextEntry
                onChangeText={(newText) => setConfirmPassword(newText)}
                defaultValue={confirmPassword}
              />
            </View>
          </View>
          </View>
            <Text className="text-red-500 text-center my-1">{errorMessage}</Text>
          <TouchableOpacity disabled={isLoading} onPress={handleSignUp} className="w-full ">
            <View className="w-full bg-[#0094FF] h-[60px] flex-row items-center justify-center rounded-full">
              <Text className="text-white text-[20px] text-center font-bold">
                Đăng Ký
              </Text>
            </View>
          </TouchableOpacity>
          <View className="items-center mt-5">
            <Text>
              Bạn đã có tài khoản?
              <Link href="/sign-in" className="text-[#0094FF]">
                Đăng Nhập
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

export default SignUp;
