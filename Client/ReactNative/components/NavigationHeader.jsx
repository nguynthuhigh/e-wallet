import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "expo-router";
import BackArrow from "../assets/svg/arrow_back.svg";

const NavigationHeader = ({ title }) => {
  const navigation = useNavigation();

  return (
    <View className="flex-row items-center px-5 my-5">
      <TouchableOpacity onPress={() => navigation.goBack()} className="w-1/4">
        <BackArrow width={30} height={26.5} />
      </TouchableOpacity>
      <View className="flex-1 items-center">
        <Text className="font-bold color-white text-lg">{title}</Text>
      </View>
      <View className="w-1/4" />
      <StatusBar backgroundColor="#fff" />
    </View>
  );
};

export default NavigationHeader;
