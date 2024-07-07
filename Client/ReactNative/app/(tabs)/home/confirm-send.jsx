import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView
} from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { Message } from "../../../dummy-data/data.js";
import BackArrow from "../../../assets/svg/arrow_back.svg";
import BlueBg from "../../../assets/svg/bg_blue.svg";
import { Link, router } from "expo-router";

const Wallet = ()=>{
  return(
    <View>
          
    </View>
  )
}

const ConfirmSend = () => {
  const [price, setPrice] = useState(0);
  const [content, setContent] = useState("");
  return (
    <SafeAreaView>
      <BlueBg />
      <SafeAreaView className="absolute top-7">
        <View className="flex-row items-center px-5 gap-x-2 mb-4">
          <TouchableOpacity onPress={() => router.back()}>
            <BackArrow width={30} height={26.5} />
          </TouchableOpacity>
          <Image
            className="rounded-full"
            style={{ width: 30, height: 30 }}
            source={{ uri: "https://reactjs.org/logo-og.png" }}
          />
          <View>
            <Text className=" font-bold text-sm text-white">
              Nguyễn Minh Nguyên
            </Text>
            <Text className="text-xs text-white"> 036988962x</Text>
          </View>
        </View>
        <ScrollView className="px-5">

          <View className="flex-1 mx-auto bg-white rounded-xl shadow-2xl">
            <Wallet></Wallet>
            <View className="mx-auto my-5">
              <TextInput
                onChangeText={(newText) => setPrice(newText)}
                keyboardType={"number-pad"}
                autoFocus={true}
                value={price}
                className="w-fit h-[50px] text-[50px] font-bold"
                placeholder="0đ"
              ></TextInput>
            </View>
            <View className="flex-1 px-4">
              <TextInput
                onChangeText={(newText) => setContent(newText)}
                multiline
                value={content}
                className="w-full h-[100px] border-[1px] border-[#C9C9C9] rounded-md p-4 text-[15px]"
                placeholder="Nhập hoặc chọn bên dưới"
              ></TextInput>
            </View>
            <View className="p-4 flex-row flex-wrap">
              {Message.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    setContent(item.message);
                  }}
                >
                  <View
                    style={{
                      alignSelf: "center",
                      padding: 8,
                      backgroundColor: "#F2F2F2",
                      borderRadius: 120,
                      marginRight: 10,
                      marginBottom: 10,
                    }}
                  >
                    <Text>{item.message}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                setPrice("10000");
              }}
            >
              <View
                className="border-[1px] px-4 py-2 mt-4  rounded-xl border-[#0D99FF] bg-white"
                style={{ alignSelf: "center" }}
              >
                <Text className="text-[#0D99FF]">10.000</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View className="bg-[#0D99FF] rounded-xl p-2 mt-4">
            <Text className="mx-auto text-white font-semibold py-2 text-[20px] ">
              Chuyển tiền
            </Text>
          </View>

        </ScrollView>
        <StatusBar backgroundColor="#fff" style="inverted" />
   
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default ConfirmSend;
