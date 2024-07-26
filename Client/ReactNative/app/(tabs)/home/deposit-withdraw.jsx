import React, { useState } from "react";
import {
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Keyboard,
} from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import Wallet from "../../../components/Wallet";
import { wallet } from "../../../dummy-data/data";
import CashIn from "../../../assets/svg/cashin.svg";
import CashOut from "../../../assets/svg/cashout.svg";
import EyeOpen from "../../../assets/svg/eye.svg";
import EyeClosed from "../../../assets/svg/eyeClosed.svg";
const DepositWithdraw = () => {
  const [isHide, setIsHide] = useState(false);
  const [selectedWalletIndex, setSelectedWalletIndex] = useState(0);
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "Nạp tiền", icon: <CashIn /> },
    { key: "second", title: "Rút tiền", icon: <CashOut /> },
  ]);
  const vndValue = [
    "10,000",
    "20,000",
    "30,000",
    "50,000",
    "100,000",
    "200,000",
    "500,000",
  ];
  const usdValue = ["1", "2", "5", "10", "20", "50", "100"];
  const FirstRoute = () => (
    <View className="flex-1 px-4 bg-white mt-2">
      <View className="my-4">
        <View className="flex-row items-center space-x-2 mb-2">
          <Text className=" text-base font-semibold">Nạp tiền</Text>
          <View>
            <TouchableOpacity
              onPress={() => setIsHide(!isHide)}
              activeOpacity={0.7}
            >
              {isHide ? (
                <EyeClosed width={24} height={24} />
              ) : (
                <EyeOpen width={24} height={24} />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView
          horizontal={true}
          contentContainerStyle={{
            display: "flex",
            flexDirection: "row",
          }}
          showsHorizontalScrollIndicator={false}
        >
          {wallet.map((value, index) => (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setSelectedWalletIndex(index)}
              key={index}
            >
              <Wallet
                logo={value.img}
                currency={value.currency}
                value={value.value}
                isSelected={selectedWalletIndex === index}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View>
        <Text>Số tiền cần nạp</Text>
        <TextInput
          className="px-5 py-3 mt-2 border-2 border-[#868686a0] rounded-lg focus:outline-none focus:ring focus:border-[#0D99FF]"
          keyboardType="numeric"
          placeholder="0đ"
        />
        <View>
          <TouchableOpacity></TouchableOpacity>
        </View>
      </View>
    </View>
  );

  const SecondRoute = () => <View></View>;

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  return (
    <View className="flex-1">
      <View
        style={{
          height: "100%",
        }}
      >
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width, height: layout.height }}
          renderTabBar={(props) => (
            <TabBar
              {...props}
              indicatorStyle={{
                backgroundColor: "#0D99FF",
                height: 4,
                borderRadius: 12,
                width: 104,
                marginLeft: layout.width / 4 - 50,
              }}
              renderLabel={({ route }) => (
                <View className="flex-row items-center space-x-3">
                  {route.icon}
                  <Text style={{ fontSize: 16, textAlign: "center" }}>
                    {route.title}
                  </Text>
                </View>
              )}
              style={{ backgroundColor: "white" }}
              tabStyle={{ width: layout.width / 2 }}
            />
          )}
        />
      </View>
    </View>
  );
};

export default DepositWithdraw;
