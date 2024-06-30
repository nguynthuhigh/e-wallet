import React, {useState} from 'react'
import { View, Text,TextInput,SafeAreaView,TouchableOpacity,StyleSheet } from 'react-native'
import AccountIcon from '../../assets/svg/account_ic.svg'
import PasswordIcon from '../../assets/svg/password_ic.svg'
import BG_BCIcon from '../../assets/svg/bg_BCic.svg'
import BG_PPIcon from '../../assets/svg/bg_PPic.svg'
import BG_ETHIcon from '../../assets/svg/bg_ETHic.svg'
import BG_USDTIcon from '../../assets/svg/bg_USDTic.svg'


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
    <SafeAreaView style={styles.backgroundColor}>
      <View className="h-[255px] flex flex-wrap justify-center ml-[110px]">
        <View className='absolute top-2 ml-[-10px]'>
        <BG_BCIcon/>
        </View>
        <View className='absolute top-[35px]'>
        <BG_PPIcon/>
        </View>
        <View className='absolute ml-[180px] top-[60px] ' style={styles.rotatedETHIcon}>
          <BG_ETHIcon/>
        </View>
      </View>
      <View className="p-6 pt-0 bg-white rounded-[35px] h-[80%]">
        <View className='absolute top-[-50px] ml-[105px]' style={styles.rotatedUSDTIcon}>
          <BG_USDTIcon/>
        </View>
        <Text className="font-bold text-[24px] text-center mt-10 mb-8">Đăng Nhập</Text>
        <View className="border-[1.5px] border-[#0094FF] rounded-[30px]  h-[150px]">
          <View className="h-[50%] flex-row items-center ml-4">
              <AccountIcon className=""/>
              <TextInput  style={styles.input} 
                className="font-semibold ml-4" 
                placeholder='Email'
                onChangeText={newText => setText(newText)}
                defaultValue={text}>
                </TextInput>
          </View>
          <View className="border-b-[1.5px] border-[#0094FF]"></View>
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
        <TouchableOpacity className='items-end'><Text className="my-4 font-bold">Quên mật khẩu?</Text></TouchableOpacity>
        <Link href='/verify-sign-in' className='w-[628px] mt-5'>
          <View className="w-full bg-[#0094FF] h-[60px] flex-row items-center justify-center rounded-full mt-6">
            <Text className="text-white text-[20px] text-center font-bold">Đăng Nhập</Text>
          </View>
        </Link>
        <View className="items-center">
          <Text className=''>Bạn là người dùng mới? <Link href="/sign-up" className='text-[#0094FF]'>Đăng Ký</Link></Text>
        </View>

        
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
  },
  backgroundColor: {
    backgroundColor: 'rgba(94, 187, 253, 0.5)',
  },
  rotatedETHIcon: {
    transform: [{ rotate: '10deg' }],
  },
  rotatedUSDTIcon: {
    transform: [{ rotate: '-10deg' }],
  },
})
export default SignIn