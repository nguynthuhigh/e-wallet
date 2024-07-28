import React, { useCallback, useMemo, forwardRef, useState } from "react";
import { Text, StyleSheet, Keyboard } from "react-native";
import BottomSheet, {
  BottomSheetView,
  BottomSheetBackdrop,
  BottomSheetTextInput,
} from "@gorhom/bottom-sheet";
import api from "../../api/wallet.api.js";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const BottomSheetSecurityCode = forwardRef((props, ref) => {
  const { amount, cardID, currency } = props;
  console.log(amount);
  console.log(cardID);
  console.log(currency);
  const [securityCode, setSecurityCode] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const handleOnChange = (security_code) => {
    setSecurityCode(security_code);
    if (security_code.length === 6) {
      const deposit = async () => {
        try {
          setMessage("Đang nạp tiền...");
          const response = await api.depositMoney({
            security_code,
            amount,
            cardID,
            currency,
          });
          if (response.status === 200) {
            setData(response.data);
            setMessage("Nạp tiền thành công");
            setError(null);
          } else {
            setMessage(null);
            setError(response.data.message || "Đã xảy ra lỗi");
          }
        } catch (error) {
          setMessage(null);
          setError(error.response?.data?.message || "Đã xảy ra lỗi");
        }
      };
      deposit();
    }
  };

  const snapPoints = useMemo(() => ["25%", "50%", "60%"], []);

  const handleSheetChanges = useCallback(
    (index) => {
      console.log("handleSheetChanges", index);
      if (index === -1) {
        Keyboard.dismiss();
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
          <Text className="text-green-500 font-semibold">{message}</Text>

          <BottomSheetTextInput
            style={styles.input}
            onChangeText={handleOnChange}
            maxLength={6}
            keyboardType="numeric"
            secureTextEntry
            placeholder="○ ○ ○ ○ ○ ○ "
            value={securityCode}
          />
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
    marginTop: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderColor: "black",
    backgroundColor: "#D9D9D9",
    borderRadius: 20,
  },
});

export default BottomSheetSecurityCode;
