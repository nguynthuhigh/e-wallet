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
  Dimensions,
  Pressable,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { fetchCards } from "../../api/creditcard.api";
import Carousel from "react-native-reanimated-carousel";
import CreditCard from "../../../components/CreditCard";
import BottomSheetSecurityCode from "./bs-security-code";
import Wallet from "../../../components/Wallet";
import { wallet } from "../../../dummy-data/data";
import EyeOpen from "../../../assets/svg/eye.svg";
import EyeClosed from "../../../assets/svg/eyeClosed.svg";
import { useLocalSearchParams } from "expo-router";
const MemoizedWallet = React.memo(Wallet);

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
  const { item } = useLocalSearchParams();
  useEffect(() => {
    setWalletData(JSON.parse(item));
    const getCards = async () => {
      try {
        const response = await fetchCards();
        setCards(response);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    getCards();
  }, []);

  const { width: viewportWidth } = Dimensions.get("window");

  const renderItem = useCallback(
    ({ item }) => (
      <Pressable
        onPress={() => {
          setCardID(item.id);
        }}
      >
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

  const handleSecurityCodeClose = useCallback(() => {
    setOpenBS(false);
  }, []);

  const handleWalletPress = useCallback((index, currency) => {
    setSelectedWallet({ index, currency });
  }, []);

  const walletItems = useMemo(
    () =>
      wallet.map((value, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={0.8}
          onPress={() => handleWalletPress(index, value.currency)}
          style={{ marginRight: 10 }}
        >
          <MemoizedWallet
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

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View className="flex-1 ">
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
            <Text className="font-semibold text-base text-[#868686] mb-2">
              Số tiền cần nạp
            </Text>
            <TextInput
              className="px-5 py-3 border-2 border-[#868686a0] rounded-lg focus:outline-none focus:ring focus:border-[#0D99FF]"
              keyboardType="numeric"
              placeholder="0đ"
              value={amount}
              onChangeText={(newText) => setAmount(newText)}
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
    </TouchableWithoutFeedback>
  );
};

export default DepositWithdraw;
