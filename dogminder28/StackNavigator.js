import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import WelcomeScreen from './Screens/WelcomeScreen'
import SignUpScreen from './Screens/SignUpScreen'
import LoginScreen from './Screens/LoginScreen'
import SearchScreen from './Screens/SearchScreen'
import BookScreen from './Screens/BookScreen'
import HomeScreen from './Screens/HomeScreen'
const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Group>
        <Stack.Screen name="WelcomePage" component={WelcomeScreen} />
        <Stack.Screen name="SignUpPage" component={SignUpScreen} />
        <Stack.Screen name="LoginPage" component={LoginScreen} />
        <Stack.Screen name="SearchPage" component={SearchScreen} />
        <Stack.Screen name="BookPage" component={BookScreen} />
        <Stack.Screen name="HomePage" component={HomeScreen}/>

      </Stack.Group>
    </Stack.Navigator>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})