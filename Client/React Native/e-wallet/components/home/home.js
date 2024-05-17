import {  Text, View, TextInput, Button, Image,Pressable,Linking,TouchableOpacity } from 'react-native';
import Transfer from '../transfer/transfer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Menu from '../menu/menu';

const Stack = createNativeStackNavigator();

function Index({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity className="flex-col items-center"  onPress={() => navigation.navigate('Transfer')}>
        <Image className='w-[33px] h-[31px]' source={require('../../assets/gif/transfer.gif')}></Image>
        <Text >Chuyển tiền</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function Home(){
  return(  
        <Stack.Navigator
        screenOptions={{
          headerShown: false,
        
          }}>
          <Stack.Screen name="Index" component={Index} 
        />
          <Stack.Screen name="Transfer" component={Transfer} />
        </Stack.Navigator>
  )
}

