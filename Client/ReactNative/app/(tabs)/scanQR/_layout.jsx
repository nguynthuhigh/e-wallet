import { Stack } from "expo-router";

const StackLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="scan-qr" options={{ headerShown: false }} />
    </Stack>
  );
};

export default StackLayout;
