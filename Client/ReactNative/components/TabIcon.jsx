import { View, Text, Image } from "react-native";
import React from "react";

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="flex-col items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        style={{ tintColor: color }}
        className="w-6 h-6"
      />
      <Text
        className={` w-20 text-xs ${
          focused ? " font-semibold" : " font-normal"
        } text-center`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};

export default TabIcon;
