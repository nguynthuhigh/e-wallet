import { Stack, router } from "expo-router";
import React from "react";
import { TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import BackArrow from "../../../assets/svg/arrow_back.svg";
const StackLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="categorized-promotions"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="promotional-details"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="my-gift"
        options={{
          headerTitle: "Quà của tôi",
          headerTintColor: "white",
          headerBackground: () => (
            <LinearGradient
              style={{ flex: 1 }}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              colors={["#0094FF", "#F2F2F2"]}
            />
          ),
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.push("/promote")}>
              <BackArrow width={24} height={24} />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack>
  );
};
export default StackLayout;
