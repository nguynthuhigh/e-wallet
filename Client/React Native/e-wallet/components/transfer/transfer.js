import {  Text, View, TextInput, Button, Image,TouchableOpacity } from 'react-native';
import { SearchBar } from '@rneui/themed';
import Transfers from '../../assets/transfer.svg'
import Bank from '../../assets/bank.svg'
import Lucky_Money from '../../assets/lucky_money.svg'
import Scan from '../../assets/scan.svg'


function LogoTitle() {
    return (
      <View className='flex-row justify-between w-full '>
          <Button
            title='Back'></Button>
          <Text className='mr-2'>Chuyển tiền</Text>
          <View>
            <Image
              style={{ width: 30, height: 30 }}
              source={require('../../assets/user.png')}
            />
          </View>
      </View>
    );
  }
export default function Transfer(){
  return(
    <View className="px-4 mt-2 ">
        <LogoTitle></LogoTitle>
     
        <View className="flex-row p-4 py-[20px] w-[100%] mx-auto bg-white rounded-xl justify-between ">
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
    </View>
  )
}

