import {
    View,
    SafeAreaView,
    ScrollView,
  } from "react-native";
  import React from "react";
  import QRCode from "react-native-qrcode-svg";
  import NavigationHeader from "../../../components/NavigationHeader";
  import constants from "../../../constants";
  import { useLocalSearchParams } from "expo-router";
  const { images } = constants;
  const MyQR = () => {
    const {item} = useLocalSearchParams()
    const userData = JSON.parse(item)
    const data={
        type:"transfer",
        email:userData.email
    }
    const dataString = JSON.stringify(data);
    return (
      <SafeAreaView>
          <View className="mt-5 bg-white h-full">
              <NavigationHeader title="QR của tôi" />
              <View className=" bg-white mx-5 p-5 items-center rounded-t-3xl">
                <QRCode
                  value={dataString}
                  size={300}
                />
              </View>
          </View>
      </SafeAreaView>
    );
  };
  
  export default MyQR;
  