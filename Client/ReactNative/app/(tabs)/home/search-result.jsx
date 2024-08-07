import {
  View,
  TextInput,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import Search from "../../../assets/svg/search.svg";
import { useState, useCallback, useRef, useEffect } from "react";
import searchAPI from "../../api/search.api";
import ItemUser from "../../../components/Item_User";
import { useLocalSearchParams } from "expo-router";

const useDebounce = (callback, time) => {
  let timeout = null;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback(...args);
    }, time);
  };
};
export default function SearchResult() {
  const [textEmail, setTextEmail] = useState(null);
  const [userData, setUserData] = useState(null);
  const { item,qr_code } = useLocalSearchParams();
  const [itemInfo,setItemInfo] = useState(null)
  useEffect(()=>{
    if(qr_code){
      setTextEmail(qr_code)
      setItemInfo(`{"item":{"balance":0,"currency":"667ee9da8868e89c7832a35e","_id":"66a4ff1c4ea7d311d52558be"},"name":"Vietnamese Dong","symbol":"VND"}`)
    }else{
      setItemInfo(item)
    }
  },[])
  const searchUser = async (email) => {
    try {
      const respone = await searchAPI.getUser(email);
      setUserData(respone.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const debouncedSearchUser = useCallback(useDebounce(searchUser, 1000), []);
  const hanldeTextChange = (text) => {
    setTextEmail(text.toLowerCase());
    debouncedSearchUser(text);
  };
  return (
    <SafeAreaView>
      <View className="px-4 bg-white">
        <View className="w-full h-9 bg-white mr-3 flex-row items-center rounded-3xl px-2">
          <Search width={30} height={30} />
          <TextInput
            onChangeText={hanldeTextChange}
            value={textEmail}
            placeholder="Tìm kiếm người dùng"
            className="flex-1 h-full justify-center"
          ></TextInput>
        </View>
        {userData ? <ItemUser item={userData} wallet={itemInfo}></ItemUser> : ""}
      </View>
    </SafeAreaView>
  );
}
