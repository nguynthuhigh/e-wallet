import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  Button,
} from "react-native";
import React, { useState } from "react";
import EyeOpen from "../../assets/svg/eye.svg";
import EyeClosed from "../../assets/svg/eyeClosed.svg";
import Wallet from "../../components/Wallet";
import { wallet } from "../../dummy-data/data";
import constants from "../../constants";
import { router } from "expo-router";
const { images } = constants;
const Invoice = () => {
  const [isHide, setIsHide] = useState(false);
  const [selectedWalletIndex, setSelectedWalletIndex] = useState(0);
  return (
    <SafeAreaView>
      <ScrollView className="p-4">
        <View className="mb-4">
          <View className="flex-row items-center space-x-2 mb-4">
            <Text className=" text-base font-semibold">Tài khoản</Text>
            <View>
              <TouchableOpacity
                onPress={() => setIsHide(!isHide)}
                activeOpacity={0.7}
              >
                {isHide ? (
                  <EyeClosed width={24} height={24} />
                ) : (
                  <EyeOpen width={24} height={24} />
                )}
              </TouchableOpacity>
            </View>
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
        <View className="mb-4">
          <Text className="text-lg text-[#868686]">CHI TIẾT GIAO DỊCH</Text>
          <View className="border border-[#0D99FF] rounded-2xl px-3 py-2 mt-2">
            <View>
              <Text className="text-lg font-semibold">Vietnam Airlines</Text>
              <View className="mb-4 mt-2 space-y-2">
                <View className="border-b-[0.5px] border-[#86868646]">
                  <View className="flex-row items-center justify-between mb-2">
                    <Text className="text-sm font-semibold text-[#868686]">
                      Mã giao dịch
                    </Text>
                    <Text className="text-sm font-semibold">52050137103</Text>
                  </View>
                </View>
                <View className="border-b-[0.5px]  border-[#86868646]">
                  <View className="flex-row items-center justify-between mb-2">
                    <Text className="text-sm font-semibold text-[#868686]">
                      Trạng thái
                    </Text>
                    <Text className="text-sm font-semibold">
                      Chờ thanh toán
                    </Text>
                  </View>
                </View>
                <View className="border-b-[0.5px]  border-[#86868646]">
                  <View className="flex-row items-center justify-between mb-2">
                    <Text className="text-sm font-semibold text-[#868686]">
                      Loại giao dịch
                    </Text>
                    <Text className="text-sm font-semibold">Thanh toán</Text>
                  </View>
                </View>
                <View className="border-b-[0.5px]  border-[#86868646]">
                  <View className="flex-row items-center justify-between mb-2">
                    <Text className="text-sm font-semibold text-[#868686]">
                      Mô tả
                    </Text>
                    <Text className="text-sm font-semibold">
                      Thanh toán vé máy bay
                    </Text>
                  </View>
                </View>
                <View className="border-b-[0.5px]  border-[#86868646]">
                  <View className="flex-row items-center justify-between mb-2">
                    <Text className="text-sm font-semibold text-[#868686]">
                      Số tiền
                    </Text>
                    <Text className="text-sm font-semibold">5.000.000đ</Text>
                  </View>
                </View>
              </View>
              <Text className="text-lg font-semibold">ƯU ĐÃI</Text>
              <View className="mt-2 mb-4">
                <Text className=" text-sm text-[#868686]">
                  Chọn thẻ quà tặng hoặc nhập mã khuyến mãi
                </Text>
                <TouchableOpacity
                  className="py-3 px-2 border rounded-xl border-[#0D99FF] border-dashed mt-2"
                  activeOpacity={0.7}
                >
                  <View className="flex-row items-center space-x-4 justify-center">
                    <Image source={images.plus} />
                    <Text className="text-sm font-semibold text-[#0D99FF]">
                      Chọn thẻ quà tặng
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View className="w-full h-[1px] border border-[#8686863f] mb-4"></View>
              <View className="flex-row items-center justify-between mb-2">
                <Text className="text-sm font-semibold text-[#868686]">
                  Tổng tiền
                </Text>
                <Text className="text-sm font-semibold">5.000.000đ</Text>
              </View>
            </View>
          </View>
        </View>
        <View className="flex-row items-center justify-between">
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => router.push("/home")}
            className=" py-4 px-8 border border-[#0D99FF] rounded-xl"
          >
            <Text className="text-[#0D99FF] font-semibold">Quay lại</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            className=" py-4 px-8 bg-[#0D99FF] rounded-xl"
          >
            <Text className="font-semibold text-[#fff]">Thanh toán</Text>
          </TouchableOpacity>
        </View>
        <Button
          title="Present Modal"
          onPress={() => router.push("/invoice/bs-promotion")}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Invoice;
