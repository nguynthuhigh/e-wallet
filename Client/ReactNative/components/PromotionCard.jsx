import { View, Text, Image, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import React from "react";

const PromotionCard = ({ img, avatar, title, discount, content }) => {
  return (
    <Link href="/promote/promotional-details">
      <View className="w-48 h-[350px] bg-white rounded-3xl">
        <Image
          source={img}
          resizeMode="cover"
          className="w-full h-[55%] rounded-3xl"
        />
        <View className="px-4 mt-3 flex-row items-center">
          <Image source={avatar} width={24} height={24} />
          <Text className=" text-xs text-[#8c8c8c] ml-2 flex-1">{title}</Text>
        </View>
        <View className=" px-4 mt-2">
          <Text className="text-[#0D99FF] text-xl">{discount}</Text>
          <Text className="font-semibold text-sm text-[#8c8c8c]">
            {content}
          </Text>
        </View>
        <View className=" px-4 items-end">
          <TouchableOpacity className=" w-24 h-9 my-3 border border-[#0D99FF] items-center justify-center px-2 rounded-xl">
            <Text className="text-xs text-[#0D99FF]">Thu thập</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Link>
  );
};

export default PromotionCard;
