import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import {
  useWindowDimensions,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Text,
  View,
  Alert,
  Dimensions,
  Pressable,
  StyleSheet,
} from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import api from "../../api/auth.api";
import { getCards, getCardDetails } from "../../api/creditcard.api";
import Carousel from "react-native-reanimated-carousel";
import CreditCard from "../../../components/CreditCard";
import BottomSheetSecurityCode from "./bs-security-code";
import Wallet from "../../../components/Wallet";
import { wallet } from "../../../dummy-data/data";
import CashIn from "../../../assets/svg/cashin.svg";
import CashOut from "../../../assets/svg/cashout.svg";
import EyeOpen from "../../../assets/svg/eye.svg";
import EyeClosed from "../../../assets/svg/eyeClosed.svg";
import { useLocalSearchParams } from "expo-router";
const DepositWithdraw = () => {
  const [isHide, setIsHide] = useState(false);
  const [cards, setCards] = useState([]);
  const [openBS, setOpenBS] = useState(false);
  const [cardID, setCardID] = useState("");
  const [selectedWallet, setSelectedWallet] = useState({
    index: 0,
    currency: "VND",
  });
  const [walletData, setWalletData] = useState(null);
  const [amount, setAmount] = useState("");
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "Nạp tiền", icon: <CashIn /> },
    { key: "second", title: "Rút tiền", icon: <CashOut /> },
  ]);
  const {item} = useLocalSearchParams();
  
  useEffect(() => {
    setWalletData(JSON.parse(item))
    const fetchCards = async () => {
      try {
        const response = await getCards();
        if (response?.data && Array.isArray(response.data)) {
          
        } else {
          Alert.alert(
            "Thông báo!",
            "Bạn chưa có thẻ tín dụng nào. Nhấn vào liên kết thẻ tín dụng để liên kết với thẻ tín dụng của bạn nhé!!"
          );
        }
      } catch (error) {
        console.log("Unable to fetch card list:", error);
      }
    };
    fetchCards();
  }, []);

  const { width: viewportWidth } = Dimensions.get("window");

  const renderItem = useCallback(
    ({ item }) => (
      <Pressable onPress={() => {setCardID(item.id); console.log(item.id)}}>
        <CreditCard
          key={item.id}
          type={item.type}
          number={item.number}
          expiry={`${item.expiryMonth}/${item.expiryYear % 100}`}
          cvc={item.cvv}
          name={item.name}
        />
      </Pressable>
    ),
    []
  );

  const bottomSheetRef = useRef(null);

  const handleSecurityCodeClose = () => {
    setOpenBS(false);
  }

  const handleWalletPress =(index, currency) => {
    setSelectedWallet({ index, currency });
  }

  const handleAmountChange = (text) => {
    setAmount(text);
  };
  const walletItems = useMemo(
    () =>
      wallet.map((value, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={0.8}
          onPress={() => handleWalletPress(index, value.currency)}
          style={{ marginRight: 10 }}
        >
          <Wallet
            logo={value.img}
            currency={value.currency}
            value={
              walletData?.currencies
                ? walletData.currencies[index].balance
                : "0"
            }
            isSelected={selectedWallet.index === index}
          />
        </TouchableOpacity>
      )),
    [walletData, selectedWallet, handleWalletPress]
  );

  const FirstRoute = useCallback(
    () => (
      <View className="flex-1 px-4 bg-white mt-2">
        <View className="my-4">
          <View className="flex-row items-center space-x-2 mb-2">
            <Text className="text-base font-semibold">Nạp tiền</Text>
            <TouchableOpacity
              onPress={() => setIsHide(!isHide)}
              activeOpacity={0.7}
            >
              {isHide ? (
                <EyeClosed width={24} height={24} />
              ) : (
                <EyeOpen width={24} height={24} />
              )}
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal={true}
            contentContainerStyle={{ display: "flex", flexDirection: "row" }}
            showsHorizontalScrollIndicator={false}
            keyboardDismissMode="on-drag"
            keyboardShouldPersistTaps="handled"
          >
            {walletItems}
          </ScrollView>
        </View>
        <View className="mb-4 h-screen">
          <Text className="mb-2">Số tiền cần nạp</Text>
          <TextInput
            className="px-5 py-3 border-2 border-[#868686a0] rounded-lg focus:outline-none focus:ring focus:border-[#0D99FF]"
            keyboardType="numeric"
            placeholder="0đ"
            value={amount}
            onChangeText={handleAmountChange}
          />
          <View>
            <View className="items-center">
              <Carousel
                data={cards}
                renderItem={renderItem}
                width={viewportWidth}
                height={300}
                mode="vertical-stack"
                modeConfig={{
                  snapDirection: "left",
                  stackInterval: 18,
                  showLength: 3,
                  scaleInterval: 0.08,
                  opacityInterval: 0.15,
                  translateYInterval: 15,
                  rotate: 2,
                }}
              />
            </View>
          </View>
          <View className="mt-[70%] w-full items-center">
            <TouchableOpacity
              className="rounded-lg bg-[#0D99FF] w-full items-center py-4"
              onPress={() => setOpenBS(!openBS)}
            >
              <Text className="text-white font-semibold text-base">
                Nạp tiền
              </Text>
            </TouchableOpacity>
           
          </View>
        </View>
      </View>
    ),
    [
      isHide,
      walletItems,
      handleAmountChange,
      cards,
      viewportWidth,
      openBS,
      amount,
      selectedWallet,
      cardID,
      handleSecurityCodeClose,
    ]
  );

  const SecondRoute = () => <View></View>;

  const renderScene = useMemo(
    () =>
      SceneMap({
        first: FirstRoute,
        second: SecondRoute,
      }),
    [FirstRoute]
  );

  return (
    <View className="flex-1">
      <View style={{ height: "100%" }}>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width, height: layout.height }}
          renderTabBar={(props) => (
            <TabBar
              {...props}
              indicatorStyle={{
                backgroundColor: "#0D99FF",
                height: 4,
                borderRadius: 12,
                width: 104,
                marginLeft: layout.width / 4 - 50,
              }}
              renderLabel={({ route }) => (
                <View className="flex-row items-center space-x-3">
                  {route.icon}
                  <Text style={{ fontSize: 16, textAlign: "center" }}>
                    {route.title}
                  </Text>
                </View>
              )}
              style={{ backgroundColor: "white" }}
              tabStyle={{ width: layout.width / 2 }}
            />
          )}
        />
      </View>
      {openBS && (
              <View style={{ ...StyleSheet.absoluteFillObject, zIndex: 10 }}>
                <BottomSheetSecurityCode
                  title="Nhập mã bảo mật"
                  ref={bottomSheetRef}
                  amount={amount}
                  currency={selectedWallet.currency}
                  cardID={cardID}
                  onClose={handleSecurityCodeClose}
                />
              </View>
            )}
    </View>
  );
};

export default DepositWithdraw;
