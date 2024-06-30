import { Text, View, TextInput, Image, useWindowDimensions} from "react-native";
import React, {useState} from "react";
import { LinearGradient } from "expo-linear-gradient";
import Card from "../../../assets/svg/card.svg";
import constants from "../../../constants";
import Search from "../../../assets/svg/Search_transaction.svg"
import Filter from "../../../assets/svg/filter.svg"
import Hide from "../../../assets/svg/hide.svg"
import Sim from "../../../assets/svg/sim.svg"
import Elipse from "../../../assets/svg/elipse.svg"
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
const TransactionHistory = () => {
  const [text, setText] =React.useState("");
  const FirstRoute = () => (
    <View style={{ flex:1, text:'#000000' }} />
  );
  
  const SecondRoute = () => (
    <View style={{ flex: 1 }} />
  );
  const ThirdRoute = () => (
    <View style={{ flex: 1 }} />
  );
  const FourRoute = () => (
    <View style={{ flex: 1 }} />
  );
  
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
    four: FourRoute,
  });
  const layout = useWindowDimensions();
  
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Tất cả' },
    { key: 'second', title: 'Chuyển tiền' },
    { key: 'third', title: 'Nhận tiền' },
    { key: 'four', title: 'Điện thoại' },
  ]);
  return (
    <LinearGradient
    className="h-full w-full"
    start={{ x: 0, y: 0 }}
    end={{ x: 0, y: 1 }}
    colors={["#0094FF", "#F2F2F2"]}
    locations={[0, 0.3]}>
      <View className="w-full">
      <View className=" flex-row items-center w-full pt-[66px]  px-6 ">
         <View className="bg-white flex-row items-center h-[35px] px-[10px] rounded-3xl">
          <View className="mt-2 mr-2 pl-2">
          <Search className="mt-[5px]  bg-white "/>
          </View>
            <TextInput className="bg-white h-full rounded-3xl  w-[70%] border-black "
              label="text"
              value={text}
              placeholder="Tìm kiếm giao dịch"
              onChange={text => setText(text)}>
          </TextInput>
        </View>
        <View className=" items-center flex-row mx-[13px] ">
        <Filter /> 
        </View>
        <Hide className=" mr-[13px]"/>
      </View>
      <View className="bg-white w-full  h-[42px] mt-[10px]">
         <TabView
          
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width,}}
          
          renderTabBar={props => (
            <TabBar
              {...props}
              indicatorStyle={{ backgroundColor: '#0D99FF', height: 2 }}
              renderLabel={({ route, color }) => (
                <Text className="text-[15px] flex items-center">
                  {route.title}
                </Text>
              )}
              style={{backgroundColor: 'white'}}
            />
          )}
        />
      </View>
      <View className="bg-[#DFF7FE] h-[52px] ">
        <Text className="text-[20px] font-bold flex mt-[14px] ml-[18px] items-center">Tháng 6/2024</Text>
      </View>
      <View className="bg-[#DFDFDF] h-[85px]  ">
          <View className="bg-white h-[50px]  border-black mx-[15px] mt-[18px] w-[50px] rounded-full"></View>
           <View className="mt-[-38px] ml-[27]  ">
                 <Sim ></Sim>
           </View>
           <View className="ml-[85px] mt-[-60px]   ">
              <Text className="font-medium text-[16px] ">Nạp Data MobiFone</Text>
              <Text className="text-[12px] font-light ml-[-3] mt-2"> 22:03 - 30/06/2024 </Text>
              <Text className="text-[12px] font-light ml-[-3] mt-1"> Số dư ví: </Text>
           </View>
           <View className="flex-row-reverse mr-[15px]  mt-[-17px]">
            <Text className="text-[16px] font-semibold">
              -10.000đ
            </Text>
          </View>
      </View>
    </View>
      <View className="bg-white  h-[85px]  ">
          <View className="bg-white h-[50px] mx-[15px]  border-black mt-[18px] w-[50px] rounded-full"></View>
           <View className="mt-[-38px] ml-[27]  ">
                 <Sim ></Sim>
           </View>
           <View className="ml-[85px] mt-[-60px]   ">
              <Text className="font-medium text-[16px] ">Nạp Data MobiFone</Text>
              <Text className="text-[12px] font-light ml-[-3] mt-2"> 22:03 - 30/06/2024 </Text>
              <Text className="text-[12px] font-light ml-[-3] mt-1"> Số dư ví: </Text>
           </View>
           <View className="flex-row-reverse mr-[15px]  mt-[-17px]">
            <Text className="text-[16px] font-semibold">
              -10.000đ
            </Text>
           </View>
      </View>
      
    </LinearGradient>
  );
};

export default TransactionHistory;