import { View, Text, Image } from "react-native";
import React from "react";
const Wallet = ({ logo, currency, value, isSelected }) => {
  return (
    <View
      className={`${
        isSelected ? "border-[#0094FF] " : "border-[#FFF5F5]"
      } px-3 py-2 border-2 rounded-xl bg-[#FFF5F5] mr-2 transition-all`}
    >
      <View className="flex-row items-center justify-between">
        <Image source={logo} resizeMode="contain" className="w-6 h-6" />
        <View className="ml-2">
          <Text className=" text-base font-semibold ">{currency}</Text>
          <Text className="text-xs ">{value}</Text>
        </View>
      </View>
    </View>
  );
};
export default Wallet;
