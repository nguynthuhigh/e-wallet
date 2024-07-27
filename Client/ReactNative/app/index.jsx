import React, { useEffect, useState } from "react";
import { Redirect } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";

const LoadingComponent = () => (
  <View style={styles.loadingContainer}>
    <ActivityIndicator size="large" color="#0000ff" />
    <Text>Loading...</Text>
  </View>
);

const Welcome = () => {
  const [accessToken, setAccessToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const token = await AsyncStorage.getItem("AccessToken");
        setAccessToken(token);
      } catch (error) {
        console.log("Error fetching token:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchToken();
  }, []);

  if (isLoading) {
    return <LoadingComponent />;
  }

  return accessToken ? <Redirect href="/home" /> : <Redirect href="/onboarding-main" />;
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Welcome;
