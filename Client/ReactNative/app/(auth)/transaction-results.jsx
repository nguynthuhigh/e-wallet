import React, {useState} from 'react'
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import CheckMark from "../../assets/svg/ic_CheckMark.svg";


const TransactionResults = () => {

  return (
    <SafeAreaView style={styles.backgroundColor}>
        
        <View className="h-[680px] p-5">
            <View className=' items-center justify-center mb-10'>
                <Text className='font-semibold text-xl text-black'>Kết Quả Giao Dịch</Text>
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
                        <Text className='font-bold text-[18px] mb-1'>5.000.000đ</Text>
                    </View>
                    <View className="mb-1"><Text className='text-[#dfdfdf]'>---------------------------------------------------</Text></View>
                    <View className='bg-[#d6eeff] px-3 py-4 mb-3 rounded-xl border-[1px] border-[#0094ff]'>
                        <Text>○  Phạm Thanh Phúc đã nhận được tiền từ bạn</Text>
                    </View>
                    <View className='flex flex-row justify-between mb-4'>
                        <Text className='text-[#6b6b6b]'>Thời gian thanh toán</Text>
                        <Text className='font-bold'>22:02 - 22/02/2024</Text>
                    </View>
                    <View className='flex flex-row justify-between mb-5'>
                        <Text className='text-[#6b6b6b]'>Chi tiết giao dịch</Text>
                        <Text className='font-bold text-[#0094ff]'>22022004</Text>
                    </View>
                    <View className='border-[1px] border-[#d8d8d8] rounded-2xl p-3'>
                        <View>
                            <Text className='mb-2'>Biên lai chuyển tiền</Text>
                            <Text className='mb-2 text-[#dfdfdf]'>-----------------------------------------------</Text>
                        </View>
                        <View>
                            <Text className='mb-2 ml-10'>Nguyễn Minh Nguyên</Text>
                            <Text className='text-[#dfdfdf]'>          -----------------------------------------</Text>
                        </View>
                        <View className='mb-3'>
                            <Text className='mb-1 ml-10'>Phạm Thanh Phúc</Text>
                            <Text className='ml-10 text-[#9c9c9c]'>0799758402</Text>
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

      },
    
})
export default TransactionResults