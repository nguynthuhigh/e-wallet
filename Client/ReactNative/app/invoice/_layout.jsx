import { View, Text, TouchableOpacity, Image } from "react-native";
import { Stack } from "expo-router";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import BackArrow from "../../assets/svg/arrow_back.svg";
const StackLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Hóa đơn vé máy bay",
          headerBackground: () => (
            <LinearGradient
              style={{ flex: 1 }}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              colors={["#0094FF", "#F2F2F2"]}
            />
          ),
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.push("/home")}>
              <View className=" w-8 h-8 bg-[#55424296] rounded-full items-center justify-center">
                <BackArrow width={12} height={12} />
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen name="bs-promotion" options={{ headerShown: false }} />
    </Stack>
  );
};

export default StackLayout;
