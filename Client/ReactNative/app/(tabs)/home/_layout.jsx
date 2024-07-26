import { Stack } from "expo-router";
import { TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import BackArrow from "../../../assets/svg/arrow_back.svg";
const StackLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="confirm-send" />
        <Stack.Screen
          name="receive-money"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="transfer" options={{ headerShown: false }} />
        <Stack.Screen name="search-result" options={{ headerShown: false }} />
        <Stack.Screen name="confirm-bill" options={{ headerShown: false }} />
        <Stack.Screen name="details-bill" options={{ headerShown: false }} />
        <Stack.Screen
          name="details-currency"
          options={{ headerShown: false }}
        />
        <Stack.Screen name="list-currencies" options={{ headerShown: false }} />

        <Stack.Screen
          name="deposit-withdraw"
          options={{
            headerTitle: "Nạp/Rút",
            headerTintColor: "white",
            headerBackground: () => (
              <LinearGradient
                style={{ flex: 1 }}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                colors={["#0094FF", "#F2F2F2"]}
              />
            ),
            headerLeft: () => (
              <TouchableOpacity onPress={() => router.push("/home")}>
                <BackArrow width={24} height={24} />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack>
    </>
  );
};

export default StackLayout;
