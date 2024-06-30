import { Stack } from "expo-router";
import React from "react";

const StackLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="categorized-promotions"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="promotional-details"
        options={{ headerShown: false }}
      />
    </Stack>
  );
};
export default StackLayout;
