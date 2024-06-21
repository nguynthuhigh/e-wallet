import { Stack } from "expo-router";
const StackLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="transfer" options={{ headerShown: false }} />
      <Stack.Screen name="receive-money" options={{headerShown:false}}/>
      <Stack.Screen name="qr-payment" options={{headerShown:false}}/>
      <Stack.Screen name="scan-qr" options={{headerShown:false}}/>
    </Stack>
  );
};

export default StackLayout;
