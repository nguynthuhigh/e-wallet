import { View, Text, SafeAreaView, ScrollView, Image } from "react-native";
import React from "react";
import constants from "../../../constants";
const { images, logo } = constants;
const DepositAndWithdraw = () => {
  return (
    <SafeAreaView>
      <View className=" h-14 bg-white flex-row items-center justify-around">
        <Image source={images.cashin} className="w-6 h-6" />
        <Image source={images.cashout} className="w-6 h-6" />
      </View>
      <ScrollView>
        <View className=" mx-3 my-4 bg-white rounded-2xl h-40">
          <View className=" px-4 py-2">
            <Text className=" text-black font-semibold text-lg mb-3">
              Nạp tiền
            </Text>
          </View>
          <View className="flex-row justify-center items-center px-4 py-2">
            <View className="h-14 w-32 rounded-xl bg-[#FFF5F5] px-2 py-1 flex-row items-center justify-center gap-x-2">
              <Image source={logo.presspay} className="w-6 h-6" />
              <View className="">
                <Text className=" text-sm font-semibold">VNĐ</Text>
                <Text className=" text-xs">5.000.000đ</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DepositAndWithdraw;
