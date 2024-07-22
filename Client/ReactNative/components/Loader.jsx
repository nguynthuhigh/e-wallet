import { View, ActivityIndicator, Dimensions, Platform } from "react-native";

const Loader = ({ isLoading }) => {
  const osName = Platform.OS;
  const screenHeight = Dimensions.get("screen").height;
  if (!isLoading) return null;
  return (
    <View
      className="absolute flex justify-center items-center w-full h-full bg-[#161622]/80 z-10"
      style={{ height: screenHeight }}
    >
      <ActivityIndicator
        animating={isLoading}
        color="#fff"
        size={osName === "ios" ? "large" : 50}
      />
    </View>
  );
};

export default Loader;
