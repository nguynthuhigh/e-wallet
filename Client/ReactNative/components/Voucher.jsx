import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const Voucher = () => {
  return (
    <View className="w-full flex-row items-center justify-center h-32 mb-2">
      <View className="w-[23%] h-full rounded-3xl flex items-center justify-center bg-[#0D99FF]">
        <Text className="text-sm font-semibold transform -rotate-90 text-white">
          DISCOUNT
        </Text>
        <View className="w-6 h-6 absolute rounded-full bg-white -left-3"></View>
      </View>
      <View className="w-[77%] h-full rounded-3xl p-2 bg-[#E8E7E7]">
        <View className="flex-col justify-between h-full">
          <View className="flex-row w-full justify-between items-center mb-2">
            <View className="w-[35%]">
              <Text className="text-xs font-semibold text-[#0D99FF]">
                GH137JDKDJ
              </Text>
              <View className="flex-row space-x-1">
                <Text className="text-xs font-semibold text-[#0D99FF]">
                  Còn lại:
                </Text>
                <Text className="text-xs font-semibold">50</Text>
              </View>
            </View>
            <View className="w-[65%]">
              <Text className="text-sm text-center font-semibold">
                Giảm 100K khi thanh toán qua pressPay
              </Text>
            </View>
          </View>
          <View className="w-full h-[2px] border border-dashed border-[#0D99FF]"></View>
          <View className="flex-row justify-between items-center w-full ">
            <View className="w-[50%]">
              <Text className="text-sm font-semibold text-[#0D99FF]">
                Expires
              </Text>
              <Text className="text-sm font-semibold">16 Jun 2024</Text>
            </View>
            <View className="w-[50%]">
              <TouchableOpacity
                className=" py-2 bg-[#0D99FF] items-center rounded-xl"
                activeOpacity={0.7}
              >
                <Text className="text-sm font-semibold text-white">
                  Sử dụng
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View className="w-6 h-6 absolute rounded-full bg-white -right-3 top-1/2"></View>
      </View>
    </View>
  );
};

export default Voucher;
