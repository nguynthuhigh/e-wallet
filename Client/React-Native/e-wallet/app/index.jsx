import { Text } from "react-native";
import React from "react";
import { Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const Welcome = () => {
  return <Redirect href="/home" />;
};

export default Welcome;
