import {  Text, View, ScrollView, Button, Image,Pressable,TextInput,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Back_Arrow from '../../assets/arrow_back.svg'
import {LinearGradient} from 'expo-linear-gradient';
import { useState } from 'react';
import { Message } from '../../dummy data/data';
export default function ConfirmSend(){
    const navigation = useNavigation();
    const [content,setContent] = useState("")
    const [price,setPrice] = useState(0)

    return(
        <LinearGradient className="h-full w-full" start={{x: 0, y: 0}} end={{x: 0, y: 1}} colors={['#0094FF','#F2F2F2']}  locations={[0, 0.3]} style={{fontFamily:'inter'}}> 
            <View className="mt-8">
                <View className="flex-row p-4 items-center">
                    <TouchableOpacity   onPress={() => navigation.goBack()}>
                        <View className="bg-[#554242] "></View>
                        <Back_Arrow className="absolute" width={30} height={26.5}/>
                    </TouchableOpacity>
                    <View className="w-[35px] h-[35px] flex-row justify-center items-center">
                        <View className="w-full rounded-full h-full bg-white absolute"></View>
                        <Image
                            className="rounded-full"
                            style={{ width: 30, height: 30 }}
                            source={{uri: 'https://reactjs.org/logo-og.png'}}/>
                    </View>
                    <View className="ml-2">
                        <Text className="text-white text-[15px] font-semibold">Nguyễn Minh Nguyên</Text>
                        <Text className="text-white text-[13px] font-medium">036988962x</Text>
                    </View>
                </View>
                <View className="w-[95%] mx-auto bg-white rounded-md">
                    <View className="mx-auto my-5">
                        <TextInput onChangeText={newText => setPrice(newText)} keyboardType={"number-pad"}  autoFocus={true} value={price} className="w-fit h-[50px] text-[50px] font-bold"  placeholder="0đ"></TextInput>
                        </View>
                    <View className="mx-auto w-[95%]">
                        <TextInput  onChangeText={newText => setContent(newText)} multiline value={content} className="w-[100%] h-[100px] border-[1px] border-[#C9C9C9] rounded-md p-4 text-[15px]"  placeholder="Nhập hoặc trọn bên dưới"></TextInput>
                    </View>
                   <View className="p-4 flex-row flex-wrap">
                        {Message.map((item,key) =>(
                            <TouchableOpacity onPress={()=>{setContent(item.message)}}>
                                <View style={{ alignSelf: 'center', padding: 8, backgroundColor:'#F2F2F2', borderRadius:120, marginRight:10, marginBottom:10}}>
                                    <Text>{item.message}</Text>
                                </View>
                             </TouchableOpacity>
                        ))}
                   </View>
               
                </View>
                <View>
                    <TouchableOpacity onPress={()=>{setPrice("10000")}}>
                        <View className="border-[1px] px-4 py-2  rounded-xl border-[#0D99FF] bg-white" style={{ alignSelf: 'center', }}>
                            <Text className="text-[#0D99FF]">
                                10.000
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View className="p-4 ">
                    <TouchableOpacity onPress={()=>{}}>
                        <View className="bg-[#0D99FF] rounded-xl p-2"><Text className="mx-auto text-white font-semibold py-2 text-[20px] ">Chuyển tiền</Text></View>
                    </TouchableOpacity>
                </View>
            </View>
        </LinearGradient>
       

    );
}