import {Text, View, TouchableOpacity} from 'react-native'
import React from 'react'
import { LinearGradient } from "expo-linear-gradient";
import Back from "../../../assets/svg/back.svg"

const credit_card = () => {
    return(
        <LinearGradient
        style={{ height: '100%', width: '100%' }}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={["#0094FF", "#F2F2F2"]}
        locations={[0, 0.3]}>
        <View>
            <View className="mx-[19px] mt-[63px]">
                <View className="flex-row items-center">
                    <TouchableOpacity onPress={() => router.back()}>
                        <Back></Back>
                    </TouchableOpacity>
                    <Text className="text-white text-lg font-bold m-auto">
                        Quản lý tài khoản/thẻ
                    </Text>
                </View>
            </View>
            <View>
                
            </View>
        </View>
        </LinearGradient>
    )
}
export default credit_card;