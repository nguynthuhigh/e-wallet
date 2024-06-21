import { useNavigation } from '@react-navigation/native';
import { Text, View, TextInput, Button, Image,TouchableOpacity } from 'react-native';
import Back_Bg from 'assets/svg/back_bg.svg'

export default function Header_General({...props}){
    const navigation = useNavigation();
    return (
      <View className='flex-row justify-between w-full mt-14 p-4'>
          <TouchableOpacity className=""   onPress={() => navigation.goBack()}>
            <Back_Bg width={30} height={30}/>
          </TouchableOpacity>
          <Text className='font-semibold color-white text-[18px]'>{props.title}</Text>
          <View></View>
      </View>
    );
}