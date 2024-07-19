import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import QRCode from "react-native-qrcode-svg";
import ArrowMore from "../../../../assets/svg/arrow_more.svg";
import NavigationHeader from "../../../../components/NavigationHeader";
import constants from "../../../../constants";
const { images } = constants;
import EyeOpen from "../../../../assets/svg/eye.svg";
import EyeClosed from "../../../../assets/svg/eyeClosed.svg";
import { wallet } from "../../../../dummy-data/data.js";
import Wallet from "../../../../components/Wallet";

const MyQR = () => {
  const [isHide, setIsHide] = useState(false);
  const [selectedWalletIndex, setSelectedWalletIndex] = useState(0);

  return (
    <SafeAreaView>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={["#0094FF", "#F2F2F2"]}
        locations={[0, 0.2]}
      >
        <View className="mt-5">
          <ScrollView className="overflow-hidden">
            <NavigationHeader title="QR của tôi" />
            <View className="flex-1 bg-white mx-5 p-5 items-center rounded-t-3xl">
              <QRCode
                value="https://script.google.com/macros/s/AKfycbw60qWu7Q1XZDwXCvzzowBh7YwaO9uoQ0oAxBw4TSFReCAFis4OwNWFYOe2Z7dQmph7/exec"
                size={300}
                logoSize={80}
                logo={images.logo_pressPay}
              />
              <View className="flex-row items-center gap-x-3 mt-5">
                <Text className="font-semibold text-base text-[#8c8c8c]">
                  Tự động cập nhật sau{" "}
                  <Text className="text-[#0094FF]">59s</Text>
                </Text>
                <TouchableOpacity></TouchableOpacity>
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
            <View className="h-[1px] mx-5 flex-1 border border-dashed border-[#8c8c8c]"></View>

            <View className="flex-1 mx-5 p-4 rounded-b-3xl bg-white">
              <View className="absolute left-0 right-0 -top-4">
                <View className=" overflow-hidden h-8">
                  <View className=" absolute top-0 -left-4 w-8 h-8 bg-[#D9D9D9] rounded-full"></View>
                  <View className=" absolute top-0 -right-4 w-8 h-8 bg-[#D9D9D9] rounded-full"></View>
                </View>
              </View>
              <View className=" flex-row items-center gap-x-4 mb-4">
                <Text className=" text-base font-semibold">Tài khoản</Text>
                <TouchableOpacity onPress={() => setIsHide(!isHide)}>
                  {!isHide ? (
                    <EyeClosed width={24} height={24} />
                  ) : (
                    <EyeOpen width={24} height={24} />
                  )}
                </TouchableOpacity>
              </View>
              <ScrollView
                horizontal={true}
                contentContainerStyle={{
                  display: "flex",
                  flexDirection: "row",
                }}
                showsHorizontalScrollIndicator={false}
              >
                {wallet.map((value, index) => (
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => setSelectedWalletIndex(index)}
                    key={index}
                  >
                    <Wallet
                      logo={value.img}
                      currency={value.currency}
                      value={value.value}
                      isSelected={selectedWalletIndex === index}
                    />
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          </ScrollView>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default MyQR;
