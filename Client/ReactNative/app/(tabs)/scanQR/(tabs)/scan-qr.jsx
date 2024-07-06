import React, { useRef, useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Button,
  TouchableOpacity,
  Animated,
} from "react-native";
import * as Linking from "expo-linking";
import { CameraView, Camera } from "expo-camera";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";
import BackArrow from "../../../../assets/svg/arrow_back.svg";
export default function ScanQR() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const borderAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const getCameraPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    };
    getCameraPermissions();
  }, []);
  useEffect(() => {
    Animated.loop(
      Animated.timing(borderAnimation, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: false,
      })
    ).start();
  }, [borderAnimation]);
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    console.log(
      `Bar code with type ${type} and data ${Linking.openURL(
        `${data}`
      )}  has been scanned!`
    );
  };
  const borderColor = borderAnimation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ["#0094FF", "#00FF94", "#0094FF"],
  });
  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <SafeAreaView className="flex-1">
      <CameraView
        className="flex-1"
        onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
        barcodeScannerSettings={{
          barcodeTypes: ["qr", "pdf417"],
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
        {scanned && (
          <Button
            title={"Tap to Scan Again"}
            onPress={() => setScanned(false)}
          />
        )}
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
}
