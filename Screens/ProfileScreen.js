import { StyleSheet, TouchableOpacity, Text, View, Button, Image, SafeAreaView } from 'react-native'
import { useEffect, useState } from "react";
import { auth } from '../firebase';
import { useNavigation } from "@react-navigation/native";
import React from 'react'
import { Avatar, Title, Caption, TouchableRipple, } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { db } from '../firebase';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
const HomeScreen = () => {
    const navigation = useNavigation();
    var UserData = {}
    const [username, setUsername] = useState('');
    const [phone, setPhone] = useState('');
    const [location, setLocation] = useState('');
    const handleSignOut = () => {
        auth
            .signOut()
            .then(() => {
                navigation.replace("WelcomePage")
            })
            .catch(error => alert(error.message))
    }
    const firebaseConfig = {
        apiKey: "AIzaSyBuJCiTSzQ9IMLSfMM8eRt5IRhyDnZHKzk",
        authDomain: "dogminder-app.firebaseapp.com",
        projectId: "dogminder-app",
        storageBucket: "dogminder-app.appspot.com",
        messagingSenderId: "103039684105",
        appId: "1:103039684105:web:144ac5e4dd5a4f1628f2d8",
        measurementId: "G-YXSFFWLZ1H"
    };

    const app = initializeApp(firebaseConfig);

    //fetch info from database for specific user

    async function getUser() {
        const cityRef = db.collection('users').doc(auth.currentUser.uid);
        const doc = await cityRef.get();
        if (!doc.exists) {
            console.log('No such document!');
        } else {
            console.log(doc.data());
            UserData = doc.data();
            console.log(UserData);
        }
        console.log(JSON.stringify(UserData.username))
        setUsername(UserData.username)
        setLocation(UserData.location)
        setPhone(UserData.phone)

    }

    getUser();


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.userInfoSection}>
                <View style={{ flexDirection: 'row', marginTop: 15, marginLeft: 15 }}>
                    <Avatar.Image source={require('../assets/icon.png')}
                        size={80} />
                </View>
            </View>
            <View style={{ marginLeft: 105 }}>
                <Title style={[styles.title, { marginTop: -60, marginBottom: 5, }]}>{username}</Title>
            </View>
            <View style={styles.userInfoSection}>
                <View style={[styles.row, { marginTop: 30, marginLeft: 10 }]}>
                    <Icon name='map-marker-radius' size={20} />
                    <Text style={{ color: "#777777", marginLeft: 25, marginTop: -20 }}>{location}</Text>
                </View>
            </View>
            <View style={styles.userInfoSection}>
                <View style={[styles.row, { marginTop: 20, marginLeft: 10 }]}>
                    <Icon name='phone' size={20} />
                    <Text style={{ color: "#777777", marginLeft: 25, marginTop: -20 }}>{phone}</Text>
                </View>
            </View>
            <View style={styles.userInfoSection}>
                <View style={[styles.row, { marginTop: 20, marginLeft: 10 }]}>
                    <Icon name='email' size={20} />
                    <Text style={{ color: "#777777", marginLeft: 25, marginTop: -20 }}>{auth.currentUser.email}</Text>
                </View>
            </View>

            <View style={[styles.menuWrapper, { marginTop: 20, marginLeft: 10, }]}>
                <TouchableRipple onPress={handleSignOut}>
                    <View style={styles.menuItem}>
                        <Icon name='account-off' color="#FF6347" size={25} />
                        <Text style={[styles.menuItemText, { marginTop: -20, marginLeft: 32 }]}>Sign Out</Text>
                    </View>
                </TouchableRipple>

                <TouchableRipple onPress={() => navigation.navigate('EditProfilePage')}>
                    <View style={styles.menuItem}>
                        <Icon name='account-edit' color="#FF6347" size={25} />
                        <Text style={[styles.menuItemText, { marginTop: -20, marginLeft: 32 }]}>Edit Profile</Text>
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
        backgroundColor: "#fee4cb",


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

    userImg: {
        height: 150,
        width: 150,
        borderRadius: 75,

    },

})
