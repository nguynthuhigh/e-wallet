import { Text,View, SafeAreaView } from "react-native"
import BackArrow from '../../../assets/svg/arrow_back.svg'
import { LinearGradient } from "expo-linear-gradient";
import LottieView from "lottie-react-native";

export default function DetailsCurrency(){
    const formatCurrency = (balance,currency)=>{
        const formatter = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: currency,
        });
        return formatter.format(balance)
      }
    return(
        <SafeAreaView className="">
            <LinearGradient
             className="h-full w-full"
             start={{ x: 0, y: 0 }}
             end={{ x: 0, y: 1 }}
             colors={["#0094FF", "#F2F2F2"]}
             locations={[0, 0.3]}
            >
                <View className="h-full px-6 mt-2">
                    <View>
                        <BackArrow></BackArrow>
                    </View>
                    <View className="mx-auto mt-10">
                        <Text className="font-iSemiBold text-white text-[30px] mb-2">{formatCurrency(2000,"USD")}</Text>
                        <Text className="mx-auto text-[17px] text-gray-500">≈{formatCurrency(2000*25210,"VND")}</Text>
                    </View>
                    <View className="flex-row justify-between mt-10">
                        <View className="w-[25%] flex-col items-center">
                        <LottieView
                            style={{ flex: 1, width: 50, height: 50 }}
                            source={require("../../../assets/animation/transfer.json")}
                            autoPlay
                            loop
                        />
                            <Text>Chuyển tiền</Text>
                        </View>
                        <View className="w-[25%] flex-col items-center">
                            <View className="bg-slate-600 w-[50px] h-[50px] mb-2 rounded-full"></View>
                            <Text>Nạp tiền</Text>
                        </View>
                        <View className="w-[25%] flex-col items-center">
                            <View className="bg-slate-600 w-[50px] h-[50px] mb-2 rounded-full"></View>
                            <Text>Rút tiền</Text>
                        </View>
                        <View className="w-[25%] flex-col items-center">
                            <View className="bg-slate-600 w-[50px] h-[50px] mb-2 rounded-full"></View>
                            <Text>Chuyển tiền</Text>
                        </View>
                    </View>
                </View>
                
            </LinearGradient>
        </SafeAreaView>
    )
}