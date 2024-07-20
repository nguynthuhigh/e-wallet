import React, { useEffect, useState } from "react";
import { Redirect } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View,Text } from "react-native";

const LoadingComponent = ()=>{
  return(
    <View><Text>Loading</Text></View>
  )
}

const Welcome = () => {
  const [accessToken, setAccessToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchToken = async () => {
      try {
        const token = await AsyncStorage.getItem('AccessToken');
        setAccessToken(token); 
      } catch (error) {
        console.log("Error fetching token:", error);
      }
      finally {
        setIsLoading(false); 
      }
    }

    fetchToken();
  }, []); 
  if (isLoading) {
    return <LoadingComponent />;
  }
  if (accessToken) {
    return <Redirect href="/home" />;
  } else {
    return <Redirect href="/login" />;
  }
};

export default Welcome;
