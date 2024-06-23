import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Link, useNavigation } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { Message } from "../../../dummy-data/data.js";
const Transfer = () => {
  const navigation = useNavigation();
  const [price, setPrice] = useState(0);
  const [content, setContent] = useState("");
  return (
    <SafeAreaView>
      <ScrollView>
          <View>
            <View className="w-[95%] mx-auto bg-white rounded-md">
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
              <View className="mx-auto w-[95%]">
                <TextInput
                  onChangeText={(newText) => setContent(newText)}
                  multiline
                  value={content}
                  className="w-[100%] h-[100px] border-[1px] border-[#C9C9C9] rounded-md p-4 text-[15px]"
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
                  className="border-[1px] px-4 py-2  rounded-xl border-[#0D99FF] bg-white"
                  style={{ alignSelf: "center" }}
                >
                  <Text className="text-[#0D99FF]">10.000</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View className="p-4 ">
              <TouchableOpacity onPress={() => {}}>
                <View className="bg-[#0D99FF] rounded-xl p-2">
                  <Text className="mx-auto text-white font-semibold py-2 text-[20px] ">
                    Chuyển tiền
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
      </ScrollView>
      <StatusBar backgroundColor="#fff" style="inverted" />
    </SafeAreaView>
  );
};

export default Transfer;
