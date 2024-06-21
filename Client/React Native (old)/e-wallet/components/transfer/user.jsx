import { ImageBackground, Text, View, TextInput, Button, Image,TouchableOpacity } from 'react-native';
export default function User({navigation,...props}){
    return(
        <TouchableOpacity className="w-[25%] mt-5" onPress={() => navigation.navigate('Transfer')}> 
             <View className="flex-col items-center ">
                <Image
                        className="rounded-full"
                    source={{uri: 'https://reactjs.org/logo-og.png'}}
                    style={{ width: 50, height: 50 }}
                    />
                <Text className="text-center w-[80%] mt-1">{props.name}</Text>
            </View>
        </TouchableOpacity>
    );
}
// onPress={() => navigation.navigate('Transfer')