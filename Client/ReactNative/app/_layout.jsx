import { useEffect } from "react";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
SplashScreen.preventAutoHideAsync();
const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "NotoSans_ExtraCondensed-ExtraBold": require("../assets/fonts/NotoSans_ExtraCondensed-ExtraBold.ttf"),
    "NotoSans_ExtraCondensed-Light": require("../assets/fonts/NotoSans_ExtraCondensed-Light.ttf"),
    "NotoSans_ExtraCondensed-Medium": require("../assets/fonts/NotoSans-Medium.ttf"),
    "NotoSans_ExtraCondensed-Regular": require("../assets/fonts/NotoSans-Regular.ttf"),
    "NotoSans-Italic": require("../assets/fonts/NotoSans-Italic.ttf"),
    "NotoSans-Light": require("../assets/fonts/NotoSans-Light.ttf"),
    "NotoSans-Medium": require("../assets/fonts/NotoSans-Medium.ttf"),
    "NotoSans-Regular": require("../assets/fonts/NotoSans-Regular.ttf"),
  });
  useEffect(() => {
    if (error) throw error;
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);
  if (!fontsLoaded) {
    return null;
  }
  if (!fontsLoaded && !error) {
    return null;
  }
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout;
