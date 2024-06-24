import React from "react";
import { StatusBar } from "expo-status-bar";
import { Tabs } from "expo-router";
import LottieView from "lottie-react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { withLayoutContext } from "expo-router";
const { Navigator } = createMaterialTopTabNavigator();
import { useSegments } from "expo-router";
export const MaterialTopTabs = withLayoutContext(Navigator);
import { View, Text } from "react-native";
import constants from "../../constants";
const { icons } = constants;
import TabIcon from "../../components/TabIcon";

const TabLayout = () => {
  const segment = useSegments();
  const page = segment[segment.length - 1];
  const pagesToHideBar = [
    "transfer",
    "scan-qr",
    "receive-money",
    "qr-payment",
    "notification",
  ];
  return (
    <>
      <MaterialTopTabs
        tabBarPosition="bottom"
        screenOptions={{
          tabBarActiveTintColor: "#0D99FF",
          tabBarInactiveTintColor: "#8C8C8C",
          tabBarShowLabel: false,
          tabBarIndicatorStyle: {
            position: "absolute",
            top: 0,
            height: 3,
          },
          tabBarItemStyle: {
            height: 84,
          },
          tabBarStyle: {
            backgroundColor: "#fff",
            borderTopWidth: 2,
            borderTopColor: "rgba(140, 140, 140, 0.2)",
          },
        }}
      >
        <MaterialTopTabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarStyle: {
              display: pagesToHideBar.includes(page) ? "none" : "flex",
            },
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
        <MaterialTopTabs.Screen
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
        <MaterialTopTabs.Screen
          name="scanQR"
          options={{
            title: "scan-qr",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <View className=" absolute -top-10 self-center">
                <View className=" flex-1 w-20 h-20 bg-white items-center">
                  <LottieView
                    style={{ flex: 1, width: 60, height: 60 }}
                    source={require("../../assets/animation/qr_scan.json")}
                    autoPlay
                    loop
                  />
                </View>
              </View>
            ),
          }}
        />
        <MaterialTopTabs.Screen
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
        <MaterialTopTabs.Screen
          name="wallet"
          options={{
            title: "Ví",
            headerShown: false,
            tabBarStyle: {
              display: pagesToHideBar.includes(page) ? "none" : "flex",
            },
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
      </MaterialTopTabs>
      <StatusBar backgroundColor="#fff" style="dark" />
    </>
  );
};

export default TabLayout;
