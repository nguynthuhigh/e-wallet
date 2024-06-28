import { View, Text, Image } from "react-native";
import React from "react";

const User = ({ name, img }) => {
  return (
    <View className="flex-col justify-center items-center">
      <Image source={img} width={50} height={50} />
      <Text className=" text-center text-sm">{name}</Text>
    </View>
  );
};

export default User;
