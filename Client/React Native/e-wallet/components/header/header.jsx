import { useNavigation } from '@react-navigation/native';
import { ImageBackground, Text, View, TextInput, Button, Image,TouchableOpacity } from 'react-native';
import Back_Arrow from '../../assets/arrow_back.svg'

export default function Header(){
    const navigation = useNavigation();
    return (
      <View className='flex-row justify-between w-full mt-[35px] '>
          <TouchableOpacity className=""   onPress={() => navigation.goBack()}>
            <Back_Arrow width={30} height={26.5}/>
            
          </TouchableOpacity>
          <Text className='font-bold color-white text-[18px]'>Chuyển tiền</Text>
          <View className="w-[35px] h-[35px] flex-row justify-center items-center">
           
            <View className="w-full rounded-full h-full bg-white absolute"></View>
            <Image
                className="rounded-full"
              style={{ width: 30, height: 30 }}
              source={{uri: 'https://reactjs.org/logo-og.png'}}
            />
          </View>
      </View>
    );
}