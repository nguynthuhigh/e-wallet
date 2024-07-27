import { View, Text, TouchableOpacity,Image } from "react-native";
import { router } from "expo-router";
export default function ItemUser({item,wallet}){
    const data ={item,wallet:JSON.parse(wallet)}
    return(
        <TouchableOpacity onPress={()=>{router.push({pathname:'home/confirm-send',params: { item: JSON.stringify(data) }})}} className="flex-row items-centerp my-1 m-2 bg-white">
            <Image className="w-[50px] h-[50px] rounded-full"
            source={{
                uri: item?.avarta ? item?.avarta : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNFPx_5UeN24Si_c-S11x4Xq0T10ydstaLig&s',
            }}
            ></Image>
            <View className="px-2">
                <Text className="font-semibold text-lg">{item?.name ? item?.name : "No name"}</Text>
                <Text>{item?.email}</Text>
            </View>
        </TouchableOpacity>
        )
}