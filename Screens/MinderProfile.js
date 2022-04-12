import { useNavigation } from "@react-navigation/native";
import { View, Text, TextInput, Alert, TouchableOpacity, Button, Image, StyleSheet } from "react-native";
import { auth } from '../firebase';
import { useEffect, useState } from "react";




function SignUpScreen(profile) {




    return (

        <View style={styles.container}>

            <Image
                style={{ width: 100, height: 100, borderRadius: 75, backgroundColor: '#696880' }}
                source={{
                    uri: profile.route.params.Pic,
                }} />
            <View
                style={styles.box}>

                <Text
                    style={{ fontWeight: 'bold', fontSize: 30, textAlign: "center" }}>{profile.route.params.Name}</Text>
                <Text style={{ textAlign: "center" }}>{profile.route.params.Location}</Text>
                <Text
                    style={{ textAlign: 'left', width: 350, top: 15 }}>{profile.route.params.Bio}</Text>
                <Text
                    style={{ fontWeight: 'bold', fontSize: 20, top: 30, textAlign: "center" }}>{profile.route.params.Price} Per Hour</Text>
                <TouchableOpacity style={styles.LoginButton} >
                    <Text style={styles.ButtonText}>Book Now</Text>
                </TouchableOpacity>

            </View>



        </View>
    );
}

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fee4cb",
        alignItems: "center",
        justifyContent: "center",

    },
    box: {
        width: "95%",
        borderRadius: 20,
        backgroundColor: "#ddbc9b",
        paddingHorizontal: 16,
        marginVertical: 10,





    },

    icon: {
        height: 200,
        width: 200,
        borderRadius: 60,

    },

    LoginButton: {


        width: 100,
        top: 30,
        left: "36%",
        borderRadius: 25,
        backgroundColor: "#91877D",
        paddingVertical: 10,

        marginVertical: 10,

    },

    ButtonText: {
        textAlign: "center",
        color: "#000000"

    },

    SignUpButton: {

        top: 80,

    },


    inputBox: {
        width: 300,
        height: 40,
        top: 30,
        borderRadius: 25,
        backgroundColor: "#BBB0A5",
        paddingHorizontal: 16,
        marginVertical: 10,

    },


})