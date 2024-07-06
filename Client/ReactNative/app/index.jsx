import React from "react";
import { Redirect, router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem("AccessToken");
    return token;
  } catch (error) {
    console.log(error);
  }
};

const Welcome = () => {
  return <Redirect href="/home" />;
};

export default Welcome;
