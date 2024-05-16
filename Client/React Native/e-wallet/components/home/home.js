import {  Text, View, TextInput, Button, Image,Pressable,Linking } from 'react-native';
import Transfer from '../transfer/transfer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Menu from '../menu/menu';

const Stack = createNativeStackNavigator();

function Index({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to Transfer"
        onPress={() => navigation.navigate('Transfer')}
      />
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

