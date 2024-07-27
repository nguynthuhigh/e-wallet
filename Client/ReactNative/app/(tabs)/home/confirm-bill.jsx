import React, {useEffect, useState} from 'react'
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity,TextInput } from 'react-native'
import { router,useLocalSearchParams } from 'expo-router'
import Modal from 'react-native-modal'
import walletAPI from '../../api/wallet.api'
import transactionAPI from '../../api/transaction.api'
import currency from '../../../utils/fomart_currency'
import BackArrow from "../../../assets/svg/arrow_back.svg";
import Close from '../../../assets/svg/close.svg'
import BottomSheetSecurityCode from './bs-security-code-send'
const DetailTransaction = () => {
    const {item} = useLocalSearchParams()
    const dataBill = JSON.parse(item)
    const [isModalVisible, setModalVisible] = useState(false);
    const [OTP, setOTP] = useState(null);
    const [errorMessage,setErrorMessage] = useState(null)
    const [isLoading,setIsLoading] = useState(false)


    const handleOTPChange = (newOTP) => {
        setOTP(newOTP);
        setErrorMessage(null)
        if (newOTP.length === 6) {
          handleOTP(newOTP);
        }
      };
      const handleSubmit = async (newOTP) => {
        try {
            setIsLoading(true)
            const body = {
                receiver:dataBill.receiver,
                amount:dataBill.amount,
                currency:dataBill.currency,
                message:dataBill.message,
                security_code:newOTP
            }
            const response = await walletAPI.sendMoney(body)
            if(response?.status === 200){
                setModalVisible(false)
                const transaction = response.data.data
                router.push({ pathname: "home/details-bill", params: {item: JSON.stringify(transaction)} })
                setIsLoading(false)
            }
        } catch (error) {
            console.log(error.response.data.message)
            setErrorMessage(error.response.data.message)
            setIsLoading(false)
        }
      }
  return (
    <SafeAreaView className="text-black">
        <View className="flex-row items-center bg-white px-5 gap-x-2 pt-2">
          <TouchableOpacity onPress={() => router.back()}>
            <BackArrow width={30} height={26.5} />
          </TouchableOpacity>
          <View>
           
            <Text className="font-bold text-lg text-black mx-auto">Xác nhận giao dịch</Text>
          </View>
        </View>
        <View className="p-6 bg-white h-full">
           
            <Text className='font-semibold'>CHI TIẾT GIAO DỊCH</Text>
            <View className="border-[1.5px] border-[#0094FF] p-5 mt-3 rounded-2xl">
                <View className='flex flex-row justify-between mb-4'>
                    <Text className='text-[#6b6b6b]'>Chuyển tiền đến</Text>
                    <Text className='font-bold'>{dataBill?.email}</Text>
                </View>
                <View className='flex flex-row justify-between mb-4'>
                    <Text className='text-[#6b6b6b]'>Email </Text>
                    <Text className='font-bold'>{dataBill?.email}</Text>
                </View>
                <View className='flex flex-row justify-between mb-4'>
                    <Text className='text-[#6b6b6b]'>Số tiền</Text>
                    <Text className='font-bold'>{currency.formatCurrency(dataBill?.amount, dataBill?.currency)}</Text>
                </View>
                <View className='flex flex-row justify-between mb-4'>
                    <Text className='text-[#6b6b6b]'>Lời Nhắn</Text>
                    <Text className='font-bold'>{dataBill?.message}</Text>
                </View>
                <View className="border-b-[1.5px] border-[#0094FF] mb-4"></View>
                <View className='flex flex-row justify-between mb-4'>
                    <Text className='text-[#6b6b6b]'>Phí giao dịch</Text>
                    <Text className='font-bold'>Miễn phí</Text>
                </View>
                <View className="w-full justify-center items-center h-fit py-4 border-dashed border-[1.5px] border-[#0094ff] rounded-2xl">
                    <Text className='font-bold text-[#0094ff] text-[18px]'>+ Chọn thẻ quà tặng</Text>
                </View>
            </View>
            <View className='flex flex-row justify-between my-3 px-5'>
                <Text className='font-semibold text-[16px]'>Tổng tiền</Text>
                <Text className='font-bold text-[16px]'>{currency.formatCurrency(dataBill?.amount,dataBill?.currency ? dataBill?.currency : 'USD')}</Text>
            </View>
            <View className='flex flex-row justify-between mb-3 px-5'>
                <TouchableOpacity onPress={()=>{setModalVisible(true)}} className='w-full mt-2'>
                <View className="w-full bg-[#0094FF] h-[55px] flex-row items-center justify-center rounded-xl">
                    <Text className="text-white text-[20px] text-center font-bold">Xác nhận</Text>
                </View>
                </TouchableOpacity>
            </View>
        </View>
        {isModalVisible && (
        <View style={{ ...StyleSheet.absoluteFillObject, zIndex: 10 }}>
          <BottomSheetSecurityCode
            title="Nhập mã bảo mật"
            error= {errorMessage}
            message={isLoading}
            handleSubmit={handleSubmit}
          />
        </View>
      )}
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    
})
export default DetailTransaction