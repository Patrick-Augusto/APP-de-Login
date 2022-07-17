
import React from 'react';
import Login from './Screens/Entrada';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Signin from './Screens/Regsitro';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LogIn" component={Login} options={{
          title: 'Login',
          headerStyle: {
            backgroundColor: '#191919',
          },
          headerTintColor: '#00008B',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
        }}/>
        <Stack.Screen name="Signin" component={Signin} options={{
          title: 'SignIn',
          headerStyle: {
            backgroundColor: '#191919',
          },
          headerTintColor: '#00008B',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}


