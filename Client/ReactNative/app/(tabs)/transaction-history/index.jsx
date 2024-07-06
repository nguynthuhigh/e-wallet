import React, { useState } from "react";
import { Text, View, TextInput, useWindowDimensions, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Search from "../../../assets/svg/Search_transaction.svg"
import Filter from "../../../assets/svg/filter.svg"
import Hide from "../../../assets/svg/hide.svg"
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Search from "../../../assets/svg/Search_transaction.svg";
import Filter from "../../../assets/svg/filter.svg";
import Hide from "../../../assets/svg/hide.svg";
import Item_Transaction from "../../../components/Item_Transaction";
import { Transaction } from "../../../dummy-data/transactions";

const TransactionHistory = () => {
  const [text, setText] = useState("");
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'Tất cả' },
    { key: 'second', title: 'Chuyển tiền' },
    { key: 'third', title: 'Nhận tiền' },
    { key: 'four', title: 'Điện thoại' },
  ]);

  const FirstRoute = () => (
    <View>
      <View style={{ backgroundColor: '#DFF7FE', height: 52 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 18, marginTop: 14 }}>Tháng 6/2024</Text>
      </View>
      <FlatList
        data={Transaction}
        keyExtractor={(item) => item}
        
        renderItem={({ item,index }) => <Item_Transaction index={index} item={item} />}
      />
    </View>
  );

  const SecondRoute = () => (
    <View>
    <View style={{ backgroundColor: '#DFF7FE', height: 52 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 18, marginTop: 14 }}>Tháng 6/2024</Text>
    </View>
    <FlatList
      data={Transaction}
      keyExtractor={(item) => item}
      
      renderItem={({ item,index }) => <Item_Transaction index={index} item={item} />}
    />
  </View>
  );

  const ThirdRoute = () => (
    <View>
    <View style={{ backgroundColor: '#DFF7FE', height: 52 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 18, marginTop: 14 }}>Tháng 6/2024</Text>
    </View>
    <FlatList
      data={Transaction}
      keyExtractor={(item) => item}
      
      renderItem={({ item,index }) => <Item_Transaction index={index} item={item} />}
    />
  </View>
  );

  const FourRoute = () => (
    <View>
    <View style={{ backgroundColor: '#DFF7FE', height: 52 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 18, marginTop: 14 }}>Tháng 6/2024</Text>
    </View>
    <FlatList
      data={Transaction}
      keyExtractor={(item) => item}
      
      renderItem={({ item,index }) => <Item_Transaction index={index} item={item} />}
    />
  </View>
  );

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
    four: FourRoute,
  });

  return (
    <LinearGradient
      style={{ height: '100%', width: '100%' }}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      colors={["#0094FF", "#F2F2F2"]}
      locations={[0, 0.3]}
    >
      <View style={{ width: '100%' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', paddingTop: 66, paddingHorizontal: 6 }}>
          <View style={{ backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', height: 35, paddingHorizontal: 10, borderRadius: 20 }}>
            <View style={{ marginTop: 2, marginRight: 2, paddingLeft: 2 }}>
              <Search style={{ marginTop: 5, backgroundColor: 'white' }} />
            </View>
            <TextInput
              style={{ backgroundColor: 'white', height: '100%', borderRadius: 20, width: '70%' }}
              value={text}
              placeholder="Tìm kiếm giao dịch"
              onChangeText={setText}
            />
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 13 }}>
            <Filter />
          </View>
          <Hide style={{ marginRight: 13 }} />
        </View>
        <View style={{ backgroundColor: 'white', width: '100%', height: '100%', marginTop: 10 }}>
          <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            renderTabBar={props => (
              <TabBar
                {...props}
                indicatorStyle={{ backgroundColor: '#0D99FF', height: 2 }}
                renderLabel={({ route }) => (
                  <Text style={{ fontSize: 15, textAlign: 'center' }}>
                    {route.title}
                  </Text>
                )}
                style={{ backgroundColor: 'white' }}
              />
            )}
          />
        </View>
      </View>
    </LinearGradient>
  );
};

export default TransactionHistory;
