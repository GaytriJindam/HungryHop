import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Index from './app/(tabs)/Index'; // Adjusted import path
import Menu from './app/components/Menu'; // Correct path to Menu component
import Orders from './app/components/Orders'; // Correct path to Orders component
import Profile from './app/(tabs)/Profile'; // Correct path to Profile component
import Login from './app/components/Login'; // Correct path to Login component
import EditProfileScreen from './app/components/EditProfile'; // Correct path to EditProfile component
import LogoutScreen from './app/components/Logout'; // Correct path to Logout component

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* Ensure route names match exactly with navigation logic */}
        <Stack.Screen name="Home" component={Index} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Orders" component={Orders} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="EditProfile" component={EditProfileScreen} />
        <Stack.Screen name="Logout" component={LogoutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
