import { View, Text } from "react-native";
import React from "react";

const Icon = ({ icon: Icon, label }) => {
  return (
    <View className="flex-col items-center justify-center gap-y-2">
      <Icon width={30} height={30} />
      <Text className="text-center text-xs">{label}</Text>
    </View>
  );
};

export default Icon;
