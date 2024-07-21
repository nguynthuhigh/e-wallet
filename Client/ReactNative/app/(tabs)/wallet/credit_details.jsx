import {Text, View, TouchableOpacity,SafeAreaView,TextInput} from 'react-native'
import React from 'react'
import { LinearGradient } from "expo-linear-gradient";
import Credit_blue  from "../../../assets/svg/credit-card.svg"
import Visa  from "../../../assets/svg/visa.svg"
import VisaWhite from '../../../assets/svg/visa_white.svg'
import Back from "../../../assets/svg/arrow_back"
import Frame from '../../../assets/svg/tickwhite.svg'
import Tick from '../../../assets/svg/tick.svg'
import { useState } from 'react';
import { router } from 'expo-router'
import CreditBgOne from '../../../assets/svg/credit_bg_1.svg'
const CreditCardDetails = () => {
    const [SoThe, setSoThe] = useState('');
    const [SoTheError, setSoTheError] = useState('');
    const validateSoThe = () => {
        if (SoThe.trim() === '') {
          setSoTheError('Số thẻ nhập không đúng');
        } else if (SoThe.length === 16 ) {
          setSoTheError('Số thẻ đủ 16 số');
        } else {
          setSoTheError('');
        }
      };
    const [EXPDate, setEXPDate] = useState('');
    const [EXPDateError, setEXPDateError] = useState('');
    const validateEXPDate = () => {
        if (EXPDate.trim() === '') {
          setEXPDateError('Hết hạn sử dụng');
        } else {
          setEXPDateError('');
        }
      };
      const [CVV, setCVV] = useState('');
    const [CVVError, setCVVError] = useState('');
    const validateCVV = () => {
        if (CVV.trim() === '') {
          setCVVError('Nhập số không đúng');
        } else if (SoThe.length > 3 ) {
            setSoTheError('Không được lớn hơn 3');
        } else {
          setCVVError('');
        }
      };
      const [UserName, setUserName] = useState('');
    const [UserNameError, setUserNameError] = useState('');
    const validateUserName = () => {
        if (UserName.trim() === '') {
          setUserNamerror('Họ và tên không đúng');
        } else {
          setUserNameError('');
        }
      };
    const [isHide, setIsHide] = useState(false);
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
                            <Text className='text-white text-[16px] text-regular'>Credit</Text>
                            <View className="mt-auto">
                                <Text className='text-white text-[16px] text-regular'>Name On Card</Text>
                                <Text className='text-white text-[16px] text-regular'>•••• •••• •••• ••••</Text>
                            </View>
                        </View>
                        <View className="ml-auto">
                            <VisaWhite ></VisaWhite>
                        </View>
                    </View>
                </LinearGradient>
                <View className='mt-[15px]'>
                    <Text className="font-semibold text-[18px]">
                        Số thẻ
                    </Text>
                    <View className="border-[1.5px] border-[#0094FF] px-[15px] rounded-[15px] flex-row mt-[5px] items-center ">
                        <TextInput className="h-[40px] w-[250px]" 
                        type="number"
                        value={SoThe}
                        onChange={(e) => setSoThe(e.target.value)}
                        onBlur={validateSoThe}
                        />
                        <View className="ml-auto" >
                            <Visa></Visa>
                        </View>
                    </View>
                    <View className="mt-[20px]">
                        <View className="gap-3">
                            <View className="flex-row justify-between">
                                <View className="flex-col w-[48%]">
                                    <Text className="font-semibold text-[18px]">
                                        Ngày hết hạn
                                    </Text>
                                    <TextInput className="h-[50px] mt-[5px] border-[1.5px] rounded-[15px] border-[#0094FF]  w-full " 
                                        type="text"
                                        value={EXPDate}
                                        onChange={(e) => setEXPDate(e.target.value)}
                                        onBlur={validateEXPDate}
                                        />
                                </View>
                                <View className="flex-col w-[48%]">
                                    <Text className="font-semibold text-[18px]">
                                        CVV
                                    </Text>
                                    <TextInput className="h-[50px]  mt-[5px] border-[1.5px] rounded-[15px] border-[#0094FF] w-full " 
                                         type="number"
                                         value={CVV}
                                         onChange={(e) => setCVV(e.target.value)}
                                         onBlur={validateCVV}
                                         />
                                </View>
                            </View>
                        </View>
                    </View>
                    <View className="flex-col w-full mt-[20px]">
                        <Text className="font-semibold text-[18px]">
                            Tên chủ thẻ
                        </Text>
                        <TextInput className="h-[50px]  mt-[5px] border-[1.5px] rounded-[15px] border-[#0094FF] w-full " 
                             type="text"
                             value={UserName}
                             onChange={(e) => setUserName(e.target.value)}
                             onBlur={validateUserName}
                             />
                    </View>
                    <View className='mt-[10px] flex-row items-center'>
                        <TouchableOpacity 
                             onPress={() => {
                            setIsHide(!isHide);}}>
                            {isHide ? 
                            <Frame  width={20} height={20} />
                                     : (
                            <Tick width={15} height={13} />
                                                )}
                        </TouchableOpacity>
                        <Text className='ml-[10px] text-medium text-[15px]'>
                            Đồng ý thêm thẻ
                        </Text>
                    </View>
                    <View className="bg-[#0D99FF] rounded-[50px] h-[50px] w-full flex-col mt-[30px] items-center">
                        <Text className="font-semibold  text-[18px] text-white mx-[10px]  ">
                            Thêm thẻ
                        </Text>
                    </View>
                </View>
            </View>
        </View>          
        </SafeAreaView>
    )
}
export default CreditCardDetails;