import { Stack } from "expo-router";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

const StackLayout = () => {
const navigation = useNavigation();

  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="confirm-send"
          options={{
            headerShown:false,

            headerLeft: () => (
              <>

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
        <Stack.Screen name="transfer" options={{ headerShown: false }} />
        <Stack.Screen name="search-result" options={{ headerShown: false }} />
        <Stack.Screen name="confirm-bill" options={{ headerShown: false }} />
        <Stack.Screen name="details-bill" options={{ headerShown: false }} />
        <Stack.Screen name="details-currency" options={{ headerShown: false }} />
        <Stack.Screen name="list-currencies" options={{ headerShown: false }} />
        <Stack.Screen
          name="deposit-withdraw"
          options={{
            headerTitle: "Nạp/Rút",
            headerTintColor: "#fff",
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
              </>
            ),
          }}
        />
      </Stack>
    </>
  );
};

export default StackLayout;
