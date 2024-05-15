import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.flexContainer}>
        <TextInput style={styles.input} />
        <View style={styles.circle} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '80%',
    marginHorizontal: 'auto',
    marginTop: 20,
  },
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  input: {
    borderRadius: 4,
    borderWidth: 1,
    width: '70%',
  },
  circle: {
    borderRadius: 15,
    width: 30,
    height: 30,
    backgroundColor: 'black',
  },
});
