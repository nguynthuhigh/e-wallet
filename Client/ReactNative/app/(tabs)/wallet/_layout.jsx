import { View, TouchableOpacity } from "react-native";
import { Stack } from "expo-router";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import BackArrow from "../../../assets/svg/arrow_back.svg";
const StackLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="credit_card"
        options={{
          headerTitle: "Quản lý thẻ",
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
            <TouchableOpacity onPress={() => router.back()}>
              <BackArrow width={24} height={24} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="credit-card-linking"
        options={{
          headerTitle: "Liên kết thẻ tín dụng",
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
            <TouchableOpacity onPress={() => router.back()}>
              <BackArrow width={24} height={24} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="credit-card-details"
        options={{
          headerTitle: "Chi tiết thẻ tín dụng",
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
            <TouchableOpacity onPress={() => router.back()}>
              <BackArrow width={24} height={24} />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack>
  );
};

export default StackLayout;
