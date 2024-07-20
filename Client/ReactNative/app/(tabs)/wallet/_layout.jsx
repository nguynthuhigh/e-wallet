import { Stack } from "expo-router";

const StackLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="notification" options={{ headerShown: false }} />
      <Stack.Screen name="credit_card" options={{headerShown: false}} />
      <Stack.Screen name="credit_details" options={{headerShown: false}}/>
    </Stack>
  );
};

export default StackLayout;
