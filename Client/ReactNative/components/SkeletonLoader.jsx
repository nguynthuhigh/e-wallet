import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing } from "react-native-reanimated";

const SkeletonLoader = () => {
  const shimmerAnimation = useSharedValue(0);

  useEffect(() => {
    shimmerAnimation.value = withTiming(1, {
      duration: 1500,
      easing: Easing.linear,
    }, () => {
      shimmerAnimation.value = withTiming(0, {
        duration: 1500,
        easing: Easing.linear,
      });
    });
  }, [shimmerAnimation]);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: shimmerAnimation.value,
    };
  });

  return (
    <View style={styles.container}>
      {Array.from({ length: 5 }).map((_, index) => (
        <View key={index} style={styles.skeletonItem}>
          <Animated.View style={[styles.iconSkeleton, animatedStyles]} />
          <View style={styles.textContainer}>
            <Animated.View style={[styles.titleSkeleton, animatedStyles]} />
            <Animated.View style={[styles.subtitleSkeleton, animatedStyles]} />
          </View>
          <Animated.View style={[styles.amountSkeleton, animatedStyles]} />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  skeletonItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    padding: 16,
  },
  iconSkeleton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#e0e0e0",
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  titleSkeleton: {
    width: "50%",
    height: 20,
    backgroundColor: "#e0e0e0",
    marginBottom: 8,
  },
  subtitleSkeleton: {
    width: "80%",
    height: 16,
    backgroundColor: "#e0e0e0",
  },
  amountSkeleton: {
    width: 60,
    height: 20,
    backgroundColor: "#e0e0e0",
  },
});

export default SkeletonLoader;
