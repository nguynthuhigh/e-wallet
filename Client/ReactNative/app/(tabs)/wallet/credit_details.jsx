import {Text, View, TouchableOpacity} from 'react-native'
import React from 'react'
import { LinearGradient } from "expo-linear-gradient";
import Credit_blue  from "../../../assets/svg/credit_blue.svg"
import Visa  from "../../../assets/svg/visa.svg"
import Back from "../../../assets/svg/arrow_back"
import { useState } from 'react';
import { router } from 'expo-router'
const CreditCardDetails = () => {
    return(
        <LinearGradient
        style={{ height: '100%', width: '100%' }}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={["#0094FF", "#F2F2F2"]}
        locations={[0, 0.3]}>
            <View >
            <View className="mx-[19px] mt-[63px]">
                <View className="flex-row items-center">
                    <TouchableOpacity onPress={() => router.back()}>
                        <Back></Back>
                    </TouchableOpacity>
                    <Text className="text-white text-lg font-bold m-auto">
                        Thêm thẻ
                    </Text>
                </View>
            </View>
            <View className="mx-[35px] mt-[10px]">
                <View className="w-[360px] h-[185px] rounded-[20px]">
                <Credit_blue></Credit_blue>
                 
                </View>
                <View className='mt-[15px]'>
                    <Text className="font-semibold text-[16px]">
                        Số thẻ
                    </Text>
                    <View className="border-[1px] border-[#0094FF] px-[15px] rounded-[15px] flex-row mt-[5px] items-center ">
                        <Text className="font-semibold text-[20px] ">
                            1234 5678 9101 1221
                        </Text>
                        <View className="ml-auto" >
                            <Visa></Visa>
                        </View>
                    </View>
                    <View className="mt-[20px]">
                        <View>
                            <View className="flex-row items-center ">
                                <Text className="font-semibold text-[16px]">
                                    Ngày hết hạn
                                </Text>
                                <Text className="font-semibold ml-[100px] text-[16px]">
                                    CVV
                                </Text>
                            </View>
                            <View className="flex-row items-center ">
                                <View className="border-[1px] border-[#0094FF] rounded-[15px] px-[15px] items-center  flex-row  w-[170px] h-[50px]">
                                    <Text className="font-semibold   text-[20px]">
                                        15/07
                                    </Text>
                                </View>   
                                <View className="border-[1px] border-[#0094FF] ml-[10px] rounded-[15px] px-[15px] items-center  flex-row  w-[170px] h-[50px]">
                                    <Text className="font-semibold  text-[20px]">
                                        15/07
                                    </Text>
                                </View>  
                            </View>
                            <View className="">
                                <Text className="font-semibold text-[16px]">
                                    Tên chủ thẻ
                                </Text>
                                <View className="border-[1px] border-[#0094FF] rounded-[15px] flex-row items-center w-[170px] h-[50px]">
                                    <Text className="font-semibold text-[20px]">
                                        NGUYỄN MINH NGUYÊN
                                    </Text>
                                </View>   
                            </View>
                            <View className="bg-[#0D99FF] rounded-[10px] h-[36px] w-[360px] flex-row items-center   mt-[10px]">
                                <Text className="font-bold  text-[16px] text-white mx-[10px] ">
                                Thêm thẻ
                                </Text>
                            
                        </View>
                         </View>
                    </View>
                </View>
            </View>
            </View>          
        </LinearGradient>
    )
}
export default CreditCardDetails;