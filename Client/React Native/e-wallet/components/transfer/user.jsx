import { ImageBackground, Text, View, TextInput, Button, Image,TouchableOpacity } from 'react-native';
export default function User({...props}){
    return(
    <View className="flex-col items-center w-[25%] mt-5">
        <Image
                className="rounded-full"
              source={{uri: 'https://reactjs.org/logo-og.png'}}
              style={{ width: 50, height: 50 }}
            />
        <Text className="text-center w-[80%] mt-1">{props.name}</Text>
    </View>
    );
}