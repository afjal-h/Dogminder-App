import { StyleSheet, TouchableOpacity, Text, View, Button, Image, SafeAreaView } from 'react-native'
import { auth } from '../firebase';
import { useNavigation } from "@react-navigation/native";
import React from 'react'
import { Avatar, Title, Caption, TouchableRipple, } from 'react-native-paper'
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


    return (
        <Text>HelloWorld</Text>

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
