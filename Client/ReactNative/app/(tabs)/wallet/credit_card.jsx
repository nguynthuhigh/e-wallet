import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Alert,
  Dimensions,
  Pressable,
} from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { getCards, getCardDetails } from "../../api/creditcard.api";
import ArrowMore from "../../../assets/svg/arrow_more.svg";
import constants from "../../../constants";
import CreditCard from "../../../components/CreditCard";
import Loader from "../../../components/Loader";
import Carousel from "react-native-reanimated-carousel";

const { images } = constants;

const CreditCardList = () => {
  const { isUpdating } = useLocalSearchParams();
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await getCards();
        console.log("Response:", response?.data);
        if (response?.data && Array.isArray(response.data)) {
          const detailedCards = await Promise.all(
            response.data.map(async (card) => {
              const cardDetails = await getCardDetails(card._id);
              console.log("Card details:", cardDetails);
              return {
                ...cardDetails.data,
                id: card._id,
                type: card.type,
              };
            })
          );
          setCards(detailedCards);
        } else {
          Alert.alert(
            "Thông báo!",
            "Bạn chưa có thẻ tín dụng nào. Nhấn vào liên kết thẻ tín dụng để liên kết với thẻ tín dụng của bạn nhé!!"
          );
        }
      } catch (error) {
        console.log("Unable to fetch card list:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, [isUpdating]);

  const renderItem = ({ item }) => {
    return (
      <Pressable
        onPress={() =>
          router.push({
            pathname: "wallet/credit-card-details",
            params: { item: JSON.stringify(item) },
          })
        }
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
    );
  };

  if (loading) {
    return <Loader isLoading={loading} />;
  }

  const { width: viewportWidth } = Dimensions.get("window");
  const itemWidth = viewportWidth * 0.75;

  return (
    <SafeAreaView>
      <View className="px-4">
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
        <View className="mt-[70%]">
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => router.push("/wallet/credit-card-linking")}
          >
            <View className="border-[#0D99FF] border-dashed border px-3 py-2 rounded-lg">
              <View className="flex-row items-center space-x-1 w-full">
                <View className="w-[15%]">
                  <Image source={images.addCard} />
                </View>
                <View className="w-[85%] flex-row items-center">
                  <View className="w-[90%]">
                    <Text className="font-semibold text-base text-[#0D99FF]">
                      Liên kết thẻ tín dụng
                    </Text>
                    <Text className="text-[10px] font-semibold">
                      Đăng ký nhanh chóng, miễn phí thanh toán
                    </Text>
                  </View>
                  <View>
                    <ArrowMore />
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CreditCardList;