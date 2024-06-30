import { View, Text, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import React from "react";

const PromotionCardHorizontal = ({ img, avatar, title, discount, content }) => {
  const router = useRouter();

  const handleCardPress = () => {
    router.push('/promote/promotional-details');
  };

  const handleCollectPress = (e) => {
    e.stopPropagation();
  };

  return (
    <View className="flex-1 mx-5 bg-white mt-4 rounded-2xl px-2 py-2">
      <TouchableOpacity 
        onPress={handleCardPress} 
        className="flex-1 flex-row justify-center items-center"
      >
        <Image source={img} style={{ width: 116, height: 116 }} />
        <View className="flex-1 ml-3 flex-col justify-between">
          <View className="flex-row items-center">
            <Image source={avatar} />
            <Text className="text-xs text-[#8C8C8C] font-semibold ml-2">
              {title}
            </Text>
          </View>
          <Text className="text-[#0D99FF] text-sm font-bold my-1">
            {discount}
          </Text>
          <Text className="text-[10px] text-[#8c8c8c]">{content}</Text>
          <View className="flex-row justify-end">
            <TouchableOpacity 
              onPress={handleCollectPress}
              className="w-24 h-9 border border-[#0D99FF] items-center justify-center px-2 rounded-xl mt-2"
            >
              <Text className="text-xs text-[#0D99FF]">Thu thập</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PromotionCardHorizontal;
