import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { NativeWindStyleSheet } from "nativewind";
import Home from './components/home/home';
NativeWindStyleSheet.setOutput({
  default: "native",
});
//web: npx expo start --web
export default function App() {
  return (
    <Home></Home>
  
  );
}

