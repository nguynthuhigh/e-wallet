import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import BgBlue from "../../../assets/svg/bg_blue.svg";
import NavigationHeader from "../../../components/NavigationHeader";
import constants from "../../../constants";
const { images } = constants;
import PromotionCardHorizontal from "../../../components/PromotionCardHorizontal";

const CategorizedPromotions = () => {
  return (
    <View className="flex-1">
      <BgBlue className="absolute inset-0" />
      <SafeAreaView className="absolute top-7 left-0 right-0">
        <NavigationHeader title="Siêu Deal tháng 6" />
        <ScrollView>
          <PromotionCardHorizontal
            img={images.plane}
            avatar={images.airlines}
            title="Thanh toán máy bay bằng pressPay"
            discount="Giảm 20%"
            content="Cho thanh toán bằng pressPay"
          />
          <PromotionCardHorizontal
            img={images.plane}
            avatar={images.airlines}
            title="Thanh toán máy bay bằng pressPay"
            discount="Giảm 20%"
            content="Cho thanh toán bằng pressPay"
          />
          <PromotionCardHorizontal
            img={images.plane}
            avatar={images.airlines}
            title="Thanh toán máy bay bằng pressPay"
            discount="Giảm 20%"
            content="Cho thanh toán bằng pressPay"
          />
          <PromotionCardHorizontal
            img={images.plane}
            avatar={images.airlines}
            title="Thanh toán máy bay bằng pressPay"
            discount="Giảm 20%"
            content="Cho thanh toán bằng pressPay"
          />
          <PromotionCardHorizontal
            img={images.plane}
            avatar={images.airlines}
            title="Thanh toán máy bay bằng pressPay"
            discount="Giảm 20%"
            content="Cho thanh toán bằng pressPay"
          />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default CategorizedPromotions;
