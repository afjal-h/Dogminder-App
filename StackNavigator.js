import { StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//screens
import WelcomeScreen from './Screens/WelcomeScreen'
import SignUpScreen from './Screens/SignUpScreen'
import SignUpInfoScreen from './Screens/SignUpInfoScreen';
import ProfileScreen from './Screens/ProfileScreen'
import SearchScreen from './Screens/SearchScreen'
import BookScreen from './Screens/BookScreen'
import EditProfileScreen from './Screens/EditProfileScreen'
import PasswordResetScreen from './Screens/PasswordResetScreen'
import MinderProfile from './Screens/MinderProfile'
import PaymentScreen from './Screens/PaymentScreen'
const Stack = createNativeStackNavigator();
function WelcomeStackScreen() {
  return (

    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="WelcomePage" component={WelcomeScreen} />
      <Stack.Screen name="SignUpPage" component={SignUpScreen} />
      <Stack.Screen name="SignUpInfoPage" component={SignUpInfoScreen} />
      <Stack.Screen name="PasswordResetPage" component={PasswordResetScreen} />
      <Stack.Screen name="HomePage" component={TabNav} />

    </Stack.Navigator>
  )
}
function ProfileStackScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ProfilePage" component={ProfileScreen} />
      <Stack.Screen name="EditProfilePage" component={EditProfileScreen} />

    </Stack.Navigator>
  )


}


function SearchStackScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SearchPage" component={SearchScreen} />
      <Stack.Screen name="MinderScreen" component={MinderProfile} />
      <Stack.Screen name="PaymentPage" component={PaymentScreen}/>
    </Stack.Navigator>
  )

}
function BookStackScreen() {

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BookPage" component={BookScreen} />
    </Stack.Navigator>
  )


}
const Tab = createBottomTabNavigator();

function TabNav() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Book') {
            iconName = focused
              ? 'book-outline'
              : 'book-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search-outline' : 'search-outline';
          }
          else if (route.name === 'Profile') {
            iconName = focused ? 'person-outline' : 'person-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Book" component={BookStackScreen} />
      <Tab.Screen name="Search" component={SearchStackScreen} />
      <Tab.Screen name="Profile" component={ProfileStackScreen} />
    </Tab.Navigator>
  )

}

export default WelcomeStackScreen

const styles = StyleSheet.create({})