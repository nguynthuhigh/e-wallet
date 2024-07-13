import React, {useEffect, useState} from 'react'
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity,TextInput } from 'react-native'
import { router,useLocalSearchParams } from 'expo-router'
import Modal from 'react-native-modal'
import walletAPI from '../../api/wallet.api'
import transactionAPI from '../../api/transaction.api'
const DetailTransaction = () => {
    const params = useLocalSearchParams()
    const transactionID = params.transactionID
    const [isModalVisible, setModalVisible] = useState(false);
    const [OTP, setOTP] = useState(null);
    const [errorMessage,setErrorMessage] = useState(null)
    const [transactionData,setTransactionData] = useState(null)
    const [isLoading,setIsLoading] = useState(true)
    useEffect(()=>{
        try {
            const fetchTransaction = async()=>{
                const data = await transactionAPI.getTransactionDetails(transactionID)
                setTransactionData(data.data)
            }
            fetchTransaction()
        } catch (error) {
            console.log(error)
        }
    },[])

    const handleOTPChange = (newOTP) => {
        setOTP(newOTP);
        setErrorMessage(null)
        if (newOTP.length === 6) {
          handleOTP(newOTP);
        }
      };
      const handleOTP = async (newOTP) => {
        try {
            const body = {
                security_code:newOTP,
                transactionID:transactionData._id
            }
            const response = await walletAPI.confirmSendMoney(body)
            console.log(response)
            if(response.status === 200){
                setModalVisible(false)
                const transactionID = response.data.data._id
                router.push({ pathname: "home/details-bill", params: transactionID })
            }
        } catch (error) {
            console.log(error)
            setErrorMessage(error.response.data.message)
            console.log(errorMessage)
        }
      }
  return (
    <SafeAreaView style={styles.backgroundColor}>
         <Modal isVisible={isModalVisible} className="">
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}} >

                <View className="bg-[#FAFAFA] font-semibold text-[22px] w-full p-4 rounded-t-[10px]">
                    <TouchableOpacity onPress={()=>{setModalVisible(!isModalVisible)}}><Text>close</Text></TouchableOpacity>
                    <Text className="font-semibold text-[22px] text-center">Nhập mã bảo mật</Text>
                    </View>
                <View className="bg-[#EEEEEE] w-full  flex-col items-center py-10 rounded-b-lg">
                    {errorMessage ? <Text className="text-red-500">{errorMessage}</Text>:<Text></Text>}
                    <TextInput  
                    style={styles.input} 
                    className={`font-semibold w-[160px] text-[30px] h-[60px] bg-white rounded-full px-5 ${errorMessage ? 'border-red-500 border-[1px]': ''}`} 
                    placeholder='••••••'
                    maxLength = {6}
                    keyboardType='numeric'
                    autoFocus={true}
                    onChangeText={handleOTPChange}
                    defaultValue={OTP}
                    >
                    </TextInput>
                </View>
            </View>
            </Modal>
        <View className="h-[430px] p-5">
           
            <Text className='font-semibold'>CHI TIẾT GIAO DỊCH</Text>
            <View className="border-[1.5px] border-[#0094FF] p-5 mt-3 rounded-2xl">
                <View className='flex flex-row justify-between mb-4'>
                    <Text className='text-[#6b6b6b]'>Chuyển tiền đến</Text>
                    <Text className='font-bold'>{transactionData?.receiver?.name}</Text>
                </View>
                <View className='flex flex-row justify-between mb-4'>
                    <Text className='text-[#6b6b6b]'>Email </Text>
                    <Text className='font-bold'>{transactionData?.receiver?.email}</Text>
                </View>
                <View className='flex flex-row justify-between mb-4'>
                    <Text className='text-[#6b6b6b]'>Số tiền</Text>
                    <Text className='font-bold'>{transactionData?.amount}</Text>
                </View>
                <View className='flex flex-row justify-between mb-4'>
                    <Text className='text-[#6b6b6b]'>Lời Nhắn</Text>
                    <Text className='font-bold'>{transactionData?.message}</Text>
                </View>
                <View className="border-b-[1.5px] border-[#0094FF] mb-4"></View>
                <View className='flex flex-row justify-between mb-4'>
                    <Text className='text-[#6b6b6b]'>Phí giao dịch</Text>
                    <Text className='font-bold'>Miễn phí</Text>
                </View>
                <View className='flex flex-row justify-between mb-5'>
                    <Text className='text-[#6b6b6b]'>Mã tham chiếu</Text>
                    <Text className='font-bold'>{transactionData?._id}</Text>
                </View>
                <View className="w-full justify-center items-center h-fit py-4 border-dashed border-[1.5px] border-[#0094ff] rounded-2xl">
                    <Text className='font-bold text-[#0094ff] text-[18px]'>+ Chọn thẻ quà tặng</Text>
                </View>
            </View>
            <View className="border-b-[1.5px] border-[#0094FF] mb-5"></View>
            <View className='flex flex-row justify-between mb-3 px-5'>
                <Text className='font-semibold text-[16px]'>Tổng tiền</Text>
                <Text className='font-bold text-[16px]'>{transactionData?.amount}</Text>
            </View>
            <View className='flex flex-row justify-between mb-3 px-5'>
                <TouchableOpacity onPress={()=>{setModalVisible(true)}} className='w-full mt-2'>
                <View className="w-full bg-[#0094FF] h-[55px] flex-row items-center justify-center rounded-xl">
                    <Text className="text-white text-[20px] text-center font-bold">Xác nhận</Text>
                </View>
                </TouchableOpacity>
            </View>
        </View>
        
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    
})
export default DetailTransaction