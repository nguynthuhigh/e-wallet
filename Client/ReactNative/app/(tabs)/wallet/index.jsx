import { Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import Item from "../../../components/Item";
import Card from "../../../assets/svg/card.svg";
import Arrow_More from "../../../assets/svg/arrow_more.svg";
import { useEffect,useState } from "react";
import authAPI from "../../api/auth.api";
const Wallet = () => {
  const handleLogout = () => {
    AsyncStorage.removeItem("AccessToken");
    router.replace("/sign-in");
  };
  const [userData, setUserData] = useState("");
  const [walletData, setWalletData] = useState("");
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await authAPI.getProfile();
        setUserData(user.data.userData);
        setWalletData(user.data.walletData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUser();
  }, []);
  return (
    <SafeAreaView>
      <LinearGradient
        className="h-full w-full"
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={["#0094FF", "#F2F2F2"]}
        locations={[0, 0.3]}
      >
        <ScrollView>
          <View className=" p-4 w-full">
            <View>
              <View className="w-full mt-12 drop-shadow-xl">
                <View className="w-fit flex items-center top-[-30] justify-center z-10 mx-auto">
                  <View className=" bg-white rounded-full w-[80px] h-[80px]" />
                  <Image
                    className="rounded-full absolute"
                    style={{ width: 70, height: 70 }}
                    source={{ uri: "https://reactjs.org/logo-og.png" }}
                  />
                </View>
                <View className="w-full absolute rounded-xl py-4 bg-white flex-col items-center">
                  <View className="w-full mt-9 ">
                    <Text className="w-fit font-bold text-center text-[20px]">
                      {userData?.full_name}
                    </Text>
                    <View className=" mt-2 mx-auto flex-row">
                      <Text className=" text-[15px]">{userData?.email}</Text>
                      
                    </View>
                  </View>
                </View>
              </View>
              <View className=" mt-10">
                <Text className="font-bold text-[20px] my-4">Cài đặt</Text>
                <View className="w-full flex-col space-y-4 rounded-t-xl bg-white p-4">
                  <TouchableOpacity activeOpacity={0.7}>
                    <View className="flex-row items-center w-full">
                      <Ionicons name="person" size={24} width="15%" />
                      <View className="flex-row items-center justify-between w-[85%]">
                        <Text className="font-bold text-sm">
                          Thông tin tài khoản
                        </Text>
                        <Arrow_More></Arrow_More>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => router.navigate("/wallet/credit_card")}
                  >
                    <View className="flex-row items-center w-full">
                      <View className="w-[15%]">
                        <Card />
                      </View>
                      <View className="flex-row items-center justify-between w-[85%]">
                        <Text className="font-bold text-sm">Quản lý thẻ</Text>
                        <Arrow_More></Arrow_More>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity activeOpacity={0.7}>
                    <View className="flex-row items-center w-full">
                      <Ionicons name="settings" size={24} width="15%" />
                      <View className="flex-row items-center justify-between w-[85%]">
                        <Text className="font-bold text-sm">
                          Quản lý bảo mật
                        </Text>
                        <Arrow_More></Arrow_More>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
                <Text className="font-bold text-[20px] my-4">Tiện ích</Text>
                <View className="w-full rounded-t-xl bg-white p-4">
                  <Item></Item>
                  <TouchableOpacity onPress={handleLogout}>
                    <Text>Logout</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Wallet;
