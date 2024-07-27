import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import CheckMark from "../../assets/svg/ic_CheckMark.svg";
import { router, useLocalSearchParams } from "expo-router";
import transactionAPI from "../api/transaction.api";
import format from "../../utils/fomart_currency";
import HomeBlack from "../../assets/svg/home_black.svg";
const TransactionResults = () => {
  const { item } = useLocalSearchParams();
  const transactionID = item;
  const [transactionData, setTransactionData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currency, setCurrency] = useState(null);
  useEffect(() => {
    const fetchTransaction = async () => {
      try {
        const response = await transactionAPI.getTransactionDetails(
          transactionID
        );
        if (response.status === 200) {
          setTransactionData(response.data.data);
          setCurrency(transactionData?.currency?.symbol);
          setIsLoading(false);
        }
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    };
    fetchTransaction();
  }, []);
  return (
    <SafeAreaView>
      <View></View>
      <View className="h-[450px] p-5">
        <View className=" items-center mb-10 flex-row justify-between">
          <View className="w-[20px]"></View>
          <Text className="font-semibold text-xl text-black">
            Kết Quả Giao Dịch
          </Text>
          <TouchableOpacity
            onPress={() => {
              router.push("home");
            }}
          >
            <HomeBlack></HomeBlack>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <View className="w-full absolute -top-3 z-10 items-center">
            <View className="bg-white rounded-full p-2 ">
              <CheckMark />
            </View>
          </View>
          <View className=" bg-white p-5 rounded-2xl">
            <View className="justify-center items-center mt-7">
              <Text className="font-semibold text-[16px] mb-1">
                Thanh toán thành công
              </Text>
              <Text className="font-bold text-[25px] my-2">
                {isLoading
                  ? "...Loading"
                  : format.formatCurrency(
                      transactionData?.amount,
                      currency ? currency : "VND"
                    )}
              </Text>
            </View>
            <View className="border-t-2 border-blue-900 border-dashed"></View>
            <View className="flex flex-row justify-between mb-4">
              <Text className="text-[#6b6b6b]">Thời gian thanh toán</Text>
              <Text className="font-bold">
                {isLoading
                  ? "...Loading"
                  : format.formatTime(transactionData?.createdAt)}
              </Text>
            </View>
            <View className="flex flex-row justify-between mb-5">
              <Text className="text-[#6b6b6b]">Chi tiết giao dịch</Text>
              <Text className="font-bold text-[#0094ff]">
                {isLoading ? "...Loading" : transactionData?._id}
              </Text>
            </View>
            <View className="border-[1px] border-[#d8d8d8] rounded-2xl p-3">
              <View>
                <Text className="mb-2">Biên lai chuyển tiền</Text>
                <Text className="mb-2 text-[#dfdfdf]">
                  -----------------------------------------------
                </Text>
              </View>
              <View>
                <Text className="mb-2">
                  {isLoading ? "...Loading" : transactionData?.sender?.email}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    borderStyle: "dashed",
  },
});
export default TransactionResults;
