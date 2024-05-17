import {ScrollView, ImageBackground, Text, View, TextInput, Button, Image,TouchableOpacity } from 'react-native';
import { SearchBar } from '@rneui/themed';
import Transfers from '../../assets/transfer.svg'
import Bank from '../../assets/bank.svg'
import Lucky_Money from '../../assets/lucky_money.svg'
import Scan from '../../assets/scan.svg'
import Bg_Blue from '../../assets/bg_blue.svg'
import Recommend_User from './recommend_user';
import History from './history';
import Header from '../header/header';

export default function Transfer(){
  return(
      <View className="w-full h-full">
        
          <Bg_Blue width="100%" height="100%"/>
            <ScrollView className="px-4 mt-2 w-full absolute">
            <Header/>
        
            <View className="flex-row p-4 py-[20px] w-[100%] mt-5 mx-auto bg-white rounded-xl justify-between ">
              <TouchableOpacity className="flex-col items-center w-[84px]" onPress={''}>
                <Transfers width={30} height={26.5}/>
                <Text className="mt-2">Đến ví khác</Text>
              </TouchableOpacity>
              <TouchableOpacity className="flex-col  items-center w-[84px]"  onPress={''}>
                <Bank width={30} height={26.5}/>
                <Text className='text-center mt-2'>Chuyển đến ngân hàng</Text>
              </TouchableOpacity>
              <TouchableOpacity className="flex-col   items-center w-[84px]"  onPress={''}>
                <Scan width={25} height={28}/>
                <Text className="mt-2">Quét mã QR</Text>
              </TouchableOpacity>
              <TouchableOpacity className="flex-col  items-center w-[84px]"  onPress={''}>
                <Lucky_Money width={30} height={26.5}/>
                <Text className="mt-2">Lì xì</Text>
              </TouchableOpacity>
          </View>
          <Recommend_User></Recommend_User>
          <History></History>
        </ScrollView>
      </View>
  )
}

