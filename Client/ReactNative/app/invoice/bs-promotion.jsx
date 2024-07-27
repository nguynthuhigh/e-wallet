import React, { useCallback, useMemo, forwardRef, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from "react-native";
import BottomSheet, {
  BottomSheetView,
  BottomSheetBackdrop,
  BottomSheetTextInput,
} from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import paymentAPI from '../api/payment.api'
const BottomSheetPromotion = forwardRef((props, ref) => {
  const {transactionID} = props
  const {onData} = props
  const [codeAplly, setCodeAplly] = useState(null);
  const snapPoints = useMemo(() => ["25%", "50%", "75%"], []);
  const [error, setError] = useState(null);

  const handleSheetChanges = useCallback(
    (index) => {
      console.log("handleSheetChanges", index);
      if (index === -1) {
        props.onClose();
      }
    },
    [props]
  );

  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={1}
      />
    ),
    []
  );
  const handleAppyVoucher =async()=>{
    try {
        const body = {
          "transactionID":transactionID,
          "code":codeAplly
        }
        const response = await paymentAPI.applyVoucher(body)
        if(response.status === 200){
          onData(codeAplly,response.data.data)
          props.onClose()
        }
    } catch (error) {
      console.log(error)
      setError(error.response.data.message)
    }
  }
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheet
        ref={ref}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        enablePanDownToClose={true}
        index={1}
        backgroundStyle={{ borderRadius: 40 }}
        backdropComponent={renderBackdrop}
        keyboardBehavior="extend"
      >
        <BottomSheetView style={styles.contentContainer}>
          <Text className="text-base font-semibold">{props.title}</Text>
          <Text className="text-red-500 font-semibold">{error}</Text>
          <View className="px-5 py-3 mt-5 border-2 rounded-xl border-[#86868695] focus:outline-none focus:ring focus:border-[#0D99FF]">
            <View className="w-full flex-row justify-between items-center p-4">
              <TextInput 
                style={styles.input} 
                placeholder="Nhập mã khuyến mãi"
                onChangeText={(newText)=>{setCodeAplly(newText)}}>
              </TextInput>
              <TouchableOpacity activeOpacity={0.7} onPress={handleAppyVoucher}>
                <Text
                  className={`text-sm font-semibold ${
                 "text-[#0D99FF]"
                  }`}
                >
                  APPLY
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* <View className="mt-4 w-full flex-1">
            <Text className="font-semibold text-base mb-4">
              Khuyến mãi dành cho bạn
            </Text>
            <ScrollView>
              <Voucher />
              <Voucher />
              <Voucher />
              <Voucher />
              <Voucher />
            </ScrollView>
          </View> */}
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
});

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 16,
  },
  input: {
    borderRadius: 10,
    fontSize: 16,
    lineHeight: 20,
    flex: 1,
  },
});

export default BottomSheetPromotion;