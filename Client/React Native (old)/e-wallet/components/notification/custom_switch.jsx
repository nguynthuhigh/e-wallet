// CustomSwitch.js
import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomSwitch = ({ initial = false, onChange }) => {
  const [isOn, setIsOn] = useState(initial);

  const toggleSwitch = () => {
    setIsOn(previousState => !previousState);
    onChange(!isOn);
  };

  return (
    <TouchableOpacity
      style={[styles.switchContainer, isOn ? styles.switchOn : styles.switchOff]}
      onPress={toggleSwitch}
    >
        <View className="items-center justify-center flex-row" style={[styles.circle, isOn ? styles.circleOn : styles.circleOff]} >
          <View className={isOn ? 'bg-[#0D99FF] w-[6px] h-[6px]  rounded-full' : 'bg-[#dcdde1] w-[6px] h-[6px] absolute rounded-full'}></View>
        </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  switchContainer: {
    width: 40,
    height: 20,
    borderRadius: 25,
    padding: 2,
    justifyContent: 'center',
  },
  switchOn: {
    marginRight:2,
    backgroundColor: '#0D99FF',
    alignItems: 'flex-end',
  },
  switchOff: {
    backgroundColor: '#dcdde1',
    alignItems: 'flex-start',
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 50,
    backgroundColor: '#fff',
  },
  circleOn: {
    transform: [{ translateX: 1 }],
  },
  circleOff: {
    transform: [{ translateX: 0 }],
  },
});

export default CustomSwitch;
