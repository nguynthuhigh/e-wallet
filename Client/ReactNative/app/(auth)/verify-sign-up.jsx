import React, {useState} from 'react'
import { View, Text,TextInput,SafeAreaView,TouchableOpacity,StyleSheet } from 'react-native'
import BG_BCIcon from '../../assets/svg/bg_BCic.svg'
import BG_PPIcon from '../../assets/svg/bg_PPic.svg'
import BG_ETHIcon from '../../assets/svg/bg_ETHic.svg'
import BG_USDTIcon from '../../assets/svg/bg_USDTic.svg'
import OTPIcon from '../../assets/svg/ic_OTP.svg'

import { Link } from "expo-router";
import axios from "axios"
const VerifySignUp = () => {
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
        <Text className="font-bold text-[24px] text-center mt-10 mb-5">Xác Thực Đăng Ký</Text>
        <View className='items-center mb-5'>
        <Text className='text-[18px]'>Mã OTP đã gửi đến</Text>
        <Text className='text-[#0094ff] font-bold text-[18px] mb-2'>example@presspay.com</Text>
        </View>
        <View className="border-[1.5px] border-[#0094FF] rounded-[30px]  h-[75px]">
          <View className="h-[100%] flex-row items-center ml-4">
              <OTPIcon/>
              <TextInput  style={styles.input} 
                className="font-semibold ml-4" 
                placeholder='Nhập mã OTP'
                onChangeText={newText => setText(newText)}
                defaultValue={text}>
                </TextInput>
          </View>
        </View>
        <TouchableOpacity className='items-end'><Text className="my-4 text-[#0094ff] font-bold">Gửi lại mã</Text></TouchableOpacity>
        <Link href="/verify-account" className='w-[643px] mt-4'>
          <View className="w-full bg-[#0094FF] h-[60px] flex-row items-center justify-center rounded-full mt-6">
            <Text className="text-white text-[20px] text-center font-bold">Xác Nhận</Text>
          </View>
        </Link>
        <View className="items-center">
          <Text>Bạn đã có tài khoản? <Link href="/sign-in" className='text-[#0094FF]'>Đăng Nhập</Link></Text>
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
export default VerifySignUp