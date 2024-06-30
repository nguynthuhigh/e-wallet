import {
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import BgBlue from "../../../assets/svg/bg_blue.svg";
import Search from "../../../assets/svg/search.svg";
import Coupons from "../../../assets/svg/coupons.svg";
import Gift from "../../../assets/svg/gift.svg";
import ArrowCircleRight from "../../../assets/svg/ArrowCircleRightOutline.svg";
import constants from "../../../constants";
const { images } = constants;
import ListPromotion from "../../../components/ListPromotion";

const PromotionPage = () => {
  const [displayText, setDisplayText] = useState("");
  useEffect(() => {
    const text1 = "Tìm kiếm ưu đãi...";
    const text2 = "Tìm kiếm thẻ quà tặng";
    let forward = true;
    let index = 0;
    let text = text1;
    const updatePlaceholder = () => {
      if (forward) {
        setDisplayText((prev) => prev + text[index]);
        index++;
        if (index == text.length) {
          forward = false;
          setTimeout(updatePlaceholder, 1000);
          return;
        }
      } else {
        setDisplayText((prev) => prev.slice(0, -1));
        index--;
        if (index == 0) {
          forward = true;
          text = text === text1 ? text2 : text1;
          setTimeout(updatePlaceholder, 1000);
          return;
        }
      }
      setTimeout(updatePlaceholder, 150);
    };
    const timeoutId = setTimeout(updatePlaceholder, 150);
    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <View className="flex-1">
      <BgBlue className="absolute inset-0" />
      <SafeAreaView className="absolute top-16 left-0 right-0">
        <View className="mx-4 px-4 bg-white h-10 rounded-3xl flex-row items-center">
          <Search width={24} height={24} />
          <TextInput
            className="flex-1 h-full ml-2"
            maxLength={30}
            placeholder={displayText}
          />
        </View>
        <ScrollView>
          <View className=" flex-1 h-20 px-4 flex-row mt-5">
            <View className="w-[50%] bg-white flex-1 rounded-3xl shadow-md">
              <View className="flex-row items-center flex-1 px-5">
                <Coupons width={40} height={40} />
                <View className="flex-col ml-3 justify-start">
                  <Text className="font-semibold text-sm">Nhập mã</Text>
                  <Text className=" text-xs text-[#757575]">Mã ưu đãi</Text>
                </View>
              </View>
            </View>
            <View className="w-[50%] bg-white flex-1 rounded-3xl shadow-md">
              <View className="flex-row items-center flex-1 px-5">
                <Gift width={40} height={40} />
                <View className="flex-col ml-3 justify-start">
                  <Text className="font-semibold text-sm">Quà của tôi</Text>
                  <Text className=" text-xs text-[#757575]">Thẻ quà tặng</Text>
                </View>
              </View>
            </View>

            <View className="absolute top-1/2 left-0 right-0 items-center">
              <View className="rotate-90 border-t h-[1px] border-[#d3d3d3] w-10 border border-dashed"></View>
            </View>
          </View>
          <ListPromotion
            category="Ưu đãi dành cho Nhân"
            img={images.saleOff}
            avatar={images.airlines}
            title="Thanh toán vé xe bằng pressPay"
            discount="Giảm 20%"
            content="Cho lần đầu mua vé"
          />
          <ListPromotion
            category="Ưu đãi dành cho Nhân"
            img={images.saleOff}
            avatar={images.airlines}
            title="Thanh toán vé xe bằng pressPay"
            discount="Giảm 20%"
            content="Cho lần đầu mua vé"
          />
          <ListPromotion
            category="Ưu đãi dành cho Nhân"
            img={images.saleOff}
            avatar={images.airlines}
            title="Thanh toán vé xe bằng pressPay"
            discount="Giảm 20%"
            content="Cho lần đầu mua vé"
          />
        </ScrollView>
        <StatusBar backgroundColor="#fff" />
      </SafeAreaView>
    </View>
  );
};

export default PromotionPage;
