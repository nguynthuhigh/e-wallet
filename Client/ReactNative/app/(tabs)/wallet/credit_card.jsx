import {Text, View, TouchableOpacity,SafeAreaView} from 'react-native'
import React from 'react'
import { LinearGradient } from "expo-linear-gradient";
import Back from "../../../assets/svg/back.svg"
import Eye  from "../../../assets/svg/eye.svg"
import EyeClosed  from "../../../assets/svg/eyeClosed.svg"
import { useState } from 'react';
import { router } from 'expo-router'

const CreaditCard = () => {
    const [isHide, setIsHide] = useState(false);
    return(
        <SafeAreaView>
  <LinearGradient
        style={{ height: '100%', width: '100%' }}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={["#0094FF", "#F2F2F2"]}
        locations={[0, 0.3]}>
        <View>
            <View className="mx-[19px] mt-5">
                <View className="flex-row items-center">
                    <TouchableOpacity onPress={() => router.back()}>
                        <Back></Back>
                    </TouchableOpacity>
                    <Text className="text-white text-lg font-bold m-auto">
                        Quản lý tài khoản/thẻ
                    </Text>
                </View>
            </View>
           <View className="bg-white h-full mt-[15px] ">
                <View className="flex-row items-center justify-between mt-[19px] ml-[13px] ">
                    <Text className="font-bold text-[18px] mb-[15px] ">
                        Tài khoản/Thẻ
                    </Text>
                    <View className='flex-row mx-[22px]'>
                        <View className="mx-[22px]">
                        </View>
                        <TouchableOpacity 
                             onPress={() => {
                            setIsHide(!isHide);}}>
                            {isHide ? (
                            <EyeClosed  width={30} height={30} />
                                    ) : (
                            <Eye width={30} height={30} />
                                                )}
                        </TouchableOpacity>
                    </View>
                </View>
                <View  className="flex-row items-center justify-between mx-[13px]">
                    <Text className='font-iRegular text-[14px]'>
                        Thanh toán, chuyển tiền theo thứ tự  bên
                    </Text>
                    <View className="flex-row items-center justify-between mr-[15px]">
                    <Text className="font-bold text-[14px] mx-[10px]">
                        Sắp xếp
                    </Text>
                    <Text className="font-bold text-[14px]">
                        Số dư
                    </Text>
                    </View>
                </View>
                <View className='font-iRegular text-[14px] mx-[13px]'>
                    <Text>dưới <Text className="text-[#0094FF]">
                        trường hợp đặc biệt </Text></Text>

                </View>
                <View  className="mx-[13px] mt-[10px] ">
                    <TouchableOpacity onPress={() => router.push("/wallet/credit_details")}>
                    <View className="bg-[#0D99FF] rounded-[10px] mb-[10px] h-[72px] items-center flex-row">
                        <View className=" rounded-full bg-white w-[42px] h-[42px] ml-[18px] items-center justify-center ">
                        </View>
                        <View className=" ml-[10px]">
                            <Text className="font-bold text-[16px] text-white">
                                Ví PressPay
                            </Text>
                            <Text className="font-regular text-[14px] text-white mt-[5px]">
                                      số dư: 1.000.000đ          
                            </Text>
                        </View>
                    </View>
                    </TouchableOpacity>
                    <View className="flex-cols justify-between ">
                        <View className="bg-[#FF0606] rounded-[10px] mb-[10px] h-[72px] items-center flex-row">
                            <View className=" rounded-full bg-white w-[42px] h-[42px] ml-[18px] items-center  justify-center ">
                                <Text>Icon</Text>
                            </View>
                        <Item_Title title={"Túi thần tài"} content={"Số dư: 1.000.000"}> </Item_Title>
                    </View>
                    <View className="bg-[#0057FF] rounded-[10px] mb-[10px] h-[72px] items-center flex-row">
                        <View className=" rounded-full bg-white w-[42px] h-[42px] ml-[18px] items-center  justify-center ">
                        </View>
                        <Item_Title title={"Sacombank"} content={"Thanh toán trực tiếp"}> </Item_Title>
                    </View>
                    
                    <View className="bg-[#FFBDE9] opacity-26 h-[90px] border-dashed border-[1px] justify-between py-[5px] flex-col items-center rounded-[10px] border-[#FF00A8]">
                        <View className="bg-[#FF00A8] rounded-[10px] h-[36px]  flex-row items-center   mt-[10px]">
                           <TouchableOpacity onPress={()=>{router.push('wallet/credit_details')}}>
                            <Text className="font-bold  text-[16px] text-white mx-[10px] ">
                                    + Thêm thẻ Visa
                                </Text>
                           </TouchableOpacity>
                            
                        </View>
                        <Text>
                           Liên kết thẻ có sẵn
                        </Text>

                    </View>    
                </View>  
                    
                </View>
                
           </View>

        </View> 
        </LinearGradient>
        </SafeAreaView>
      
    )
}
const Item_Title = ({...props})=>{
    return( 
       
    <View className=" ml-[10px]">
        <Text className="font-bold text-[16px] text-white">
        {props.title}
        </Text>
        <Text className="font-regular text-[14px] text-white mt-[5px]">
        {props.content}        
        </Text>
    </View>
       
        
)
}
export default CreaditCard; 