import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StyleSheet
} from "react-native";
import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Message } from "../../../dummy-data/data.js";
import BackArrow from "../../../assets/svg/arrow_back.svg";
import BlueBg from "../../../assets/svg/bg_blue.svg";
import { useLocalSearchParams,Link, router } from "expo-router";
import walletAPI from '../../api/wallet.api.js'
import Modal from 'react-native-modal'
const Wallet = ()=>{
  return(
    <TouchableOpacity className="w-[30%] h-[55px] bg-[#FFF5F5] rounded-xl flex-row items-center">
          <Image className="w-[20px] h-[20px] m-2"  source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNFPx_5UeN24Si_c-S11x4Xq0T10ydstaLig&s',
            }}></Image>
          <View>
              <Text className='text-[16px] font-semibold '>
                  VND
              </Text>
              <Text className='text-[12px]  '>200000</Text>
          </View>
    </TouchableOpacity>
  )
}
const ConfirmSend = () => {
  const params = useLocalSearchParams();
  const recevier = params.receiver
  const [amount, setAmount] = useState(0);
  const [content, setContent] = useState("");
  const [isLoading,setIsLoading] = useState(true)
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  useEffect(()=>{
    const fetchWallet = ()=>{
      const responese = walletAPI.getWallet();
    }
  },[])

  const handleTransfer =async()=>{
    const data = {
      receiver: recevier,
      amount: amount,
      message: content,
      currency: "VND"
    }
    // const response = await walletAPI.sendMoney(data)
    toggleModal()
  }
  return (
    <SafeAreaView>
      <BlueBg />
      <SafeAreaView className="absolute top-7">
       
        <View className="flex-row items-center px-5 gap-x-2 mb-4">
          <TouchableOpacity onPress={() => router.back()}>
            <BackArrow width={30} height={26.5} />
          </TouchableOpacity>
          <Image
            className="rounded-full"
            style={{ width: 30, height: 30 }}
            source={{ uri: "https://reactjs.org/logo-og.png" }}
          />
          <View>
            <Text className=" font-bold text-sm text-white">
              Nguyễn Minh Nguyên
            </Text>
            <Text className="text-xs text-white"> 036988962x</Text>
          </View>
        </View>
        <ScrollView className="px-5">
        <Modal isVisible={isModalVisible} className="">
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}} >

            <View className="bg-[#FAFAFA] font-semibold text-[22px] w-full p-4 rounded-t-[10px]">
              <TouchableOpacity onPress={()=>{setModalVisible(!isModalVisible)}}><Text>close</Text></TouchableOpacity>
              <Text className="font-semibold text-[22px] text-center">Nhập mã bảo mật</Text>
              </View>
            <View className="bg-[#EEEEEE] w-full flex-row justify-center py-4 rounded-b-lg">
              <TextInput  
                style={styles.input} 
                className="font-semibold w-fit bg-white rounded-full px-5" 
                placeholder='••••••'
                maxLength = {6}
                keyboardType='numeric'
                autoFocus={true}
                >
                </TextInput>
            </View>
         </View>
        </Modal>
          <View className="flex-1 mx-auto bg-white rounded-xl shadow-2xl">
            <View className="flex-row justify-between my-5 px-4">
              <Wallet></Wallet>
              <Wallet></Wallet>
              <Wallet></Wallet>
            </View>
            <View className="mx-auto my-5">
              <TextInput
                onChangeText={(newText) => setAmount(newText)}
                keyboardType={"number-pad"}
                autoFocus={true}
                value={amount}
                className="w-fit h-[50px] text-[50px] font-bold"
                placeholder="0đ"
              ></TextInput>
            </View>
            <View className="flex-1 px-4">
              <TextInput
                onChangeText={(newText) => setContent(newText)}
                multiline
                value={content}
                className="w-full h-[100px] border-[1px] border-[#C9C9C9] rounded-md p-4 text-[15px]"
                placeholder="Nhập hoặc chọn bên dưới"
              ></TextInput>
            </View>
            <View className="p-4 flex-row flex-wrap">
              {Message.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    setContent(item.message);
                  }}
                >
                  <View
                    style={{
                      alignSelf: "center",
                      padding: 8,
                      backgroundColor: "#F2F2F2",
                      borderRadius: 120,
                      marginRight: 10,
                      marginBottom: 10,
                    }}
                  >
                    <Text>{item.message}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                setPrice("10000");
              }}
            >
              <View
                className="border-[1px] px-4 py-2 mt-4  rounded-xl border-[#0D99FF] bg-white"
                style={{ alignSelf: "center" }}
              >
                <Text className="text-[#0D99FF]">10.000</Text>
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={handleTransfer} className="bg-[#0D99FF] rounded-xl p-2 mt-4">
            <Text className="mx-auto text-white font-semibold py-2 text-[20px] ">
              Chuyển tiền
            </Text>
          </TouchableOpacity>

        </ScrollView>
        <StatusBar backgroundColor="#fff" style="inverted" />
   
      </SafeAreaView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 60,
    margin: 12,
    padding: 10,
    fontSize:50,
  }})



export default ConfirmSend;
