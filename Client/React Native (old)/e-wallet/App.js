import React from 'react';
import { StyleSheet, Text, View, TextInput,Image } from 'react-native';
import { NativeWindStyleSheet } from "nativewind";
import Home from './components/home/home';
import Account from './components/account/account'
import History from './components/transaction history/history';
import Promotion from './components/promotion/promotion';
import Scan from './components/scan/scan';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LottieView from 'lottie-react-native';
const Tab = createBottomTabNavigator();
NativeWindStyleSheet.setOutput({
  default: "native",
});
const TabNavigation =()=>{
 return(
  <Tab.Navigator
  screenOptions={{
  headerShown: false,
  tabBarShowLabel: false,
  tabBarStyle:{height:'11%'}
  }} className="font-bold"
  >
  <Tab.Screen 
      name="Home" 
      component={Home}
    
      options={{
        tabBarIcon: ({ focused }) => (
          <View className="w-[50px] mr-6 items-center " >
            <View className={focused ? "w-full h-[2px] rounded-full bg-[#0094FF] top-[-15]" : "w-full h-[2px] top-[-12]"} />
            <Image
              source={require('./assets/menu/home.png')} 
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#0094FF' : 'gray' 
              }}
            />
            <Text style={{ color: focused ? '#0094FF' : 'gray'}} className="mt-[5px] text-xs">Home</Text>
          </View>
        )
      }}
      
     
   
      
  />
  <Tab.Screen 
      name="Ưu đãi" 
      component={Promotion} 
      options={{
      tabBarIcon: ({ focused }) => (
          <View className="w-[50px] mr-6 items-center " >
          <View className={focused ? "w-full h-[2px] rounded-full bg-[#0094FF] top-[-15]" : "w-full h-[2px] top-[-12]"}/>
          <Image
              source={require('./assets/menu/promotion.png')} 
              style={{
              width: 25,
              height: 25,
              tintColor: focused ? '#0094FF' : 'gray' 
              }}
          />
          <Text style={{ color: focused ? '#0094FF' : 'gray'}}  className="mt-[5px] text-xs">Ưu đãi</Text>
          </View>
      )
      }}/>
      <Tab.Screen 
          name="Scan" 
          component={Scan} 
          options={{
          tabBarIcon: ({ focused }) => (
              <View className="w-[120px] flex items-center top-[-20]" >
              <View className="flex-col items-center">

                  <Image
                  source={require('./assets/menu/scan_bg.png')} 
                  style={{
                      width: 120,
                      height: 77,
                  }} className='absolute top-[-8]'
                  />
                  
                  <LottieView
                    style={{flex:1,width:60, height:60}}
                    source={require('./assets/animation/qr_scan.json')}
                    autoPlay
                    loop
                  />
                  <Text style={{ color: focused ? '#0094FF' : 'gray'}} className="z-10 mt-1 text-xs" >Quét mọi QR</Text>

              </View>
              </View>
          )
          }}/>
  <Tab.Screen  name="History" component={History}
      options={{
      tabBarIcon: ({ focused }) => (
          <View className=" w-[80px] ml-6 items-center " >
          <View className={focused ? "w-full h-[2px] rounded-full bg-[#0094FF] top-[-15]" : "w-full h-[2px] top-[-12]"}/>
          <Image
              source={require('./assets/menu/history.png')} 
              style={{
              width: 25,
              height: 25,
              tintColor: focused ? '#0094FF' : 'gray' 
              }}
          />
          <Text style={{ color: focused ? '#0094FF' : 'gray'}}  className="mt-[5px] text-xs">Lịch sử GD</Text>
          </View>
      )
      }} 
  />
  <Tab.Screen name="Account" component={Account} 
      options={{
      tabBarIcon: ({ focused }) => (
          <View className="w-[70px] items-center " >
          <View className={focused ? "w-full h-[2px] rounded-full bg-[#0094FF] top-[-15]" : "w-full h-[2px] top-[-12]"}/>
          <Image
              source={require('./assets/menu/account.png')} 
              style={{
              width: 25,
              height: 25,
              tintColor: focused ? '#0094FF' : 'gray' 
              }}
          />
          <Text style={{ color: focused ? '#0094FF' : 'gray'}} className="mt-[5px] text-xs">Tôi</Text>
          </View>
      )
      }}
  />
  </Tab.Navigator>
 )
}
//web: npx expo start --web
export default function App() {
  return (
    <NavigationContainer>
        <TabNavigation></TabNavigation>
    </NavigationContainer>    
  );
}


// const getRouteName = route =>{
//   const routeName = getFocusedRouteNameFromRoute(route);
//   console.log(routeName);
//   if(routeName?.includes ("Checkout") || routeName?.includes ("Payment")){
//   return "none"
//   }

//   return "flex"
// }


