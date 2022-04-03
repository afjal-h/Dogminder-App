<<<<<<< HEAD
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import { auth } from '../firebase';
import { useNavigation } from "@react-navigation/native";
import React from 'react'

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


    return (
        <View style={styles.container}>
            <Text>HomeScreen</Text>
            <TouchableOpacity style={styles.LoginButton} onPress={handleSignOut}>
                <Text style={styles.ButtonText}>Sign Out</Text>
            </TouchableOpacity>
        </View>


    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#beeede",
        alignItems: "center",
        justifyContent: "center",

    }
})
=======
import React from 'react';
import { View, Text, Alert, TouchableOpacity, Button, Image, StyleSheet, TextInput } from "react-native";

function HomeScreen(props) {
    return (
        <Text>This is our home screen</Text>
    );
}

export default HomeScreen;
>>>>>>> 51a9ae76305bc01d96c6163ef3f1ab3b953b54ad
