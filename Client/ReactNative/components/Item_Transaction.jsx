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
const Item_Transaction = () => {
    return(
        <View>
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
        
        </View>
         
    )
}
export default Item_Transaction