import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import BottomSheetPromotion from "./bs-promotion";
import EyeOpen from "../../assets/svg/eye.svg";
import EyeClosed from "../../assets/svg/eyeClosed.svg";
import Wallet from "../../components/Wallet";
import { wallet } from "../../dummy-data/data";
import constants from "../../constants";
import BottomSheetSecurityCode from "./bs-security-code";
import format from "../../utils/fomart_currency";
const { images } = constants;
import { router, useLocalSearchParams } from "expo-router";
import paymentAPI from "../api/payment.api";
const Invoice = () => {
  const { item } = useLocalSearchParams();
  const dataBill = JSON.parse(item);
  const [transactionData, setTransactionData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [code,setCode] = useState(null)
  const [newAmount,setNewAmount] = useState(null)
  useEffect(() => {
    const fetchTransaction = async () => {
      try {
        const response = await paymentAPI.getTransaction(dataBill);
        console.log(response)
        if (response?.status === 200) {
          setTransactionData(response.data.data);
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchTransaction();
  }, []);
  const [isHide, setIsHide] = useState(false);
  const [selectedWalletIndex, setSelectedWalletIndex] = useState(0);
  const [openBottomSheet, setOpenBottomSheet] = useState(false);
  const [openSecurityCode, setOpenSecurityCode] = useState(false);
  const bottomSheetRef = useRef(null);

  const handleBottomSheetClose = () => {
    setOpenBottomSheet(false);
  };

  const handleSecurityCodeClose = () => {
    setOpenSecurityCode(false);
  };
  const handleApllyVoucher = (code,newAmount) => {
    setNewAmount(newAmount);
    setCode(code)
  };
  const handleCloseBottomSheet = () => {
    setOpenBottomSheet(false)
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView className="p-4 bg-white">
        <View className="mb-4">
        </View>
        <View className="mb-4">
          <Text className="text-lg text-[#868686]">CHI TIẾT GIAO DỊCH</Text>
          <View className="border border-[#0D99FF] rounded-2xl px-3 py-2 mt-2">
            <View>
              <Text className="text-lg font-semibold">
                {transactionData?.partnerID?.name}
              </Text>
              <View className="mb-4 mt-2 space-y-2">
                <View className="border-b-[0.5px] border-[#86868646]">
                  <View className="flex-row items-center justify-between mb-2">
                    <Text className="text-sm font-semibold text-[#868686]">
                      Mã giao dịch
                    </Text>
                    <Text className="text-sm font-semibold">
                      {transactionData?._id}
                    </Text>
                  </View>
                </View>
                <View className="border-b-[0.5px]  border-[#86868646]">
                  <View className="flex-row items-center justify-between mb-2">
                    <Text className="text-sm font-semibold text-[#868686]">
                      Trạng thái
                    </Text>
                    <Text className="text-sm font-semibold">
                      {transactionData?.status == "pending"
                        ? "Chờ thanh toán"
                        : transactionData?.status}
                    </Text>
                  </View>
                </View>
                <View className="border-b-[0.5px]  border-[#86868646]">
                  <View className="flex-row items-center justify-between mb-2">
                    <Text className="text-sm font-semibold text-[#868686]">
                      Loại giao dịch
                    </Text>
                    <Text className="text-sm font-semibold">
                      {" "}
                      {transactionData?.type == "payment"
                        ? "Thanh toán"
                        : transactionData?.type}
                    </Text>
                  </View>
                </View>
                <View className="border-b-[0.5px]  border-[#86868646]">
                  <View className="flex-row items-center justify-between mb-2">
                    <Text className="text-sm font-semibold text-[#868686]">
                      Mô tả
                    </Text>
                    <Text className="text-sm font-semibold">
                      {transactionData?.message}
                    </Text>
                  </View>
                </View>
                <View className="border-b-[0.5px]  border-[#86868646]">
                  <View className="flex-row items-center justify-between mb-2">
                    <Text className="text-sm font-semibold text-[#868686]">
                      Số tiền
                    </Text>
                    <Text className="text-sm font-semibold">
                      {isLoading ? '...loading' : format.formatCurrency(transactionData?.amount, transactionData?.currency?.symbol)}
                    </Text>
                  </View>
                </View>
              </View>
              <Text className="text-lg font-semibold">ƯU ĐÃI</Text>
              <View className="mt-2 mb-4">
                <Text className=" text-sm text-[#868686]">
                  Chọn thẻ quà tặng hoặc nhập mã khuyến mãi
                </Text>
                <TouchableOpacity
                  className="py-3 px-2 border rounded-xl border-[#0D99FF] border-dashed mt-2"
                  activeOpacity={0.7}
                  onPress={() => setOpenBottomSheet(!openBottomSheet)}
                >
                  <View className="flex-row items-center space-x-4 justify-center">
                    <Image source={images.plus} />
                    <Text className="text-sm font-semibold text-[#0D99FF]">
                      {code ? `Mã giảm giá đang sử dụng ${code}` : 'Chọn thẻ quà tặng'}
                    </Text>
                  </View>
                  {/* <View className="flex-row items-center justify-between">
                    <View></View>
                    <Text className="text-sm font-semibold text-[#0D99FF]">
                      100k
                    </Text>
                    <Image source={images.alter} />
                  </View> */}
                </TouchableOpacity>
              </View>
              <View className="w-full h-[1px] border border-[#8686863f] mb-4"></View>
              <View className="flex-row items-center justify-between mb-2">
                <Text className="text-sm font-semibold text-[#868686]">
                  Tổng tiền
                </Text>
                <Text className="text-sm font-semibold">
                {isLoading ? '...loading' : newAmount ? format.formatCurrency(newAmount, transactionData?.currency?.symbol) :format.formatCurrency(transactionData?.amount, transactionData?.currency?.symbol)}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View className="flex-row items-center justify-between">
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => router.push("/home")}
            className=" py-4 px-8 border border-[#0D99FF] rounded-xl"
          >
            <Text className="text-[#0D99FF] font-semibold">Quay lại</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            className=" py-4 px-8 bg-[#0D99FF] rounded-xl"
            onPress={() => setOpenSecurityCode(!openSecurityCode)}
          >
            <Text className="font-semibold text-[#fff]">Thanh toán</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {openBottomSheet && (
        <View style={{ ...StyleSheet.absoluteFillObject, zIndex: 10 }}>
          <BottomSheetPromotion
            title="Danh sách các khuyến mãi"
            transactionID={transactionData?._id}
            ref={bottomSheetRef}
            onClose={handleBottomSheetClose}
            onData={handleApllyVoucher}
          />
        </View>
      )}
      {openSecurityCode && (
        <View style={{ ...StyleSheet.absoluteFillObject, zIndex: 10 }}>
          <BottomSheetSecurityCode
            code={code}
            title="Nhập mã bảo mật"
            ref={bottomSheetRef}
            transactionID={transactionData?._id}
            onClose={handleSecurityCodeClose}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default Invoice;