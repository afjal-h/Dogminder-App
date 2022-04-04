import { StyleSheet, TouchableOpacity, Text, View, Button, Image, SafeAreaView } from 'react-native'
import { auth } from '../firebase';
import { useNavigation } from "@react-navigation/native";
import React from 'react'
import {Avatar, Title, Caption, TouchableRipple,} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScreen = () => {
    const navigation = useNavigation();
    const handleSignOut = () => {
        auth
            .signOut()
            .then(() => {
                navigation.replace("WelcomePage")
            })
            .catch(error => alert(error.message))

    

    }
    const handleEditProfile = () => {
        navigation.replace("EditProfilePage")
        .catch(error => alert(error.message))
    }


    return (
        <SafeAreaView style={styles.container}>
            <View style = {styles.userInfoSection}>
                <View style = {{flexDirection: 'row', marginTop: 15, marginLeft: 15}}>
                    <Avatar.Image source={require('../assets/icon.png')}
                    size = {80} />
                </View>
            </View>
            <View style = {{marginLeft: 105}}>
                <Title style = {[styles.title, {marginTop:-60, marginBottom:5,}]}>John Doe</Title>
            </View>
            <View style ={styles.userInfoSection}>
                <View style ={[styles.row, {marginTop:30, marginLeft:10}]}>
                    <Icon name='map-marker-radius' size={20}  />
                    <Text style = {{color: "#777777",marginLeft: 25, marginTop:-20 }}>London,England</Text>
                </View>
            </View>
            <View style ={styles.userInfoSection}>
                <View style ={[styles.row, {marginTop:20, marginLeft:10}]}>
                    <Icon name='phone' size={20}  />
                    <Text style = {{color: "#777777",marginLeft: 25, marginTop:-20 }}>+443546861291</Text>
                </View>
            </View>
            <View style ={styles.userInfoSection}>
                <View style ={[styles.row, {marginTop:20, marginLeft:10}]}>
                    <Icon name='email' size={20}  />
                    <Text style = {{color: "#777777",marginLeft: 25, marginTop:-20 }}>naim@outlook.com</Text>
                </View>
            </View>

            <View style = {[styles.menuWrapper,  {marginTop:20, marginLeft:10,}]}>
                <TouchableRipple onPress={handleSignOut}>
                    <View style = {styles.menuItem}>
                        <Icon name='account-off' color="#FF6347" size={25}/>
                        <Text style={[styles.menuItemText, {marginTop:-20, marginLeft:32}]}>Sign Out</Text>
                    </View>
                </TouchableRipple>

                <TouchableRipple onPress={handleEditProfile}>
                    <View style = {styles.menuItem}>
                        <Icon name='account-edit' color="#FF6347" size={25}/>
                        <Text style={[styles.menuItemText, {marginTop:-20, marginLeft:32}]}>Edit Profile</Text>
                    </View>
                </TouchableRipple>

            </View>

            
            
            
        </SafeAreaView>

        


    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#beeede",
        

    }
    ,
    LoginButton:{
        width: 100,
        top: 30,
        borderRadius: 25,
        backgroundColor: "#bdbdbd",
        paddingVertical: 10,

        marginVertical: 10,
        backgroundColor: "#808080",
    },
    ButtonText: {
        textAlign: "center",
        color: "#fff"

    },

    userImg: {
        height:150,
        width: 150,
        borderRadius: 75,

    },
    
})
