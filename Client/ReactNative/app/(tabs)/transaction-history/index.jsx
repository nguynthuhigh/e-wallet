import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  useWindowDimensions,
  FlatList,
  SafeAreaView,
} from "react-native";
import Item_Transaction from "../../../components/Item_Transaction";
import transactionAPI from "../../api/transaction.api";
import SkeletonLoader from "../../../components/SkeletonLoader"; // Adjust the import path as needed

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
  const [id, setId] = useState();

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const data = await transactionAPI.getTransaction();
        setDataTransaction(data.data.transactions);
        setId(data.data.id);
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
        <SkeletonLoader />
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
    <SafeAreaView>
      <Text className="font-semibold text-center text-xl pt-5 bg-white">
        Lịch sử giao dịch
      </Text>
      <View style={{ width: "100%" }} className="bg-white h-full">
        <View
          style={{
            backgroundColor: "white",
            width: "100%",
            height: "100%",
            marginTop: 10,
          }}
        >
          <FirstRoute />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TransactionHistory;
