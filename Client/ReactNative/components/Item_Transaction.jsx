import { Text, View, TextInput, Image, TouchableOpacity} from "react-native";
import React, {useState} from "react";
import Sim from "../assets/svg/sim.svg"
import Bank_Transfer from "../assets/svg/bank_transfer.svg";
import { router } from "expo-router";
import format from "../utils/fomart_currency";
import { formatTime } from "../utils/fomart_currency";
import Pay from '../assets/svg/pay.svg'
const Change_Icon = (type) => {
  if (type === "transfer"){
    return <Sim/>
  }
  else if (type === "deposit"){
    return <Bank_Transfer/>
  }
  else if (type === "payment"){
    return <Pay className="w-[20px]"/>
  }
} 
const Content = (type)=>{
  if(type==="transfer"){
    return "Nhận tiền"
  }
}
const convertTitle = (id,sender,receiver)=>{
  console.log(sender )
  console.log(receiver)
  if(sender?._id === id){
    return 'Chuyển tiền đến ' + receiver?.full_name
  }
  if(receiver?._id === id){
    return 'Nhận tiền từ ' + sender?.full_name
  }
}
const Item_Transaction = ({index,item,id}) => {
    return( 
        // <TouchableOpacity onPress={()=>{router.push('transaction-history/transaction-details')}}>
        <View className={index%2 === 0 ? "bg-white h-[85px]" :"bg-gray-50 h-[85px]"}>
         <View className="flex-row items-center  p-4">
         
            <View className="ml-[25px]">
                <Text className="font-medium text-[16px] ">{convertTitle(id,item?.sender,item?.receiver)}</Text>
                <Text className="text-[12px] font-light ml-[-3] mt-2"> {formatTime(item?.createdAt)} </Text>
                <Text className="text-[12px] font-light ml-[-3] mt-1"> {item?.message} </Text>
            </View>
            <View className="ml-auto mt-auto">
              <Text className="text-[16px] font-semibold">
                {format.formatCurrency(item.amount,item?.currency?.symbol ? item?.currency?.symbol : 'VND')}  
              </Text>
            </View>
         </View>
      </View>
        // </TouchableOpacity>
         
    )
}
export default Item_Transaction