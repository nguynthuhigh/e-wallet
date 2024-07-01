import { View, Text, ScrollView } from "react-native";
import React from "react";
import { Link } from "expo-router";
import PromotionCard from "./PromotionCard";
import ArrowCircleRight from "../assets/svg/ArrowCircleRightOutline.svg";
import CheckCircle from "../assets/svg/CheckCircleOutline.svg";
const ListPromotion = ({ category, img, avatar, title, discount, content }) => {
  return (
    <View className="px-4 mt-5 flex-1">
      <Link href="/promote/categorized-promotions">
        <View className="flex-1 flex-row gap-x-3 items-center mb-5">
          <Text className="text-2xl font-semibold">{category}</Text>
          <ArrowCircleRight width="24" height="24" />
        </View>
      </Link>
      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 4 }}
        className="flex-1"
        showsHorizontalScrollIndicator={false}
      >
        <View className="mx-2">
          <PromotionCard
            img={img}
            avatar={avatar}
            title={title}
            discount={discount}
            content={content}
          />
        </View>
        <View className="mx-2">
          <PromotionCard
            img={img}
            avatar={avatar}
            title={title}
            discount={discount}
            content={content}
          />
        </View>
        <View className="mx-2">
          <PromotionCard
            img={img}
            avatar={avatar}
            title={title}
            discount={discount}
            content={content}
          />
        </View>
        <View className="mx-2">
          <PromotionCard
            img={img}
            avatar={avatar}
            title={title}
            discount={discount}
            content={content}
          />
        </View>
        <View className="mx-2">
          <PromotionCard
            img={img}
            avatar={avatar}
            title={title}
            discount={discount}
            content={content}
          />
        </View>
      </ScrollView>
      {/* <View className=" absolute flex-1 h-10 w-64 px-6 py-2 bg-[#0D99FF] rounded-3xl">
        <View className="flex-1 flex-row items-center">
          <CheckCircle width={24} height={24} />
          <Text className=" text-sm text-white ml-3">
            Đã thêm vào Quà của tôi
          </Text>
        </View>
      </View> */}
    </View>
  );
};

export default ListPromotion;
