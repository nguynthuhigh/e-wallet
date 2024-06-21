import { View, Text } from 'react-native'
import React from 'react'
import Arrow_More from "../assets/svg/arrow_more.svg";
import ETH from "../assets/svg/eth.svg";
const Item = () => {
    return (
        <View className="flex-row w-full my-3">
        <ETH className="ml-2"></ETH>
        <Text className="ml-5 font-bold text-[14px]">Mua Ethereum</Text>
        <View className="ml-auto">
          <Arrow_More ></Arrow_More>
        </View>
      </View>
      )
}

export default Item