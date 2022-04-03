import { useNavigation } from "@react-navigation/native";
import { View, Text, TextInput, Alert, TouchableOpacity, Button, Image, StyleSheet } from "react-native";
<<<<<<< HEAD
import { auth } from '../firebase';
import { useEffect, useState } from "react";
=======
import { useState } from "react";
>>>>>>> 51a9ae76305bc01d96c6163ef3f1ab3b953b54ad




function SignUpScreen(props) {
    const navigation = useNavigation(); //this is a variable that needs to be initialised on every page so that buttons can be used to navigate to different pages
<<<<<<< HEAD
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');


    useEffect(() => { //checks and authenticates login info with the google firebase server
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.replace('HomePage')
            }
        })

        return unsubscribe

    }, [])

    const handleLogin = () => {
        auth.signInWithEmailAndPassword(Email, Password) //compares values with the database
            .then(userCredentials => {
                const user = userCredentials.user;
            })
            .catch(error => alert(error.message))

    }



    return (

        <View style={styles.container}>

            <Image style={styles.icon} source={require('../assets/icon.png')} />
            <TextInput style={styles.inputBox}
                value={Email}
                onChangeText={text => setEmail(text)}
                placeholder="Email"
=======
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');


    return (

        <View style={styles.container}>
            <Image style={styles.icon} source={require('../assets/icon.png')} />
            <TextInput style={styles.inputBox}
                value={Username}
                onChangeText={text => setUsername(text)}
                placeholder="Username"
>>>>>>> 51a9ae76305bc01d96c6163ef3f1ab3b953b54ad
                placeholderTextColor={"#fff"} />
            <TextInput style={styles.inputBox}
                value={Password}
                onChangeText={text => setPassword(text)}
                secureTextEntry={true}
                placeholder="Password"
                placeholderTextColor={"#fff"} />





<<<<<<< HEAD
            <TouchableOpacity style={styles.LoginButton} onPress={handleLogin}>
=======
            <TouchableOpacity style={styles.LoginButton} onPress={() => navigation.replace('HomePage')}>
>>>>>>> 51a9ae76305bc01d96c6163ef3f1ab3b953b54ad
                <Text style={styles.ButtonText}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.SignUpButton} onPress={() => navigation.navigate('SignUpPage')}>
                <Text style={styles.ButtonText}>Don't have an account? Create one</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity style={styles.LoginButton} onPress={() => navigation.navigate('SearchPage')}>
                <Text style={styles.ButtonText}>Search Test</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.LoginButton} onPress={() => navigation.navigate('BookPage')}>
                <Text style={styles.ButtonText}>Book Test</Text>
            </TouchableOpacity> */}

        </View>
    );
}

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#beeede",
        alignItems: "center",
        justifyContent: "center",

    }

    ,
    icon: {
        height: 200,
        width: 200,
        borderRadius: 60,

    },

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

    SignUpButton: {
        top: 80,
        color: "#000",

    },

<<<<<<< HEAD
    backgroundVideo: {


    },

=======
>>>>>>> 51a9ae76305bc01d96c6163ef3f1ab3b953b54ad

    inputBox: {
        width: 300,
        height: 40,
        top: 30,
        borderRadius: 25,
        backgroundColor: "#bdbdbd",
        paddingHorizontal: 16,
        marginVertical: 10,

    },


})