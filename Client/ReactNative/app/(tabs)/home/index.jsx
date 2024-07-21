import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import LottieView from "lottie-react-native";
import constants from "../../../constants";
import EyeIcon from "../../../assets/svg/eye.svg";
import EyeClosedIcon from "../../../assets/svg/eyeClosed.svg";
import SearchIcon from "../../../assets/svg/search.svg";
import NotificationIcon from "../../../assets/svg/notification.svg";
import CashInIcon from "../../../assets/svg/cashin.svg";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
const { images } = constants;
import authAPI from "../../api/auth.api";
const HomePage = () => {
  const [isHide, setIsHide] = useState(false);
  const [userData, setUserData] = useState("");
  const [walletData, setWalletData] = useState("");

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await authAPI.getProfile();
        setUserData(user.data.userData);
        setWalletData(user.data.walletData);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView className="bg-white">
        <LinearGradient
          className="rounded-b-[50px] p-[3px] pt-0 w-full mx-auto"
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          colors={["#FFFFFF", "#0094FF"]}
        >
          <View className="bg-white p-5 rounded-b-[50px]">
            <View className="flex-row w-full">
              <View className="flex-row justify-center items-center">
                <View className="bg-[#EFEEEE] rounded-full absolute w-[46px] h-[46px]"></View>
                <Image className="w-[41px] h-[41px]" source={images.si} />
              </View>
              <View className="ml-2">
                <Text className="text-[12px]">Chào buổi tối</Text>
                <Text className="text-[14px] font-bold">
                  {isLoading ? "Loading..." : userData?.email}
                </Text>
              </View>
              <View className="flex-row ml-auto justify-between">
                <SearchIcon width={30} height={30} />
                <View className="w-[10px]"></View>
                <NotificationIcon width={30} height={30} />
              </View>
            </View>
            <View className="w-[90%] h-[0.5px] mt-3 mx-auto bg-[#F2F2F2]"></View>
            <View className="flex-row w-full">
              <View className="w-[80%]">
                <View className="w-full flex-row items-center my-2">
                  <Text className="text-[14px] mr-2 font-semibold">Số dư</Text>
                  <TouchableOpacity
                    onPress={() => {
                      setIsHide(!isHide);
                    }}
                  >
                    {isHide ? (
                      <EyeClosedIcon width={20} height={20} />
                    ) : (
                      <EyeIcon width={20} height={20} />
                    )}
                  </TouchableOpacity>
                </View>
                <LinearGradient
                  className="rounded-full w-full"
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  colors={["#0094FF", "#FFFFFF"]}
                >
                  <Text className="text-[24px] ml-3 font-semibold text-white">
                    {isLoading
                      ? "...Loading"
                      : `${
                          isHide
                            ? "*******"
                            : formatCurrency(
                                walletData?.currencies[0]?.balance,
                                "VND"
                              )
                        }`}
                  </Text>
                </LinearGradient>
              </View>
              <Link href="home/deposit-withdrawl">
                <View className="flex-col items-center ml-auto mt-auto">
                  <CashInIcon width={30} height={30} />
                  <Text className="font-medium">Nạp/Rút</Text>
                </View>
              </Link>
            </View>

            <View className="flex-row items-start justify-between mt-3 gap-x-1">
              <TouchableOpacity
                onPress={() => {
                  router.push({
                    pathname: "home/list-currencies",
                    params: { item: JSON.stringify(walletData) },
                  });
                }}
              >
                <View className="flex-col items-center gap-y-2">
                  <LottieView
                    style={{ flex: 1, width: 30, height: 30 }}
                    source={require("../../../assets/animation/transfer.json")}
                    autoPlay
                    loop
                  />
                  <Text className="font-medium">Chuyển tiền</Text>
                </View>
              </TouchableOpacity>

              <Link href="home/scan-qr">
                <View className="flex-col items-center gap-y-2">
                  <Text className="font-medium">Quét mã QR</Text>
                </View>
              </Link>
            </View>
          </View>
        </LinearGradient>
        <View className="p-6">
          <Text className="text-black font-iBold text-[20px]">Tài sản</Text>
          {isLoading ? (
            <Text>...Loading</Text>
          ) : (
            <View>
              <ListCurrencies
                item={walletData?.currencies[0]}
                name="Vietnamese Dong"
                symbol="VND"
              ></ListCurrencies>
              <ListCurrencies
                item={walletData?.currencies[1]}
                name="US DOllar"
                symbol="USD"
              ></ListCurrencies>
              <ListCurrencies
                item={walletData?.currencies[2]}
                name="Ethereum"
                symbol="ETH"
              ></ListCurrencies>
            </View>
          )}
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#000" />
    </SafeAreaView>
  );
};
const formatCurrency = (balance, currency) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
  });
  return formatter.format(balance);
};
const ListCurrencies = ({ item, name, symbol }) => {
  const data = {
    item,
    name,
    symbol,
  };
  return (
    <TouchableOpacity
      onPress={() => {
        router.push({
          pathname: "home/details-currency",
          params: { item: JSON.stringify(data) },
        });
      }}
    >
      <View className="py-2 flex-row">
        <View>
          <Image className="w-[41px] h-[41px] mx-2" source={images.si} />
        </View>
        <View>
          <Text className="text-[#868686] font-iRegular text-[15px]">
            {name}
          </Text>
          <Text className="text-black font-iBold text-[18px]">
            {formatCurrency(item?.balance, symbol)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default HomePage;
