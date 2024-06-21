import { ImageBackground, Text, View, TextInput, Button, Image,TouchableOpacity } from 'react-native';
import Icon_Bill from '../../assets//svg/statistic.svg'
export default function History(){
    return(
        <View className="flex-row w-full rounded-xl bg-white p-3 mt-5  items-center">
            <Icon_Bill width={30} height={30}></Icon_Bill>
            <View className="ml-4">
                <Text className="font-bold">Thống kê chuyển nhận tiền</Text>
                <Text>Xem tổng số tiền đã chuyển, nhận trong tháng</Text>
            </View>
        </View>
    );
}