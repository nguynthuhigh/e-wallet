import React from "react";
import { StatusBar } from "expo-status-bar";
import { Tabs } from "expo-router";
import LottieView from "lottie-react-native";
import { View, Text } from "react-native";
import constants from "../../constants";
const { icons } = constants;
import TabIcon from "../../components/TabIcon";

const ScanTabIcon = ({ focused }) => {
  return (
    <View className="relative items-center">
      <View className="absolute -top-12 w-[75px] h-[75px] items-center bg-white overflow-hidden rounded-full">
        <LottieView
          style={{ flex: 1, width: 60, height: 60 }}
          source={require("../../assets/animation/qr_scan.json")}
          autoPlay
          loop
        />
      </View>
      <Text
        className={`${
          focused ? "text-[#0094FF]" : "text-[#8C8C8C]"
        } text-xs mt-8`}
      >
        Quét mọi QR
      </Text>
    </View>
  );
};

const TabLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#0D99FF",
          tabBarInactiveTintColor: "#8C8C8C",
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#fff",
            borderTopWidth: 1,
            height: 84,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home}
                color={color}
                name="Home"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="promote"
          options={{
            title: "Ưu đãi",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.promotion}
                color={color}
                name="Ưu đãi"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="scanQR"
          options={{
            title: "Quét mọi QR",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <ScanTabIcon focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="transaction-history"
          options={{
            title: "Lịch sử GD",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.history}
                color={color}
                name="Lịch sử GD"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="wallet"
          options={{
            title: "Ví",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.account}
                color={color}
                name="Ví"
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>
      <StatusBar backgroundColor="#fff" style="dark" />
    </>
  );
};

export default TabLayout;
