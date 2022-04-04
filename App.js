import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import StackNavigator from './StackNavigator';



export default function App() {

  return (
    <NavigationContainer>
      <StackNavigator />

    </NavigationContainer>
  );
}




