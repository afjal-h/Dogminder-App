import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from '@react-navigation/stack';

//screens
import WelcomeScreen from './Screens/WelcomeScreen'
import SignUpScreen from './Screens/SignUpScreen'
import ProfileScreen from './Screens/ProfileScreen'
import SearchScreen from './Screens/SearchScreen'
import BookScreen from './Screens/BookScreen'
import EditProfileScreen from './Screens/EditProfileScreen'
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
function ProfileStackScreen(){
  return(
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="ProfilePage" component={ProfileScreen} />
    <Stack.Screen name="EditProfilePage" component={EditProfileScreen} />
    
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
      <Tab.Screen name="Book" component={BookStackScreen}/>
  <Tab.Screen name="Search" component={SearchStackScreen}/>
  <Tab.Screen name="Profile" component={ProfileStackScreen}/>
</Tab.Navigator>
  )

}

export default WelcomeStackScreen

const styles = StyleSheet.create({})