import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import StackNavigator from './StackNavigator';
import SearchScreen from './Screens/SearchScreen';




export default function App() {

  return (
    <NavigationContainer>
      <StackNavigator />

    </NavigationContainer>
  );
}




