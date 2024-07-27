import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import Onboarding from './component/onboarding';

const OnboardingMain = () => {
    return (
        <View style={styles.container}>
            <Onboarding />
            <StatusBar style="auto" />
        </View>
    );
};

export default OnboardingMain;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
    },
});
