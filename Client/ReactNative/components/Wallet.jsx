import { View, Text,Image } from "react-native";
import React from "react";
const Wallet = ({ logo, currency, value }) => {
  return (
    <View className=" border-[#0094FF] px-3 py-2 border-2 rounded-xl bg-[#FFF5F5] mx-1">
      <View className="flex-row items-center justify-between">
        <Image source={logo} resizeMode="contain" className="w-6 h-6" />
        <View className="ml-2">
          <Text className=" text-base font-semibold ">{currency}</Text>
          <Text className="text-xs">{value}</Text>
        </View>
      </View>
    </View>
  );
};

export default Wallet;
