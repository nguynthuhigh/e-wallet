import { View, TouchableOpacity, Text, TextInput } from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";
const ModalComponent = ({ hideModal }) => {
  const [count, setCount] = useState(0);
  const handleChangeValue = (e) => {
    return setCount(e.nativeEvent.text.length);
  };
  return (
    <Modal isVisible={true} animationInTiming={400} animationOutTiming={300}>
      <TouchableOpacity style={{ flex: 1 }} onPress={hideModal}>
        <View className="flex-1 items-center mt-[60%]">
          <View className="w-full h-14 flex-row items-center justify-evenly">
            <TextInput
              placeholder="Mã khuyến mãi"
              className="h-full flex-col items-center justify-center border-2 rounded-xl w-[60%] bg-white px-4 border-[#AAAAAA] focus:outline-none focus:ring focus:border-[#0D99FF]"
              maxLength={10}
              onChange={handleChangeValue}
            />
            <TouchableOpacity
              activeOpacity={0.7}
              className={`h-full  border-2 ${
                count == 10 ? "border-[#0D99FF] " : "border-[#AAAAAA] "
              } rounded-xl w-[28%] bg-white justify-center items-center transition-all`}
            >
              <Text
                className={`font-semibold ${
                  count == 10
                    ? "text-[#0D99FF]"
                    : "text-[#AAAAAA] transition-colors"
                } `}
              >
                Apply
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default ModalComponent;
