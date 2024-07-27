import { View, Text, TouchableOpacity,Image } from "react-native";
import { router } from "expo-router";
export default function ItemUser({item,wallet}){
    const data ={item,wallet:JSON.parse(wallet)}
    return(
        <TouchableOpacity onPress={()=>{router.push({pathname:'home/confirm-send',params: { item: JSON.stringify(data) }})}} className="flex-row items-centerp my-1 m-2 bg-white">
            <Image className="w-[50px] h-[50px] rounded-full"
            source={{
                uri: item?.avartar ? item?.avartar : 'https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-7&_nc_sid=136b72&_nc_ohc=HNv6-cLkGacQ7kNvgHYwj8W&_nc_ht=scontent.fsgn2-4.fna&oh=00_AYC6b_b8RfM9LiLTEQWAgK3AzEoUq7ug5jXE6quJ9aNfVQ&oe=66CCCFB8',
            }}
            ></Image>
            <View className="px-2">
                <Text className="font-semibold text-lg">{item?.full_name ? item?.full_name : "No name"}</Text>
                <Text>{item?.email}</Text>
            </View>
        </TouchableOpacity>
        )
}