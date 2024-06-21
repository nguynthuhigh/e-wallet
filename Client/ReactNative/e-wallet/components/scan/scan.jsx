import { StyleSheet, Text, View } from 'react-native';
import LottieView from 'lottie-react-native';
import React, { useEffect, useRef } from 'react';
export default function App() {
  const animationRef = useRef<LottieView>(null);
  useEffect(() => {
    animationRef.current?.play();

    animationRef.current?.play(30, 120);
  }, []);
  return (
    <View style={styles.container}>
      <LottieView speed={0.2}  style={{flex:1, alignItems:'center',justifyContent:'center',height: 250, width: 250}} source={require('../../assets/animation/loading_send.json')} autoPlay loop />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});