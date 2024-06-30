import React, {useState} from 'react'
import { View, Text,TextInput,SafeAreaView,TouchableOpacity,StyleSheet } from 'react-native'
import AccountIcon from '../../assets/svg/account_ic.svg'
import PasswordIcon from '../../assets/svg/password_ic.svg'
import { Link } from "expo-router";
import axios from "axios"
const SignIn = () => {
  const [text, setText] = useState('');
  const [password, setPassword] = useState('');

  const login = async ()=>{
    await axios.post('https://1.54.154.87:8888/api/v1/user/signin',{
      email:text,
      password:password
    }).then((res)=>{
      console.log(res)
    }).catch((error) => {
      console.error( error); 
    });
  }
  return (
    <SafeAreaView>
      <View className="h-[25%]"></View>
      <View className="p-6 pt-0 bg-white">
        <Text className="font-bold text-[24px] text-center my-8">Đăng nhập</Text>
        <View className="border-[1px] border-[#0094FF] rounded-[30px]  h-[150px]">
          <View className="h-[50%] flex-row items-center ml-4">
              <AccountIcon className=""/>
              <TextInput  style={styles.input} 
                className="font-semibold ml-4" 
                placeholder='Email'
                onChangeText={newText => setText(newText)}
                defaultValue={text}>
                </TextInput>
          </View>
          <View className="border-b-[1px] border-[#0094FF]"></View>
          <View className="h-[50%] flex-row items-center ml-4">
              <PasswordIcon/>
              <TextInput style={styles.input} 
                className="font-semibold ml-4" 
                placeholder='Mật khẩu'
                onChangeText={newText => setPassword(newText)}
                defaultValue={password}
                ></TextInput>
          </View>
        </View>
        <TouchableOpacity ><Text className="my-4">Quên mật khẩu?</Text></TouchableOpacity>
        <TouchableOpacity onPress={login} >
          <View className="w-full bg-[#0094FF] h-[60px] flex-row items-center justify-center rounded-full"><Text className="text-white text-[20px] text-center font-bold">Đăng nhập</Text></View>
        </TouchableOpacity>
        <Text>Bạn chưa có tài khoản?</Text>
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
export default SignIn