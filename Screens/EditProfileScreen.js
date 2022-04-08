import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Alert, Touchab, Button, Image, StyleSheet, TextInput } from "react-native";

import { db } from '../firebase';
import { auth } from '../firebase';



import React from 'react'
import { Avatar, Title, Caption, TouchableRipple, } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



function EditProfileScreen(props) {
    const navigation = useNavigation();
    const [phone, setPhone] = useState('');
    const [location, setLocation] = useState('');
    const [Bio, setBio] = useState('');




    const handleSignUp = () => { //firebase authentication so that info is sent to database
        db.collection("users")
            .doc(auth.currentUser.uid)
            .update({
                phone: phone,
                location: location,
                bio: Bio
            })
        navigation.replace('SignUpInfoPage')

    }






    return (
        <View style={styles.container}>
            <Image style={styles.icon} source={require('../assets/icon.png')} />




            <TextInput style={styles.inputBox}
                value={phone}
                keyboardType="numeric"
                onChangeText={setPhone}
                placeholder="Phone Number"
                placeholderTextColor={"#fff"} />

            <TextInput style={styles.inputBox}
                value={location}
                onChangeText={setLocation}
                placeholder="Location"
                placeholderTextColor={"#fff"} />
            <TextInput style={styles.inputBox}
                value={Bio}
                onChangeText={setBio}
                placeholder="Bio"
                placeholderTextColor={"#fff"} />








            <TouchableRipple onPress={handleSignUp}>
                <View style={[styles.update, { marginTop: 50, marginLeft: -30 }]}>
                    <Icon name='account-edit' color="#FF6347" size={25} />
                    <Text style={[styles.menuItemText, { marginTop: -20, marginLeft: 32 }]}>Update</Text>
                </View>
            </TouchableRipple>


            <TouchableRipple onPress={() => navigation.navigate('ProfilePage')}>
                <View style={[styles.update, { marginTop: 20, marginLeft: -30 }]}>
                    <Icon name='account-edit' color="#FF6347" size={25} />
                    <Text style={[styles.menuItemText, { marginTop: -20, marginLeft: 32 }]}>Back To Profile</Text>
                </View>
            </TouchableRipple>


        </View>
    );
}

export default EditProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fee4cb",
        alignItems: "center",
        justifyContent: "center",


    }

    ,
    LoginButton: {
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
    SigninButton: {
        top: 80,
        color: "#000",

    },


    inputBox: {
        width: 250,
        height: 30,
        top: 30,
        borderRadius: 25,
        backgroundColor: "#bdbdbd",
        paddingHorizontal: 16,
        marginVertical: 10,

    },
    icon: {
        height: 50,
        width: 50,
        borderRadius: 60,

    },


})