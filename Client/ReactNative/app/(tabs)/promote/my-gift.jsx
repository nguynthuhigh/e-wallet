import { SafeAreaView, ScrollView } from "react-native";
import React from "react";
import PromotionCardHorizontal from "../../../components/PromotionCardHorizontal";
import constants from "../../../constants";
const { images } = constants;
const MyGift = () => {
  return (
    <SafeAreaView>
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
  );
};

export default MyGift;
