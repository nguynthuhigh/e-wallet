import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding from './component/onboarding'; // Đảm bảo đường dẫn đúng
import Welcome from './welcome'; // Đảm bảo đường dẫn đúng

const Stack = createStackNavigator();

const AppJS = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="onboarding">
        <Stack.Screen name="onboarding" component={Onboarding} />
        <Stack.Screen name="welcome" component={Welcome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppJS;
