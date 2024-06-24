import React, { useRef, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Tabs, useSegments } from "expo-router";
import LottieView from "lottie-react-native";
import { View, Text, Animated, Dimensions } from "react-native";
import constants from "../../constants";
const { icons } = constants;
import TabIcon from "../../components/TabIcon";

const ScanTabIcon = ({ focused }) => {
  return (
    <View className="items-center justify-end">
      <View className="w-[75px] h-[75px] items-center bg-white overflow-hidden rounded-full">
        <LottieView
          style={{ flex: 1, width: 60, height: 60 }}
          source={require("../../assets/animation/qr_scan.json")}
          autoPlay
          loop
        />
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
};

const TabLayout = () => {
  const tabOffsetValue = useRef(new Animated.Value(0)).current;
  const tabBarOpacity = useRef(new Animated.Value(1)).current;
  const segment = useSegments();
  const page = segment[segment.length - 1];
  const pagesToHideBar = [
    "transfer",
    "scan-qr",
    "receive-money",
    "qr-payment",
    "notification",
  ];

  const handleTabPress = (toValue) => {
    const isScanQrTab = toValue === getWidth() * 2;
    Animated.spring(tabOffsetValue, {
      toValue,
      useNativeDriver: true,
    }).start();
    handleTabBarOpacity(isScanQrTab ? 0 : 1);
  };

  const handleTabBarOpacity = (toValue) => {
    Animated.timing(tabBarOpacity, {
      toValue,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    const isPageToHideBar = pagesToHideBar.includes(page) || page === "scanQR";
    handleTabBarOpacity(isPageToHideBar ? 0 : 1);
  }, [page]);

  const defaultTabBarStyle = {
    backgroundColor: "#fff",
    borderTopWidth: 2,
    height: 84,
    borderTopColor: "rgba(140, 140, 140, 0.2)",
  };

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#0D99FF",
          tabBarInactiveTintColor: "#8C8C8C",
          tabBarShowLabel: false,
          tabBarStyle: pagesToHideBar.includes(page)
            ? { ...defaultTabBarStyle, display: "none" }
            : defaultTabBarStyle,
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "home",
            headerShown: false,
            tabBarStyle: pagesToHideBar.includes(page)
              ? { ...defaultTabBarStyle, display: "none" }
              : defaultTabBarStyle,
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
            tabBarStyle: pagesToHideBar.includes(page)
              ? { ...defaultTabBarStyle, display: "none" }
              : defaultTabBarStyle,
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
            tabBarStyle: pagesToHideBar.includes(page)
              ? { ...defaultTabBarStyle, display: "none" }
              : defaultTabBarStyle,
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
            tabBarStyle: pagesToHideBar.includes(page)
              ? { ...defaultTabBarStyle, display: "none" }
              : defaultTabBarStyle,
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
            tabBarStyle: pagesToHideBar.includes(page)
              ? { ...defaultTabBarStyle, display: "none" }
              : defaultTabBarStyle,
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
          opacity: tabBarOpacity,
        }}
      ></Animated.View>
      <StatusBar backgroundColor="#fff" style="inverted" />
    </>
  );
};

export default TabLayout;

const getWidth = () => {
  let width = Dimensions.get("window").width;
  return width / 5;
};
