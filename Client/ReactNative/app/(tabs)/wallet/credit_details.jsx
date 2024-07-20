import {Text, View, TouchableOpacity,SafeAreaView,TextInput} from 'react-native'
import React from 'react'
import { LinearGradient } from "expo-linear-gradient";
import Credit_blue  from "../../../assets/svg/credit-card.svg"
import Visa  from "../../../assets/svg/visa.svg"
import VisaWhite from '../../../assets/svg/visa_white.svg'
import Back from "../../../assets/svg/arrow_back"
import { useState } from 'react';
import { router } from 'expo-router'
import CreditBgOne from '../../../assets/svg/credit_bg_1.svg'
const CreditCardDetails = () => {
    const [text, onChangeText] = useState('');
    return(
        <SafeAreaView>
            <View className="bg-white">
            <View className="mx-[19px] mt-[63px]">
                <View className="flex-row items-center">
                    <TouchableOpacity onPress={() => router.back()}>
                        <Back></Back>
                    </TouchableOpacity>
                    <Text className="text-black text-lg font-bold m-auto">
                        Thêm thẻ
                    </Text>
                </View>
            </View>
            <View className="p-4">
                <LinearGradient
                    style={{  width: '100%', height:'185' }}
                    start={{ x: 1, y: 1 }}
                    end={{ x: 0, y: 0 }}
                    colors={["#52B6FE", "#6154FE"]}
                    className="rounded-[20px]">
                    <View className="w-full h-[185px] rounded-lg p-6 flex-row">
                        <View className="h-full">
                            <Text>Credit</Text>
                            <View className="mt-auto">
                                <Text>Name On Card</Text>
                                <Text>•••• •••• •••• ••••</Text>
                            </View>
                        </View>
                        <View className="ml-auto">
                            <VisaWhite ></VisaWhite>
                        </View>
                    </View>
                </LinearGradient>
                <View className='mt-[15px]'>
                    <Text className="font-semibold text-[16px]">
                        Số thẻ
                    </Text>
                    <View className="border-[1px] border-[#0094FF] px-[15px] rounded-[15px] flex-row mt-[5px] items-center ">
                        <TextInput className="h-[40px] w-[250px]" 
                        onChangeText={onChangeText}
                        value={text}>

                        </TextInput>
                        <View className="ml-auto" >
                            <Visa></Visa>
                        </View>
                    </View>
                    <View className="mt-[20px]">
                        <View className="gap-3">
                            <View className="flex-row justify-between">
                                <View className="flex-col w-[48%]">
                                    <Text className="font-semibold text-[16px]">
                                        Ngày hết hạn
                                    </Text>
                                    <TextInput className="h-[50px] w-full border-[1px]" 
                                        onChangeText={onChangeText}
                                        value={text}>
                                    </TextInput>
                                </View>
                                <View className="flex-col w-[48%]">
                                    <Text className="font-semibold text-[16px]">
                                        Ngày hết hạn
                                    </Text>
                                    <TextInput className="h-[50px] w-full border-[1px]" 
                                        onChangeText={onChangeText}
                                        value={text}>
                                    </TextInput>
                                </View>
                            </View>
                            <View className="bg-[#0D99FF] rounded-[10px] h-[36px] w-[360px] flex-row items-center">
                                <Text className="font-bold  text-[16px] text-white mx-[10px] ">
                                Thêm thẻ
                                </Text>
                            
                        </View>
                         </View>
                    </View>
                </View>
            </View>
            </View>          
        </SafeAreaView>
    )
}
export default CreditCardDetails;