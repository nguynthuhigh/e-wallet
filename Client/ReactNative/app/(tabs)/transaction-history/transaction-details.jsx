import React, { useState } from "react";
import { Text, View, TextInput, FlatList, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Back from "../../../assets/svg/back.svg"
import Transfer from "../../../assets/svg/transfer1.svg"
import Line from "../../../assets/svg/line.svg"
import {router} from 'expo-router';
export default function Transaction_Details(){

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
            <Text className="text-white text-lg font-bold ml-[15px]">
                Chi tiết giao dịch
            </Text>
        </View>
        <View className="bg-white h-[312px] mt-[30px] px-[11px] rounded-[15px] rounded-b-none">
            <View className="flex-row items-center border-[#5AAA67] border-[1px] rounded-[15px]  h-[67] mt-[11px] ">
           
                <View className="ml-[5px]">
                    <Transfer ></Transfer>
                </View>
                <View className="ml-[8px]">
                    <Text className="font-medium text-[12px] opacity-50 mb-[3px]">
                        CHUYỂN TIỀN ĐẾN NGUYỄN MINH NGUYÊN
                    </Text>
                    <Text className="font-bold text-[22px]">
                        -30.000đ
                    </Text>
                </View>
           </View>
            <View >
                <View className=" flex-row items-center justify-between">
                    < Text className="font-bold  text-[15px] my-[15] text-[#757575]">
                    Trạng thái
                    </Text>
                <View className="rounded-[25px] bg-[#D8F7BE] p-1.5 px-5 ">
                    <Text className="font-bold  text-[15px] text-[#4FB125] ">
                    Thành công
                    </Text>
                </View>
            </View>
            <View className=" flex-row items-center justify-between">
                <Text className="font-bold  text-[15px]  text-[#757575]">
                    Thời gian
                </Text>
                <Text className="font-bold  text-[15px] ">
                    22:02 - 17/05/2024
                </Text>
            </View>
            </View>
                <View className="mt-[20px] mb-[20px]">
                    <Line ></Line>
                </View>
            <View >
                <View className=" flex-row items-center justify-between">
                    <Text className="font-bold  text-[15px] my-[15] text-[#757575]">
                  Mã giao dịch
                    </Text>
                    <Text className="font-bold  text-[15px] ">
                    22022004
                    </Text>
                </View>
            <View className=" flex-row items-center justify-between">
                <Text className="font-bold  text-[15px] mb-[15]  text-[#757575]">
                    Tài khoản thẻ
                </Text>
                <Text className="font-bold mb-[15] text-[15px] ">
                Ví PayEx
                </Text>
            </View>
            <View className=" flex-row items-center justify-between">
                <Text className="font-bold  text-[15px]  text-[#757575]">
                    Tổng phí
                </Text>
                <Text className="font-bold  text-[15px] ">
                    Miễn phí
                </Text>
            </View>
        </View>
        </View>
        <View className="w-full h-[42px] bg-[#E6F7FF] rounded-b-[15px]">
            <Text className="m-auto text-[#6E7BF4] font-bold text-[14px]">
                Liên hệ hỗ trợ
            </Text>
        </View>
    </View>
    <View className="bg-white h-[130px] mt-[20px] mx-[17px] rounded-[15px]">
        <View className="mt-[15px] mx-[11px] flex-col justify-between">
            <Item_Title title={"Tên Ví Pay Express"} content={"123"}> </Item_Title>
            <Item_Title title={"Tên gợi nhớ"} content={"123"}> </Item_Title>
            <Item_Title title={"Email"} content={"123"}></Item_Title>
        </View>
    </View>

   </View>
     </LinearGradient>
    )
}
const Item_Title = ({...props})=>{
    return( <View className="flex-row items-center justify-between mt-[13px]">
        <Text className=" font-bold  text-[15px]  text-[#757575]">
            {props.title}
        </Text>
        <Text className="font-bold  text-[15px] ">
                    {props.content}
                    </Text>
    </View>)
}