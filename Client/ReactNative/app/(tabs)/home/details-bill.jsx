import React, {useState,useEffect} from 'react'
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import CheckMark from "../../../assets/svg/ic_CheckMark.svg";
import { router,useLocalSearchParams } from 'expo-router'
import transactionAPI from '../../api/transaction.api'
import format from '../../../utils/fomart_currency';
import HomeBlack from '../../../assets/svg/home_black.svg'
const TransactionResults = () => {
    const {item} = useLocalSearchParams()
    const transactionID = JSON.parse(item)._id
    const [transactionData,setTransactionData] = useState(null)
    const [isLoading,setIsLoading] = useState(true)
    const [currency, setCurrency] = useState(null)
    useEffect(()=>{
        const fetchTransaction = async()=>{
            try {
            const response = await transactionAPI.getTransactionDetails(transactionID)
            if(response.status === 200){
                setTransactionData(response.data.data)
                setCurrency(transactionData?.currency?.symbol)
                setIsLoading(false)
            }
            } catch (error) {
                setIsLoading(false)
                console.log(error)
            }
        }
        fetchTransaction()
    },[])
    return (
        <SafeAreaView >
            <View>
          
            </View>
            <View className="h-[680px] p-5">
                <View className=' items-center mb-10 flex-row justify-between'>
                    <View className='w-[20px]'></View>
                    <Text className='font-semibold text-xl text-black'>Kết Quả Giao Dịch</Text>
                    <TouchableOpacity onPress={()=>{router.push('home')}}>
                        <HomeBlack></HomeBlack>
                    </TouchableOpacity>
                </View>
                <View style={styles.container}>
                    <View className='w-full absolute top-[-30px] z-10 items-center'>
                        <View className='bg-white rounded-full p-2 '>
                            <CheckMark/>
                        </View>
                    </View>
                    <View className=" bg-white p-5 rounded-2xl">
                        <View className='justify-center items-center mt-7'>
                            <Text className='font-semibold text-[16px] mb-1'>Giao dịch thành công</Text>
                            <Text className='font-bold text-[25px] my-2'>{isLoading ? '...Loading' : format.formatCurrency(transactionData?.amount,currency ? currency : 'VND')}</Text>
                        </View>
                        <View className="border-t-2 border-blue-900 border-dashed"></View>
                        {!isLoading ? 
                        <View className='bg-[#d6eeff] px-3 py-4 mb-3 rounded-xl border-[1px] border-[#0094ff]'>
                            <Text>{transactionData?.receiver?.email} đã nhận được tiền từ bạn</Text>
                        </View> : ''}
                        <View className='flex flex-row justify-between mb-4'>
                            <Text className='text-[#6b6b6b]'>Thời gian thanh toán</Text>
                            <Text className='font-bold'>{isLoading ? '...Loading' : format.formatTime(transactionData?.createdAt)}</Text>
                        </View>
                        <View className='flex flex-row justify-between mb-5'>
                            <Text className='text-[#6b6b6b]'>Chi tiết giao dịch</Text>
                            <Text className='font-bold text-[#0094ff]'>{isLoading ? '...Loading' : transactionData?._id}</Text>
                        </View>
                        <View className='border-[1px] border-[#d8d8d8] rounded-2xl p-3'>
                            <View>
                                <Text className='mb-2'>Biên lai chuyển tiền</Text>
                                <Text className='mb-2 text-[#dfdfdf]'>-----------------------------------------------</Text>
                            </View>
                            <View>
                                <Text className='mb-2 ml-10'>{isLoading ? '...Loading' : transactionData?.sender?.email}</Text>
                                <Text className='text-[#dfdfdf]'>          -----------------------------------------</Text>
                            </View>
                            <View className='mb-3'>
                                <Text className='mb-1 ml-10'>{isLoading ? '...Loading' : transactionData?.sender?.name}</Text>
                                <Text className='ml-10 text-[#9c9c9c]'>{isLoading ? '...Loading' : transactionData?.receiver?.email}</Text>
                            </View>
                            <View className="p-2 w-full flex flex-row items-center h-fit border-dashed border-[1.5px] border-[#0094ff] rounded-xl">
                                <Text>♥</Text>
                                <View className='px-2 flex flex-row items-center justify-between'>
                                    <Text className='text-[14px]'>Đặt tên gợi nhớ để chuyển tiền{'\n'}nhanh hơn vào lần sau.</Text>
                                    <View className='ml-[6px] rounded-lg bg-[#d7ecfc] p-[6px]'>
                                    <Text className='text-[14px] font-bold text-[#0094FF]'>Đặt tên</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View className='w-full flex flex-row justify-between mt-3'>
                            <TouchableOpacity className='w-[49%]'>
                            <View className=" border-[#d8d8d8] bg-white border-[1px] h-[55px] flex-row items-center justify-center rounded-xl">
                                <Text className="text-black text-[18px] text-center font-bold">Trò chuyện</Text>
                            </View>
                            </TouchableOpacity>
                            <TouchableOpacity className='w-[49%]'>
                            <View className=" border-[#0094FF] bg-white border-[1px] h-[55px] flex-row items-center justify-center rounded-xl">
                                <Text className="text-[#0094FF] text-[18px] text-center font-bold">Chuyển thêm</Text>
                            </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>    
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        borderStyle:'dashed'

      },
    
})
export default TransactionResults