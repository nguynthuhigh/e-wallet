import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import LottieView from "lottie-react-native";
import constants from "../../../constants";
import EyeIcon from "../../../assets/svg/eye.svg";
import EyeClosedIcon from "../../../assets/svg/eyeClosed.svg";
import SearchIcon from "../../../assets/svg/search.svg";
import NotificationIcon from "../../../assets/svg/notification.svg";
import CashInIcon from "../../../assets/svg/cashin.svg";
import { StatusBar } from "expo-status-bar";
const { images } = constants;

const HomePage = () => {
  const [isHide, setIsHide] = useState(false);

  return (
    <SafeAreaView>
      <ScrollView className="bg-white">
        <LinearGradient
          className="rounded-b-[50px] p-[3px] pt-0 w-full mx-auto"
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          colors={["#FFFFFF", "#0094FF"]}
        >
          <View className="bg-white p-5 rounded-b-[50px]">
            <View className="flex-row w-full">
              <View className="flex-row justify-center items-center">
                <View className="bg-[#EFEEEE] rounded-full absolute w-[46px] h-[46px]"></View>
                <Image className="w-[41px] h-[41px]" source={images.si} />
              </View>
              <View className="ml-2">
                <Text className="text-[12px]">Chào buổi tối</Text>
                <Text className="text-[14px] font-bold">
                  Nguyễn Minh Nguyên
                </Text>
              </View>
              <View className="flex-row ml-auto justify-between">
                <SearchIcon width={30} height={30} />
                <View className="w-[10px]"></View>
                <NotificationIcon width={30} height={30} />
              </View>
            </View>
            <View className="w-[90%] h-[0.5px] mt-3 mx-auto bg-[#F2F2F2]"></View>
            <View className="flex-row w-full">
              <View className="w-[80%]">
                <View className="w-full flex-row items-center my-2">
                  <Text className="text-[14px] mr-2 font-semibold">Số dư</Text>
                  <TouchableOpacity
                    onPress={() => {
                      setIsHide(!isHide);
                    }}
                  >
                    {isHide ? (
                      <EyeClosedIcon width={20} height={20} />
                    ) : (
                      <EyeIcon width={20} height={20} />
                    )}
                  </TouchableOpacity>
                </View>
                <LinearGradient
                  className="rounded-full w-full"
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  colors={["#0094FF", "#FFFFFF"]}
                >
                  <Text className="text-[24px] ml-3 font-semibold text-white">
                    {isHide ? "*******" : "125.000.000VNĐ"}
                  </Text>
                </LinearGradient>
              </View>
              <Link href="home/deposit-withdraw">
                <View className="flex-col items-center ml-auto mt-auto">
                  <CashInIcon width={30} height={30} />
                  <Text className="font-medium">Nạp/Rút</Text>
                </View>
              </Link>
            </View>

            <View className="flex-row items-start justify-between mt-3 gap-x-1">
              <Link href="home/transfer">
                <View className="flex-col items-center gap-y-2">
                  <LottieView
                    style={{ flex: 1, width: 30, height: 30 }}
                    source={require("../../../assets/animation/transfer.json")}
                    autoPlay
                    loop
                  />
                  <Text className="font-medium">Chuyển tiền</Text>
                </View>
              </Link>
              <Link href="home/receive-money">
                <View className="flex-col items-center gap-y-2">
                  <LottieView
                    style={{ flex: 1, width: 30, height: 30 }}
                    source={require("../../../assets/animation/transfer.json")}
                    autoPlay
                    loop
                  />
                  <Text className="font-medium">Nhận tiền</Text>
                </View>
              </Link>
              <Link href="home/qr-payment">
                <View className="flex-col items-center gap-y-2">
                  <LottieView
                    style={{ flex: 1, width: 30, height: 30 }}
                    source={require("../../../assets/animation/transfer.json")}
                    autoPlay
                    loop
                  />
                  <Text className="font-medium w-20 text-center">
                    QR Thanh Toán
                  </Text>
                </View>
              </Link>
              <Link href="home/scan-qr">
                <View className="flex-col items-center gap-y-2">
                  <LottieView
                    style={{ flex: 1, width: 30, height: 30 }}
                    source={require("../../../assets/animation/transfer.json")}
                    autoPlay
                    loop
                  />
                  <Text className="font-medium">Quét mã QR</Text>
                </View>
              </Link>
            </View>
          </View>
        </LinearGradient>
      </ScrollView>
      <StatusBar backgroundColor="#000"/>
    </SafeAreaView>
  );
};

export default HomePage;
