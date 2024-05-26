import {  Text, View, ScrollView, Button, Image,Pressable,Linking,TouchableOpacity } from 'react-native';
import Transfer from '../transfer/transfer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Menu from '../menu/menu';
import Notification from '../../assets/svg/notification.svg'
import Search from '../../assets/svg/search.svg'
import CashIn from '../../assets/svg/cashin.svg'
import Eye from '../../assets/svg/eye.svg'
import EyeClosed from '../../assets/svg/eyeClosed.svg'
import {LinearGradient} from 'expo-linear-gradient';
import { useState } from 'react';
import LottieView from 'lottie-react-native';
import ConfirmSend from '../transfer/confirm_send';
const Stack = createNativeStackNavigator();

function Index({ navigation }) {
  const [hide,setHide] = useState(false)
  
  return (
    
   <ScrollView className="bg-white pt-5">
    <LinearGradient className="rounded-b-[50px] p-[3px] pt-0 w-full" start={{x: 0, y: 0}} end={{x: 0, y: 1}} colors={['#FFFFFF','#0094FF']}>

      <View className="bg-white p-5 rounded-b-[50px]" style={{fontFamily:'inter'}}>
        <View className="flex-row w-full ">
          <View className="flex-row justify-center items-center">
            <View className="bg-[#EFEEEE] rounded-full absolute w-[46px] h-[46px]"></View>
            <Image className="w-[41px] h-[41px]" source={require('../../assets/cz.png')}/>
          </View>
          <View className="ml-2">
            <Text className="text-[12px] ">Chào buổi tối</Text>
            <Text className="text-[14px] font-bold">Nguyễn Minh Nguyên</Text>
          </View>
          <View className="flex-row ml-auto justify-between">
            <Search className="w-[30px] h-[30px] px-4"/>
            <View className="w-[10px]"></View>
            <Notification className="w-[30px] h-[30px]"/>
          </View>
        </View>
        <View className="w-[90%] h-[0.5px] mt-3 mx-auto bg-[#F2F2F2]"></View>
        <View className="flex-row w-full">
          <View className="w-[80%]">
            <View className="w-full flex-row items-center my-2">
              <Text className="text-[14px] mr-2 font-semibold">Số dư</Text>
              <TouchableOpacity onPress={()=>{setHide(!hide)}}>{hide ? <Eye/>: <EyeClosed/>}</TouchableOpacity>
              
            </View>
            <LinearGradient className="rounded-full w-full" start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={['#0094FF','#FFFFFF']}>
                
                <Text className="text-[24px] ml-3  font-semibold text-white">{hide ? '125.000.000VNĐ' : '*******'}</Text>
            </LinearGradient>
              
          </View>
          <View className="flex-col items-center ml-auto mt-auto">
            <CashIn></CashIn>
            <Text className="font-medium">Nạp/Rút</Text>
          </View>
        </View>

        <View className="flex-row justify-between mt-4 ">
          
          <TouchableOpacity className="flex-col items-center mb-auto"  onPress={() => navigation.navigate('Transfer')}>
              <LottieView
                    style={{flex:1,width:30, height:30}}
                    source={require('../../assets/animation/transfer.json')}
                    autoPlay
                    loop
                  />
              <Text className="font-medium">Chuyển tiền</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-col items-center"  onPress={() => navigation.navigate('ConfirmSend')}>
                <LottieView
                    style={{flex:1,width:30, height:30}}
                    source={require('../../assets/animation/transfer.json')}
                    autoPlay
                    loop
                  />
              <Text className="font-medium">Nhận tiền</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-col items-center"  onPress={() => navigation.navigate('Transfer')}>
          <LottieView
                    style={{flex:1,width:30, height:30}}
                    source={require('../../assets/animation/transfer.json')}
                    autoPlay
                    loop
                  />
              <Text className="font-medium w-[80px] text-center">QR Thanh Toán</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-col items-center"  onPress={() => navigation.navigate('Transfer')}>
          <LottieView
                    style={{flex:1,width:30, height:30}}
                    source={require('../../assets/animation/transfer.json')}
                    autoPlay
                    loop
                  />
              <Text className="font-medium w-[60px] text-center">Quét mã QR</Text>
          </TouchableOpacity>
        </View>
      
      </View>
            
      </LinearGradient>
   </ScrollView>
  );
}

export default function Home(){
  return(  
        <Stack.Navigator
        screenOptions={{
          headerShown: false,
        
          }}>
          <Stack.Screen name="Index" component={Index} 
        />
          <Stack.Screen name="Transfer" component={Transfer} />
          <Stack.Screen name="ConfirmSend" component={ConfirmSend} />

        </Stack.Navigator>
  )
}

