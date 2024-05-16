import { ImageBackground, Text, View, TextInput, Button, Image,FlatList } from 'react-native';
import User from './user';
import { UserData } from '../../dummy data/user';

import { FlatGrid } from 'react-native-super-grid';
export default function Recommend_User(){
    return(
    <View className="p-4 w-full bg-white rounded-xl mt-5">
        <Text className="font-bold">Đề xuất</Text>
        <View className="w-full flex-row flex-wrap">
            {UserData.map((item, key)=>(
                <User {...item} key = {key}></User>
            ))}
        </View>
        {/* <FlatList
            className="w-full"
            
            data={[1, 2, 3, 4, 5, 6,7]}
            renderItem={({ item }) => (<User></User>)}
            numColumns={5}
            />
        </View> */}

    </View>
    );
}