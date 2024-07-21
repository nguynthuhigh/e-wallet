import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import ModalComponent from "../../../components/ModalComponent";
const ScanQR = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <View>
      <TouchableOpacity
        onPress={() => setShowModal(!showModal)}
        className="items-center justify-center"
      >
        <Text className="mt-10">ScanQR</Text>
      </TouchableOpacity>
      {showModal && <ModalComponent hideModal={() => setShowModal(false)} />}
    </View>
  );
};

export default ScanQR;
