import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { router } from 'expo-router';
import { TouchableOpacity,SafeAreaView } from 'react-native';
import ImageWelcome from '../../assets/images/welcome.png'
const Welcome = () => {
    return (
        <SafeAreaView>
            <View className="w-full ">
            <Text className="text-[#0094FF] my-5 w-[200px] mx-auto mt-[90px] text-center text-[32px] font-iSemiBold">Welcome to pressPay</Text>
            
                <Image className="mx-auto w-fit" source={require('../../assets/images/welcome.png')}></Image>

               <View className="my-10">
               <Text className="text-center  text-[#0094FF] text-[20px] font-iSemiBold mx-auto">pressPay - Ví điện tử</Text>
               <Text className="text-center  text-[#0094FF] text-[20px] font-iSemiBold mx-auto">Đơn giản - Tiện lợi - Nhanh chóng</Text>
               </View>
                <TouchableOpacity className="w-[80%] bg-[#0094FF] p-4 text-white mx-auto rounded-full " onPress={()=>{router.push('/sign-in')}}><Text className="text-center text-white text-[20px] font-iSemiBold">Đăng nhập</Text></TouchableOpacity>
                <View className="flex-row w-fit mx-auto my-2 font-iSemiBold">
                    <Text className="font-iSemiBold">Bạn là người dùng mới?</Text><TouchableOpacity onPress={()=>{router.push('/sign-up')}}><Text className="font-iSemiBold text-[#0094FF]" > Đăng ký</Text></TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
        
    );
};

export default Welcome;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});
