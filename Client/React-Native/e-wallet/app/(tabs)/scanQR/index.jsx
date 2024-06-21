import { StyleSheet, View } from "react-native";
import LottieView from "lottie-react-native";
import React, { useEffect, useRef } from "react";

export default function ScanQR() {
  const animationRef = useRef(null);

  useEffect(() => {
    if (animationRef.current) {
      animationRef.current.play(30, 120);
    }
  }, []);

  return (
    <View style={styles.container}>
      <LottieView
        ref={animationRef}
        speed={0.2}
        style={styles.lottie}
        source={require("../../../assets/animation/loading_send.json")}
        loop
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  lottie: {
    height: 250,
    width: 250,
  },
});
