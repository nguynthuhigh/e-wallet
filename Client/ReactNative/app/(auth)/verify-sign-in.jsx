import React from 'react'
import { View, Text,TextInput,SafeAreaView,TouchableOpacity,StyleSheet } from 'react-native'
import AccountIcon from '../../assets/svg/account_ic.svg'
import PasswordIcon from '../../assets/svg/password_ic.svg'
import { Link } from "expo-router";

const VerifySignIn = () => {
  return (
    <SafeAreaView>
      <View className="h-[25%]"></View>
      <View className="p-6 pt-0 bg-white rounded-[30px]">
        <Text className="font-bold text-[24px] text-center my-4">Xác thực đăng nhập</Text>
        <View className="mb-8">
            <Text className="font-bold text-[16px] text-center my-2">Mã OTP đã gửi đến</Text>
            <Text className="font-bold text-[16px] text-[#0094FF] text-center ">example@presspay.com</Text>
        </View>
        <View className="border-[1px] border-[#0094FF] rounded-[30px] h-[75px]">
          <View className="h-[100%] flex-row items-center  ml-4">
              <PasswordIcon/>
              <TextInput style={styles.input} className="font-semibold ml-4" placeholder='OTP'></TextInput>
          </View>
        </View>
        <TouchableOpacity>
          <View className="bg-[#0094FF] my-4 h-[60px] flex-row items-center justify-center rounded-full"><Text className="text-white text-[20px] text-center font-bold">Xác nhận</Text></View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  input: {
    width:300,
    height: 60,
    margin: 12,
    padding: 10,
    fontSize:18,
  },})
export default VerifySignIn