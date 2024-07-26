import constants from "../../../../constants";
const { images } = constants;
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { withLayoutContext } from "expo-router";
const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext(Navigator);
import TabIcon from "../../../../components/TabIcon";
const TabLayout = () => {
  return (
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
          borderRadius: 10,
          width: 80,
          left: "14%",
        },
        tabBarItemStyle: {
          height: 84,
        },
      }}
    >
      <MaterialTopTabs.Screen
        name="my-qr"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => {
            return (
              <TabIcon
                color={color}
                focused={focused}
                name="QR của tôi"
                icon={images.qrCode}
              />
            );
          },
        }}
      />
      <MaterialTopTabs.Screen
        name="scan-qr"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => {
            return (
              <TabIcon
                color={color}
                focused={focused}
                name="Scan QR"
                icon={images.lineScan}
              />
            );
          },
        }}
      />
    </MaterialTopTabs>
  );
};

export default TabLayout;
