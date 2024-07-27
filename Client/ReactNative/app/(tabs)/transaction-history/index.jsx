import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  useWindowDimensions,
  FlatList,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Search from "../../../assets/svg/Search_transaction.svg";
import Filter from "../../../assets/svg/filter.svg";
import Hide from "../../../assets/svg/hide.svg";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import Item_Transaction from "../../../components/Item_Transaction";
import { useEffect } from "react";
import transactionAPI from "../../api/transaction.api";
const TransactionHistory = () => {
  const [text, setText] = useState("");
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "Tất cả" },
    { key: "second", title: "Chuyển tiền" },
    { key: "third", title: "Nhận tiền" },
    { key: "four", title: "Điện thoại" },
  ]);
  const [dataTransaction, setDataTransaction] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [id,setId] = useState()
  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const data = await transactionAPI.getTransaction();
        setDataTransaction(data.data.transactions);
        setId(data.data.id)
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTransactions();
  }, []);

  const FirstRoute = () => (
    <View>
   
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={dataTransaction}
          renderItem={({ item, index }) => (
            <Item_Transaction
              keyExtractor={(item) => item.id}
              index={index}
              item={item}
              id={id}
            />
          )}
        />
      )}
    </View>
  );

  



  return (
    <SafeAreaView
    >
      <Text className="font-semibold text-center text-xl pt-5 bg-white">Lịch sử giao dịch</Text>
      <View style={{ width: "100%" }} className="bg-white h-full">
        <View
          style={{
            backgroundColor: "white",
            width: "100%",
            height: "100%",
            marginTop: 10,
          }}
        >
        <FirstRoute></FirstRoute>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TransactionHistory;
