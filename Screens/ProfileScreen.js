import { StyleSheet, TouchableOpacity, Text, View, Button } from 'react-native'
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
            <Text>This is where the profile options will be</Text>
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
    
})
