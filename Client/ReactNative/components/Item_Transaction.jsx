import { Text, View, TextInput, Image, TouchableOpacity} from "react-native";
import React, {useState} from "react";
import Sim from "../assets/svg/sim.svg"
import Bank_Transfer from "../assets/svg/bank_transfer.svg";
import { router } from "expo-router";
const Change_Icon = (type) => {
  if (type === "transfer"){
    return <Sim/>
  }
  else if (type === "deposit"){
    return <Bank_Transfer/>
  }
} 
const Content = (type)=>{
  if(type==="transfer"){
    return "Nhận tiền"
  }
}
const Item_Transaction = ({index,item}) => {
    return( 
        <TouchableOpacity onPress={()=>{router.push('transaction-history/transaction-details')}}>
        <View className={index%2 === 0 ? "bg-white h-[85px]" :"bg-[#DFDFDF] h-[85px]"}>
         <View className="flex-row items-center  p-4">
            <View className="w-[10%]">
              <View className={"flex-row justify-center items-center bg-white h-[50px]  border-[#DFDFDF] border-[1px] w-[50px] rounded-full" }>
                <View className="mt-[10px]">
                {Change_Icon(item.type)}
                </View>
              </View>
            </View>
        
            <View className="ml-[25px]">
                <Text className="font-medium text-[16px] ">{Content(item.type)}</Text>
                <Text className="text-[12px] font-light ml-[-3] mt-2"> {item.createdAt} </Text>
                <Text className="text-[12px] font-light ml-[-3] mt-1"> Số dư ví: </Text>
            </View>
            <View className="ml-auto mt-auto">
              <Text className="text-[16px] font-semibold">
                {item.amount}
              </Text>
            </View>
         </View>
      </View>
        </TouchableOpacity>
         
    )
}
export default Item_Transaction