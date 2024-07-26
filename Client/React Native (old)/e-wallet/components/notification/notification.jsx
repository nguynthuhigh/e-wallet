import React from 'react';
import {useState} from 'react';
import {ScrollView,  Text, View, TextInput, StyleSheet , Image,TouchableOpacity } from 'react-native';
import Header_General from '../header/header_general'
import { LinearGradient } from 'expo-linear-gradient';
import CreditCard from 'assets/svg/credit-card.svg'
import CustomSwitch from './custom_switch'

const Item_Noti = ({...props})=>{
    const [switchValue, setSwitchValue] = useState(false);

    const handleSwitchChange = (value) => {
        setSwitchValue(value);
        console.log('Switch value: ', value);
    };
  return(
    <View className="flex-row items-center">
        <CreditCard width={30} height={22}/>
        <View className="ml-2">
          <Text className="font-semibold text-[15px]">{props.title}</Text>
          <Text className="font-thin text-[#8F8F8F] ">{props.content}</Text>
        </View>
        <View className="ml-auto">
          <CustomSwitch initial={switchValue} onChange={handleSwitchChange} />
        </View>
       
    </View>
  );
}
export default function Notification(){
    return(
        <LinearGradient className="h-full w-full" start={{x: 0, y: 0}} end={{x: 0, y: 1}} colors={['#0094FF','#F2F2F2']}  locations={[0, 0.3]} style={{fontFamily:'inter'}}> 
            <Header_General title="Cài đặt thông báo"/>
            <View className="w-full p-4 bg-[#F2F2F2]">
                <Text className="font-bold text-[18px]">Thông báo</Text>
                <View className="bg-white p-4 rounded-lg">
                    <Item_Noti title="Giao dịch" content="Thay đổi số dư, cập nhật trạng thái giao dịch"></Item_Noti>
                </View>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });