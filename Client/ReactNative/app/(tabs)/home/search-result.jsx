import { View, TextInput, SafeAreaView, ScrollView, Text, TouchableOpacity,FlatList,Image } from "react-native";
import Search from "../../../assets/svg/search.svg";
import { useState,useEffect } from "react";
import searchAPI from '../../api/search.api'
import ItemUser from "../../../components/Item_User";
import {getUser} from '../../../dummy-data/data'
export default function SearchResult(){
    const [isLoading,setIsLoading] = useState(false)
    const [query, setQuery] = useState('');
    useEffect(()=>{
        fetchData()

    })
    const fetchData = async()=>{
        const respone = await searchAPI.getUser()    
    }
    if(isLoading == true){
        return 
    }

    return(<SafeAreaView >
        <View className="px-4 bg-white">
            <View className="w-full h-9 bg-white mr-3 flex-row items-center rounded-3xl px-2">
                <Search width={30} height={30} />
                    <TextInput
                    className="flex-1 h-full justify-center">
                    </TextInput>
            </View>
            <FlatList
                data={getUser}
                renderItem={({ item }) => <ItemUser item={item} />}
                keyExtractor={item => item.id}
                >
            </FlatList>
          
        </View>
    </SafeAreaView>)
}