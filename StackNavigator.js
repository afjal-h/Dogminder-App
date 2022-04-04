import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//screens
import WelcomeScreen from './Screens/WelcomeScreen'
import SignUpScreen from './Screens/SignUpScreen'
import HomeScreen from './Screens/HomeScreen'
import SearchScreen from './Screens/SearchScreen'
import BookScreen from './Screens/BookScreen'
const Stack = createNativeStackNavigator();
function WelcomeStackScreen(){
  return (

    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="WelcomePage" component={WelcomeScreen} />
        <Stack.Screen name="SignUpPage" component={SignUpScreen} />
        <Stack.Screen name="HomePage" component={TabNav}/>
    </Stack.Navigator>
  )
}
function HomeStackScreen(){
  return(
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="HomePage" component={HomeScreen} />
  </Stack.Navigator>
  )

  
}

function SearchStackScreen(){
  return(
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="SearchPage" component={SearchScreen} />
  </Stack.Navigator>
  )
  
}
function BookStackScreen(){

  return(
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="BookPage" component={BookScreen} />
  </Stack.Navigator>
  )

  
}
const Tab= createBottomTabNavigator();

function TabNav(){
  return(
  <Tab.Navigator>
  <Tab.Screen name="Home" component={HomeScreen}/>
  <Tab.Screen name="Search" component={SearchScreen}/>
  <Tab.Screen name="Book" component={BookScreen}/>
</Tab.Navigator>
  )

}

export default WelcomeStackScreen

const styles = StyleSheet.create({})