import { Stack } from "expo-router";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { View, Text, Image } from "react-native";
import BackArrow from "../../../assets/svg/arrow_back.svg";

const StackLayout = () => {
  const navigation = useNavigation();

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="transfer"
        options={{
          headerTitle: " ",
          headerBackground: () => (
            <LinearGradient
              style={{ flex: 1 }}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              colors={["#0094FF", "#F2F2F2"]}
            />
          ),
          headerLeft: () => (
            <>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <BackArrow width={30} height={26.5} />
              </TouchableOpacity>
              <View className="flex-row items-center justify-center gap-x-2">
                <Image
                  className="rounded-full"
                  style={{ width: 30, height: 30 }}
                  source={{ uri: "https://reactjs.org/logo-og.png" }}
                />
                <View>
                  <Text className=" font-semibold text-sm">
                    Nguyễn Minh Nguyên
                  </Text>
                  <Text className="text-xs"> 036988962x</Text>
                </View>
              </View>
            </>
          ),
        }}
      />
      <Stack.Screen
        name="receive-money"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="qr-payment" options={{ headerShown: false }} />
      <Stack.Screen name="scan-qr" options={{ headerShown: false }} />
    </Stack>
  );
};

export default StackLayout;
