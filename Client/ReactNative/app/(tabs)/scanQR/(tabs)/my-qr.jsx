import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import QRCode from "react-native-qrcode-svg";
import ArrowMore from "../../../../assets/svg/arrow_more.svg";
import NavigationHeader from "../../../../components/NavigationHeader";
import constants from "../../../../constants";
const { images } = constants;
const MyQR = () => {
  return (
    <SafeAreaView>
      <LinearGradient
        className="h-full w-full"
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={["#0094FF", "#F2F2F2"]}
        locations={[0, 0.3]}
      >
        <View className="mt-5">
          <NavigationHeader title="QR của tôi" />
          <ScrollView>
            <View className="flex-1 bg-white mx-5 p-5 items-center rounded-t-3xl">
              <QRCode
                value="https://docs.expo.dev/more/qr-codes/"
                size={300}
                logoSize={80}
                logo={images.logo_pressPay}
              />
              <View className="flex-row items-center gap-x-3 mt-5">
                <Text className="font-semibold text-base text-[#8c8c8c]">
                  Tự động cập nhật sau 59s.
                </Text>
                <TouchableOpacity>
                  <Text className="font-semibold text-base text-[#0094FF]">
                    Cập nhật
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity className=" flex-row justify-between w-full mt-5 items-center px-5 py-3 border border-[#0094FF] rounded-xl">
                <Image
                  source={images.voucher}
                  resizeMode="contain"
                  className="w-6 h-6"
                />
                <Text className="font-semibold text-sm text-[#0094FF]">
                  Xem ưu đãi hoặc nhập mã
                </Text>
                <ArrowMore />
              </TouchableOpacity>
            </View>
            <View className="bg-white mx-5 p-5 items-center overflow-hidden">
              <View className=" absolute -bottom-4 -left-4 w-8 h-8 bg-[#D9D9D9] rounded-full"></View>
              <View className=" absolute -bottom-4 -right-4 w-8 h-8 bg-[#D9D9D9] rounded-full"></View>
            </View>
            <View className="h-[1px] mx-5 flex-1 border border-dashed border-[#8c8c8c]"></View>
            <View className="bg-white mx-5 p-5 items-center rounded-b-3xl overflow-hidden">
              <View className=" absolute -top-4 -left-4 w-8 h-8 bg-[#D9D9D9] rounded-full"></View>
              <View className=" absolute -top-4 -right-4 w-8 h-8 bg-[#D9D9D9] rounded-full"></View>
            </View>
          </ScrollView>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default MyQR;
