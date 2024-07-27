import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StyleSheet,ActivityIndicator
} from "react-native";
import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Message } from "../../../dummy-data/data.js";
import BackArrow from "../../../assets/svg/arrow_back.svg";
import BlueBg from "../../../assets/svg/bg_blue.svg";
import { useLocalSearchParams,Link, router, } from "expo-router";
import walletAPI from '../../api/wallet.api.js'
import convert from "../../../utils/convert_currency.js";
import format from "../../../utils/fomart_currency.js";
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
  const {item} = useLocalSearchParams();
  const userData = JSON.parse(item).item
  const walletData = JSON.parse(item).wallet.item
  const currency = JSON.parse(item).wallet.symbol
  const [amount, setAmount] = useState(0);
  const [amountTemp, setAmountTemp] = useState()
  const [content, setContent] = useState(" ");
  const [isLoading,setIsLoading] = useState(false)
  const [error,setError] = useState('')
  const handleTransfer =async()=>{
    try {
      if(convert.convertCurrency(amountTemp,currency) < 100){
        return setError("Số tiền chuyển tối thiểu 100")
      }
      if(convert.convertCurrency(walletData.balance,currency) < convert.convertCurrency(amount,currency)){
        return setError("Số dư không đủ")
      }
      if(convert.convertCurrency(amountTemp,currency) > 20000000){
        return setError("Số tiền chuyển tối đa 20,000,000đ")
      }
      const data = {
        receiver:userData._id,
        amount:amountTemp,
        currency:currency,
        message:content,
        email:userData.email
    }
      router.push({ pathname: "home/confirm-bill", params: { item: JSON.stringify(data) }});
    } catch (error) {
      setIsLoading(false)
    }
  }
  const hanldeChange = (newText) => {
    if(currency === 'VND'){
      const unformat = format.unformatCurrency(newText);
    
      if (newText.length > 12) {
        return;
      }
      setAmount(format.formatCurrency(unformat, currency));
      setError(null)
      setAmountTemp(unformat)
      }else{
        setAmount(newText)
        setError(null)
        setAmountTemp(unformat)
      }
    }
  return (
      <SafeAreaView >
        <View className="bg-white">
          <View className="flex-row bg-white py-4 items-center px-5 gap-x-2 mb-4">
            <TouchableOpacity onPress={() => router.back()}>
              <BackArrow width={30} height={26.5} />
            </TouchableOpacity>
            <Image
              className="rounded-full"
              style={{ width: 30, height: 30 }}
              source={{ uri: userData?.avartar ? userData?.avartar : 'https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-7&_nc_sid=136b72&_nc_ohc=HNv6-cLkGacQ7kNvgHYwj8W&_nc_ht=scontent.fsgn2-4.fna&oh=00_AYC6b_b8RfM9LiLTEQWAgK3AzEoUq7ug5jXE6quJ9aNfVQ&oe=66CCCFB8' }}
            />
            <View>
              <Text className=" font-bold text-sm text-black">
              {userData?.full_name}
              </Text>
              <Text className="text-xs text-black">{userData?.email} </Text>
            </View>
          </View>
          <ScrollView className="px-5">
      
            <View className="flex-1 mx-auto bg-white rounded-xl shadow-2xl">
            
              <View className="mx-auto my-5">
                <TextInput
                  onChangeText={(newText)=>{hanldeChange(newText)}}
                  keyboardType={"decimal-pad"}
                  autoFocus={true}
                  value={amount}
                  className="w-fit h-[50px] text-[50px] font-bold"
                  placeholder="0đ"
                ></TextInput>
              </View>
              {error ? <Text className="text-center mb-2 text-red-500">{error}</Text> : ''}
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
         
                    
            <TouchableOpacity disabled={isLoading} onPress={handleTransfer} className="bg-[#0D99FF] rounded-xl p-2 mt-4">
              {!isLoading ? <Text className="mx-auto text-white font-semibold py-2 text-[20px] ">
                Chuyển tiền
              </Text>:<ActivityIndicator className="h-[40px]"></ActivityIndicator>}
            </TouchableOpacity>
          </ScrollView>
          <StatusBar backgroundColor="#fff" style="inverted" />
        </View>
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