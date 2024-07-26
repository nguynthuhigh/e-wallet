import React, { useState, useEffect } from "react";
import { View, TextInput, SafeAreaView, ScrollView, Text, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import TransferIcon from "../../../assets/svg/transfer.svg";
import BankIcon from "../../../assets/svg/bank.svg";
import LuckyMoneyIcon from "../../../assets/svg/lucky_money.svg";
import ScanQR from "../../../assets/svg/scan-qr.svg";
import BlueBg from "../../../assets/svg/bg_blue.svg";
import Header from "../../../components/Header";
import Search from "../../../assets/svg/search.svg";
import Mic from "../../../assets/svg/mic.svg";
import User from "../../../components/User";
import { UserData } from "../../../dummy-data/data.js";
import constants from "../../../constants";
const { images } = constants;
import GroupFund from "../../../assets/svg/gr-fund.svg";
import RequestMoney from "../../../assets/svg/request-money.svg";
import PaymentLink from "../../../assets/svg/payment-link.svg";
import PaymentReminder from "../../../assets/svg/payment-reminder.svg";
import Bill from "../../../assets/svg/bill.svg";
import RightArrow from "../../../assets/svg/right-arrow.svg";
import Icon from "../../../components/Icon.jsx";
import { router } from "expo-router";

const Transfer = () => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const text1 = "Tìm số điện thoại";
    const text2 = "Tìm người nhận đã lưu";
    let text = text1;
    let index = 0;
    let forward = true;

    const updatePlaceholder = () => {
      if (forward) {
        setDisplayText((prev) => prev + text[index]);
        index++;
        if (index === text.length) {
          forward = false;
          setTimeout(updatePlaceholder, 1000);
          return;
        }
      } else {
        setDisplayText((prev) => prev.slice(0, -1));
        index--;
        if (index === 0) {
          forward = true;
          text = text === text1 ? text2 : text1;
          setTimeout(updatePlaceholder, 1000);
          return;
        }
      }
      setTimeout(updatePlaceholder, 150);
    };

    const intervalId = setTimeout(updatePlaceholder, 150);

    return () => clearTimeout(intervalId);
  }, []);
  const HandleSearch = ()=>{
    console.log("123")
  }
  return (
    <View>
      <BlueBg />
      <SafeAreaView className="absolute top-7">
        <Header title="Chuyển tiền" img={images.nicky} />
        <ScrollView className="px-5">
            <TouchableOpacity onPress={()=>{router.push('home/search-result')}} className="w-full h-9 bg-white mr-3 flex-row items-center rounded-3xl px-2">
                <Search width={30} height={30} />
                <View
                  className="flex-1 h-full justify-center"
                ><Text>Tìm kiếm</Text></View>
            </TouchableOpacity>
          <View className="flex-row items-start justify-evenly px-2 mt-4 py-4 bg-white rounded-xl">
            <Icon icon={TransferIcon} label="Đến ví khác" />
            <Icon icon={BankIcon} label="Đến ngân hàng" />
            <Icon icon={ScanQR} label="Quét mã QR" />
            <Icon icon={LuckyMoneyIcon} label="Lì xì" />
          </View>
          <View className="flex-1 mt-4 bg-white rounded-xl">
            <View className="px-4 pt-4">
              <Text className="text-base font-semibold">Đề xuất</Text>
              <View className="bg-slate-100 h-[2px] my-2"></View>
              <View className="flex-wrap flex-row mt-2 items-start justify-evenly gap-x-1">
                {UserData.map((item, index) => (
                  <Link href="/home/confirm-send" className="mb-4" key={index}>
                    <User {...item} />
                  </Link>
                ))}
              </View>
            </View>
          </View>
          <View className="flex-1 mt-4 bg-white rounded-xl">
            <View className="px-4 pt-4">
              <Text className="text-base font-semibold">
                Dịch vụ nhận - thu tiền
              </Text>
              <View className="flex-row items-start justify-between py-4">
                <Icon icon={RequestMoney} label="Chia tiền" />
                <Icon icon={PaymentReminder} label="Nhắc trả tiền" />
                <Icon icon={GroupFund} label="Quỹ nhóm" />
                <Icon icon={PaymentLink} label="Link nhận tiền" />
              </View>
            </View>
          </View>
          <View className="flex-1 mt-4 bg-white rounded-xl">
            <View className="px-4 py-4 flex-row items-center gap-x-4">
              <Bill width={30} height={30} />
              <View className="flex-col gap-y-1">
                <Text className="font-semibold text-left text-xs">
                  Thống kê chuyển nhận tiền
                </Text>
                <Text className="text-left text-[10px]">
                  Xem tổng số tiền đã chuyển, nhận trong tháng
                </Text>
              </View>
              <RightArrow width={10} height={10} />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Transfer;
