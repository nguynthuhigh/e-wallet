import React, {useState} from 'react'
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'

const DetailTransaction = () => {

  return (
    <SafeAreaView style={styles.backgroundColor}>
        
        <View className="h-[430px] p-5">
        <Text className='font-semibold'>CHI TIẾT GIAO DỊCH</Text>
        <View className="border-[1.5px] border-[#0094FF] p-5 mt-3 rounded-2xl">
            <View className='flex flex-row justify-between mb-4'>
                <Text className='text-[#6b6b6b]'>Chuyển tiền đến</Text>
                <Text className='font-bold'>Phạm Thanh Phúc</Text>
            </View>
            <View className='flex flex-row justify-between mb-4'>
                <Text className='text-[#6b6b6b]'>Số điện thoại</Text>
                <Text className='font-bold'>079 975 8402</Text>
            </View>
            <View className='flex flex-row justify-between mb-4'>
                <Text className='text-[#6b6b6b]'>Số tiền</Text>
                <Text className='font-bold'>5.000.000đ</Text>
            </View>
            <View className='flex flex-row justify-between mb-4'>
                <Text className='text-[#6b6b6b]'>Lời Nhắn</Text>
                <Text className='font-bold'>        Săn quà EURO{"\n"}Bùng nổ cùng Jack-97</Text>
            </View>
            <View className="border-b-[1.5px] border-[#0094FF] mb-4"></View>
            <View className='flex flex-row justify-between mb-4'>
                <Text className='text-[#6b6b6b]'>Phí giao dịch</Text>
                <Text className='font-bold'>Miễn phí</Text>
            </View>
            <View className='flex flex-row justify-between mb-5'>
                <Text className='text-[#6b6b6b]'>Mã tham chiếu</Text>
                <Text className='font-bold'>22022004</Text>
            </View>
            <Text className='font-bold mb-2'>ƯU ĐÃI</Text>
            <View className="w-full justify-center items-center h-fit py-4 border-dashed border-[1.5px] border-[#0094ff] rounded-2xl">
                <Text className='font-bold text-[#0094ff] text-[18px]'>+ Chọn thẻ quà tặng</Text>
            </View>
        </View>
        </View>
        <View className="border-b-[1.5px] border-[#0094FF] mb-5"></View>
        <View className='flex flex-row justify-between mb-3 px-5'>
                <Text className='font-semibold text-[16px]'>Tổng tiền</Text>
                <Text className='font-bold text-[16px]'>5.000.000đ</Text>
        </View>
        <View className='flex flex-row justify-between mb-3 px-5'>
        <TouchableOpacity className='w-full mt-2'>
        <View className="w-full bg-[#0094FF] h-[55px] flex-row items-center justify-center rounded-xl">
            <Text className="text-white text-[20px] text-center font-bold">Xác nhận</Text>
        </View>
        </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({

})
export default DetailTransaction