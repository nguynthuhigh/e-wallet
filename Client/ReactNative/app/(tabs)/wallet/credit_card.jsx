import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import { router } from "expo-router";
import { getCards, getCardDetails } from "../../api/creditcard.api";
import ArrowMore from "../../../assets/svg/arrow_more.svg";
import constants from "../../../constants";
const { images } = constants;
import CreditCard from "../../../components/CreditCard";
import Loader from "../../../components/Loader"
const CreditCardList = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await getCards();
        console.log("Response:", response?.data); 
        if (response && response?.data && Array.isArray(response?.data)) {
          const detailedCards = await Promise.all(
            response.data.map(async (card) => {
              const cardDetails = await getCardDetails(card._id);
              console.log("Card details:", cardDetails); 
              return {
                ...cardDetails.data,
                id: card._id,
              };
            })
          );
          setCards(detailedCards);
        } else {
          console.error("Không đúng định dạng:", response);
          Alert.alert("Lỗi", "Không đúng định dạng.");
        }
      } catch (error) {
        console.error("Không thể lấy được danh sách thẻ:", error);
        Alert.alert("Lỗi", "Không thể lấy được danh sách thẻ.");
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  if (loading) {
    return (
        <Loader isLoading={loading}/>
    );
  }

  return (
    <SafeAreaView>
      <ScrollView className="px-4">
        {cards.map((card) => (
          <CreditCard
            key={card.id}
            type={card.type} 
            number={card.number}
            expiry={`${card.expiryMonth}/${card.expiryYear - 2000}`}
            cvc={card.cvv}
            name={card.name}
          />
        ))}
        <View className="mt-3">
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreditCardList;
