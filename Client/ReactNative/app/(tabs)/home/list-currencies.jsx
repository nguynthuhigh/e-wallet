import { Text,View,TouchableOpacity,SafeAreaView } from "react-native"
import { useLocalSearchParams } from "expo-router"
import currency from '../../../utils/fomart_currency'
import { router } from "expo-router"
export default function ListCurrencies(){
    const {item} = useLocalSearchParams()
    const walletData = JSON.parse(item)
    return(
        <SafeAreaView>
           <View className="bg-white h-full">
              <View className="p-6">
                    <Text className="text-black mx-auto font-iBold text-[20px]">Tài sản</Text>
                    <Currency item={walletData?.currencies[0]} name="Vietnamese Dong" symbol="VND"></Currency> 
                    <Currency item={walletData?.currencies[1]} name="US DOllar" symbol="USD"></Currency>
                    <Currency item={walletData?.currencies[2]} name="Ethereum" symbol="ETH"></Currency>
              </View>
          </View>
        </SafeAreaView>
       
    )
}


const Currency = ({item,name,symbol})=>{
  
    const data = {
      item,name,symbol
    }
    console.log(data)
    return(
      <TouchableOpacity onPress={()=>{router.push({pathname: 'home/search-result', params:{item:JSON.stringify(data)}})}}>
        <View className="py-2 flex-row">
          <View>
            </View>
            <View>
              <Text className="text-[#868686] font-iRegular text-[15px]">{name}</Text>
              <Text className="text-black font-iBold text-[18px]">{currency.formatCurrency(item?.balance,symbol)}</Text>
            </View>
        </View>
      </TouchableOpacity>
    )
     
  }