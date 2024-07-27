import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Welcome = () => {
    return (
        <View style={styles.container}>
            <Text>Layout welcome ở tab (auth)</Text>
            <Text>bùn ngủ quá rùi ní code giùm với</Text>
        </View>
    );
};

export default Welcome;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});
