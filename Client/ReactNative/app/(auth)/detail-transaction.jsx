import React, {useState} from 'react'
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import CheckMark from "../../assets/svg/ic_CheckMark.svg";


const DetailTransaction = () => {

  return (
    <SafeAreaView style={styles.backgroundColor}>
        
        <View className="h-[500px] p-5">
            <View className=' items-center flex justify-center mb-2'>
                <Text className='font-semibold text-xl text-black'>Kết Quả Giao Dịch</Text>
            </View>
            <View style={styles.container}>
                <View className=' absolute top-1 z-10'>
                    <View className='bg-white rounded-full p-3'>
                        <CheckMark/>
                    </View>
                </View>
                <View className=" bg-white p-5 rounded-2xl">
                    <View className='justify-center items-center mt-6'>
                        <Text className='font-semibold text-[16px] mb-1'>Giao dịch thành công</Text>
                        <Text className='font-bold text-[18px] mb-3'>5.000.000đ</Text>
                    </View>
                    <View className="border-[1.5px] border-dashed border-[#0094FF]"></View>
                    <View className='bg-[#d6eeff] px-3 py-4 mb-3'>
                        <Text>○ Phạm Thanh Phúc đã nhận được tiền từ bạn</Text>
                    </View>
                    <View className='flex flex-row justify-between mb-4'>
                        <Text className='text-[#6b6b6b]'>Thời gian thanh toán</Text>
                        <Text className='font-bold'>22:02 - 22/02/2024</Text>
                    </View>
                    <View className='flex flex-row justify-between mb-5'>
                        <Text className='text-[#6b6b6b]'>Chi tiết giao dịch</Text>
                        <Text className='font-bold'>22022004</Text>
                    </View>
                    
                    <View className="px-3 w-full flex flex-row items-center h-fit py-4 border-dashed border-[1.5px] border-[#0094ff] rounded-xl">
                        <Text>♥</Text>
                        <View className='px-3 flex flex-row items-center justify-between'>
                            <Text className='text-[14px]'>Đặt tên gợi nhớ để chuyển tiền{'\n'}nhanh hơn vào lần sau.</Text>
                            <View className='ml-3 rounded-lg bg-[#d7ecfc] p-2'>
                            <Text className='text-[14px] font-bold text-[#0094FF]'>Đặt tên</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>    
        </View>
        
        <View className='w-full flex flex-row justify-between px-5'>
        <TouchableOpacity className='w-[49%]'>
        <View className=" border-[#d8d8d8] bg-white border-[1.5px] h-[55px] flex-row items-center justify-center rounded-xl">
            <Text className="text-black text-[20px] text-center font-bold">Trò chuyện</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity className='w-[49%]'>
        <View className=" border-[#0094FF] bg-white border-[1.5px] h-[55px] flex-row items-center justify-center rounded-xl">
            <Text className="text-[#0094FF] text-[20px] text-center font-bold">Chuyển thêm</Text>
        </View>
        </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderStyle: 'dashed    '
      },
    
})
export default DetailTransaction