import { View, Text, Image } from "react-native";
import { formatCurrency } from "../utils/fomart_currency.js";
import React from "react";
const Wallet = ({ logo: Icon, currency, value, isSelected }) => {
  return (
    <View
      className={`${
        isSelected ? "border-[#0094FF] " : "border-[#FFF5F5]"
      } px-3 py-2 border-2 rounded-xl bg-[#FFF5F5] mr-2 transition-all`}
    >
      <View className="flex-row items-center justify-between">
        <Icon width={24} height={24} />
        <View className="ml-2">
          <Text className=" text-base font-semibold ">{currency}</Text>
          <Text className="text-xs ">{formatCurrency(value, currency)}</Text>
        </View>
      </View>
    </View>
  );
};
export default Wallet;
