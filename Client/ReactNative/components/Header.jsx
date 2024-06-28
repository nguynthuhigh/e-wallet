import { TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "expo-router";
import { View, Text, Image } from "react-native";
import BackArrow from "../assets/svg/arrow_back.svg";
const Header = ({ title, img }) => {
  const navigation = useNavigation();
  return (
    <View className="flex-row justify-between items-center px-5 my-5">
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <BackArrow width={30} height={26.5} />
      </TouchableOpacity>
      <Text className="font-bold color-white text-lg">{title}</Text>
      <View className=" w-8 h-8 flex-row justify-center items-center">
        <View className="w-full rounded-full h-full bg-white absolute"></View>
        <Image
          className="rounded-full"
          style={{ width: 30, height: 30 }}
          source={img}
        />
      </View>
      <StatusBar backgroundColor="#fff" />
    </View>
  );
};

export default Header;
