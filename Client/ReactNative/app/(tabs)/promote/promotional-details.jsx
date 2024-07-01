import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import BgBlue from "../../../assets/svg/bg_blue.svg";
import NavigationHeader from "../../../components/NavigationHeader";
import constants from "../../../constants";
const { images } = constants;
const PromotionalDetails = () => {
  return (
    <View className="flex-1">
      <BgBlue className=" absolute inset-0" />
      <SafeAreaView className="absolute top-7 left-0 right-0">
        <NavigationHeader title="Chi tiết ưu đãi" />
        <ScrollView>
          <View className="flex-1 mx-5 bg-white h-auto rounded-3xl">
            <View className="flex-1 px-4 py-5">
              <View className="flex-1 flex-col items-center">
                <Text className="text-[#0D99FF] text-4xl">Giảm 20%</Text>
                <Text className="text-[#8c8c8c] text-2xl text-center mt-3">
                  Thanh toán vé máy bay bằng pressPay
                </Text>
                <Text className="text-[#0D99FF] text-2xl text-center my-3 font-semibold">
                  Hết hạn sau 5 ngày
                </Text>
                <View className=" border w-full border-t border-dashed border-[#8c8c8c]"></View>
              </View>
              <View className="flex-1 flex-row items-center justify-start mt-5">
                <Image source={images.airlinesLarge} width={60} height={60} />
                <Text className="text-2xl text-[#8c8c8c] font-semibold ml-3">
                  Vietnam Airlines
                </Text>
              </View>
            </View>
          </View>
          <View className="flex-1 mx-5 bg-white h-auto rounded-3xl mt-5">
            <View className="flex-1 px-4 py-5">
              <Text className=" text-lg font-semibold mb-4">
                Điều khoản sử dụng
              </Text>
              <View className=" border w-full border-t border-solid border-[#8c8c8c] mb-3"></View>
              <View className="flex-1 flex-col justify-between">
                <Text className="text-sm font-semibold">
                  1. Thời gian hiệu lực: Sử dụng mã trước khi hết hạn.
                </Text>
                <Text className="text-sm font-semibold">
                  2. Hãng bay áp dụng: Một số mã chỉ áp dụng cho một số hãng
                  hàng không.
                </Text>
                <Text className="text-sm font-semibold">
                  3. Giới hạn sử dụng: Mã thường chỉ dùng được một lần trên mỗi
                  tài khoản.
                </Text>
                <Text className="text-sm font-semibold">
                  4. Giá trị tối thiểu: Cần đạt giá trị đơn hàng tối thiểu.
                </Text>
                <Text className="text-sm font-semibold">
                  5. Không áp dụng đồng thời: Không dùng mã cùng các khuyến mãi
                  khác.
                </Text>
                <Text className="text-sm font-semibold">
                  6. Phạm vi áp dụng: Có thể chỉ áp dụng cho chuyến bay nội địa
                  hoặc quốc tế.
                </Text>
                <Text className="text-sm font-semibold">
                  7. Phí và thuế: Mã giảm giá không bao gồm phí và thuế.
                </Text>
                <Text className="text-sm font-semibold">
                  8. Điều khoản huỷ bỏ: Mã có thể bị huỷ nếu vi phạm điều khoản
                  hoặc có dấu hiệu gian lận.
                </Text>
              </View>
            </View>
          </View>
          <View className="flex-1 mx-5">
            <TouchableOpacity className="bg-[#0D99FF] h-14 rounded-xl mt-5 items-center justify-center">
              <Text className="text-lg text-white font-semibold">
                Dùng ngay
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default PromotionalDetails;
