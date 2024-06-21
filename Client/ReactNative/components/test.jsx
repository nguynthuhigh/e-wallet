import { View, Text, Image } from "react-native";
import React from "react";

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View
      className={`h-full w-full flex-col items-center justify-center gap-y-2 ${
        focused
          ? "border-[#0D99FF] border-t-[3px]"
          : "border-transparent border-t-0"
      } transition-all`}
    >
      <Image
        source={icon}
        resizeMode="contain"
        style={{ tintColor: color }}
        className="w-6 h-6"
      />
      <Text
        className={` text-xs ${
          focused ? " font-semibold" : " font-nMedium"
        }`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};

export default TabIcon;
