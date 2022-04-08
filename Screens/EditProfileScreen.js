import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Alert, Touchab, Button, Image, StyleSheet, TextInput } from "react-native";

import { db } from '../firebase';
import { auth } from '../firebase';

import {  TouchableOpacity, SafeAreaView } from 'react-native'
import { useEffect } from "react";


import React from 'react'
import { Avatar, Title, Caption, TouchableRipple, } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { setSelectedLog } from 'react-native/Libraries/LogBox/Data/LogBoxData';



function EditProfileScreen(props) {
    const navigation = useNavigation();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [location, setLocation] = useState('');
    const [DogName, setDogname] = useState('');
    const [Breed, setBreed] = useState('');
    const [password, setPassword] = useState('');


    const firebaseConfig = {
      apiKey: "AIzaSyBuJCiTSzQ9IMLSfMM8eRt5IRhyDnZHKzk",
      authDomain: "dogminder-app.firebaseapp.com",
      projectId: "dogminder-app",
      storageBucket: "dogminder-app.appspot.com",
      messagingSenderId: "103039684105",
      appId: "1:103039684105:web:144ac5e4dd5a4f1628f2d8",
      measurementId: "G-YXSFFWLZ1H"
  };


  async function getUser() {
    
    

}
   

    const handleSignUp = () => { //firebase authentication so that info is sent to database
      const cityRef = db.collection('users').doc(auth.currentUser.uid);
    const doc =  cityRef.get();
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
    password1 = UserData.phone

      if (password !== password1) { //checks to see if passwords match
        Alert.alert("Passwords do not match!")
    }
        

        else {
            auth.createUserWithEmailAndPassword(email)
                .then(result => {
                    db.collection("users")
                        .doc(auth.currentUser.uid)
                        .set({
                            username,
                            email,
                            phone,
                            location,
                            DogName,
                            Breed
                        })
                    console.log(result)
                    
                })
                .catch(error => alert(error.message)) //shows error message from api in the form of an alert

        

              }

    }


    return (
        <View style={styles.container}>
            <Image style={styles.icon} source={require('../assets/icon.png')} />
            <TextInput style={styles.inputBox}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
                placeholderTextColor={"#fff"} />



            <TextInput style={styles.inputBox}
                value={email}
                onChangeText={setEmail}
                placeholder="Email"
                placeholderTextColor={"#fff"} />

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
                value={DogName}
                onChangeText={setDogname}
                placeholder="Dog Name"
                placeholderTextColor={"#fff"} />

            
            <TextInput style={styles.inputBox}
                value={Breed}
                onChangeText={setBreed}
                placeholder="Breed"
                placeholderTextColor={"#fff"} />

            <TextInput style={styles.inputBox}
                value={password}
                onChangeText={setPassword}
                placeholder="Input Password"
                placeholderTextColor={"#fff"}
                secureTextEntry={true} />




            



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