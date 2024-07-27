import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";

const AuthLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen name="sign-in" options={{ headerShown: false }} />
        <Stack.Screen name="verify-sign-in" options={{ headerShown: false }} />
<<<<<<< HEAD

        <Stack.Screen name="onboarding-main" options={{ headerShown: false }} />
        <Stack.Screen name="welcome" options={{ headerShown: false }} />
        
=======
>>>>>>> bd66202f7af83117a5868fbd301b9bfbaa569707
        <Stack.Screen name="sign-up" options={{ headerShown: false }} />
        <Stack.Screen name="verify-sign-up" options={{ headerShown: false }} />
        <Stack.Screen name="verify-account" options={{ headerShown: false }} />
        <Stack.Screen name="install-security" options={{ headerShown: false }} />
        <Stack.Screen name="update-information" options={{ headerShown: false }} />
      </Stack>
    </>
  );
};

export default AuthLayout;
