import React, { useRef, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Button,
  TouchableOpacity,
  Animated,
  Image,
} from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";
import BackArrow from "../../../../assets/svg/arrow_back.svg";
import constants from "../../../../constants";
const { images } = constants;
const ScanQR = () => {
  const [permission, requestPermission] = useCameraPermissions();

  const borderAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(borderAnimation, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: false,
      })
    ).start();
  }, [borderAnimation]);

  const borderColor = borderAnimation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ["#0094FF", "#00FF94", "#0094FF"],
  });

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <SafeAreaView className="flex-1 justify-center">
        <Text className="text-center">
          We need your permission to show the camera
        </Text>
        <Button title="Grant permission" onPress={requestPermission} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1">
      <CameraView
        className="flex-1"
        barcodeScannerSettings={{
          barcodeTypes: ["qr"],
        }}
      >
        <View className="flex-row justify-between px-5 py-4 mb-5 bg-[#161622]/5">
          <TouchableOpacity onPress={() => router.push("/home")}>
            <BackArrow width={30} height={26.5} />
          </TouchableOpacity>
          <View className="flex-1 flex-row justify-center">
            <Text className="font-semibold text-lg text-white">Scan QR</Text>
          </View>
        </View>
        <View className="flex-row px-5 justify-center">
          <Animated.View
            style={{
              borderColor: borderColor,
              borderWidth: 2,
              borderRadius: 10,
            }}
            className="mx-auto w-full py-2 flex-row items-center justify-center"
          >
            <Text className="font-semibold text-lg text-white">Quét mã QR</Text>
          </Animated.View>
        </View>
        <View className="flex-1 flex-col px-5 justify-center items-center">
          <View className="flex-row justify-between items-center w-full mb-60">
            <View className=" w-10 h-10 border-[#fff] border-[5px]  border-b-0 border-r-0"></View>
            <View className=" w-10 h-10 border-[#fff] border-[5px] border-b-0 border-l-0"></View>
          </View>
          <View className="flex-row justify-between items-center w-full">
            <View className=" w-10 h-10 border-[#fff] border-[5px]  border-t-0 border-r-0"></View>
            <View className=" w-10 h-10 border-[#fff] border-[5px] border-t-0 border-l-0"></View>
          </View>
        </View>
      </CameraView>

      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

export default ScanQR;
