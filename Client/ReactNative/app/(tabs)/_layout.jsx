import React, { useRef, useEffect, useCallback, useMemo } from "react";
import { StatusBar } from "expo-status-bar";
import { Tabs, useSegments } from "expo-router";
import LottieView from "lottie-react-native";
import { View, Text, Animated, Dimensions } from "react-native";
import constants from "../../constants";
const { icons } = constants;
import TabIcon from "../../components/TabIcon";

const ScanTabIcon = React.memo(({ focused }) => {
  return (
    <View className="items-center justify-end">
      <View className="w-20 h-20 items-center bg-white overflow-hidden rounded-full">
        {/* <LottieView
          style={{ flex: 1, width: 60, height: 60 }}
          source={require("../../assets/animation/qr_scan.json")}
          autoPlay
          loop
        /> */}
      </View>
      <Text
        className={`${
          focused
            ? "text-[#0094FF] font-semibold"
            : "text-[#8C8C8C] font-normal"
        } text-xs text-center w-20 mb-4`}
      >
        Quét mọi QR
      </Text>
    </View>
  );
});

const TabLayout = () => {
  const tabOffsetValue = useRef(new Animated.Value(0)).current;
  const segment = useSegments();
  const page = segment[segment.length - 1];
  const pagesToHideBar = useMemo(
    () => [
      "transfer",
      "confirm-send",
      "scan-qr",
      "receive-money",
      "qr-payment",
      "notification",
      "my-qr",
      "categorized-promotions",
      "promotional-details",
      "details-bill",
      "list-currencies",
      "search-result",
      "confirm-bill"
    ],
    []
  );

  const handleTabPress = useCallback(
    (toValue) => {
      Animated.spring(tabOffsetValue, {
        toValue,
        useNativeDriver: true,
      }).start();
    },
    [tabOffsetValue]
  );

  const defaultTabBarStyle = useMemo(
    () => ({
      backgroundColor: "#fff",
      borderTopWidth: 2,
      height: 84,
      borderTopColor: "rgba(140, 140, 140, 0.2)",
    }),
    []
  );

  const shouldHideTabBar = pagesToHideBar.includes(page) || page === "scanQR";

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#0D99FF",
          tabBarInactiveTintColor: "#8C8C8C",
          tabBarShowLabel: false,
          tabBarStyle: shouldHideTabBar
            ? { ...defaultTabBarStyle, display: "none" }
            : defaultTabBarStyle,
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "home",
            headerShown: false,
            unmountOnBlur: true,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home}
                color={color}
                name="Home"
                focused={focused}
              />
            ),
          }}
          listeners={{
            tabPress: () => {
              handleTabPress(0);
            },
          }}
        />
        <Tabs.Screen
          name="promote"
          options={{
            title: "promotion",
            headerShown: false,
            unmountOnBlur: true,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.promotion}
                color={color}
                name="Ưu đãi"
                focused={focused}
              />
            ),
          }}
          listeners={{
            tabPress: () => {
              handleTabPress(getWidth());
            },
          }}
        />
        <Tabs.Screen
          name="scanQR"
          options={{
            title: "scan-qr",
            headerShown: false,
            unmountOnBlur: true,
            tabBarIcon: ({ focused }) => <ScanTabIcon focused={focused} />,
          }}
          listeners={{
            tabPress: () => {
              handleTabPress(getWidth() * 2);
            },
          }}
        />
        <Tabs.Screen
          name="transaction-history"
          options={{
            title: "transaction-history",
            headerShown: false,
            unmountOnBlur: true,

            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.history}
                color={color}
                name="Lịch sử GD"
                focused={focused}
              />
            ),
          }}
          listeners={{
            tabPress: () => {
              handleTabPress(getWidth() * 3);
            },
          }}
        />
        <Tabs.Screen
          name="wallet"
          options={{
            title: "wallet",
            headerShown: false,
            unmountOnBlur: true,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.account}
                color={color}
                name="Ví"
                focused={focused}
              />
            ),
          }}
          listeners={{
            tabPress: () => {
              handleTabPress(getWidth() * 4);
            },
          }}
        />
      </Tabs>
      {!shouldHideTabBar && (
        <Animated.View
          style={{
            width: getWidth(),
            height: 2,
            backgroundColor: "#0D99FF",
            position: "absolute",
            bottom: 83,
            left: 0,
            borderRadius: 20,
            transform: [{ translateX: tabOffsetValue }],
          }}
        ></Animated.View>
      )}
      <StatusBar backgroundColor="#fff" style="inverted" />
    </>
  );
};

export default TabLayout;

const getWidth = () => {
  let width = Dimensions.get("window").width;
  return width / 5;
};
