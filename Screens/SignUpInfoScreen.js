import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Alert, TouchableOpacity, Button, Image, StyleSheet, TextInput } from "react-native";

import { db } from '../firebase';
import { auth } from '../firebase';



function SignUpScreen(props) {
    const navigation = useNavigation();
    const [DogName, setDogname] = useState('');
    const [Breed, setBreed] = useState('');
    const [Location, setLocation] = useState('');

    const handleSignUp = () => { //firebase authentication so that info is sent to database

        db.collection("Dog Info")
            .doc(auth.currentUser.uid)
            .set({
                DogName,
                Breed
            })
            .catch(error => alert(error.message)) //shows error message from api in the form of an alert
        navigation.replace('HomePage')


    }


    return (
        <View style={styles.container}>
            <Image style={styles.icon} source={require('../assets/dogPNG.png')} />
            <TextInput style={styles.inputBox}
                placeholder="Dog Name"
                value={DogName}
                onChangeText={setDogname}
                placeholderTextColor={"#fff"} />



            <TextInput style={styles.inputBox}
                value={Breed}
                onChangeText={setBreed}
                placeholder="Breed"
                placeholderTextColor={"#fff"} />



            <TouchableOpacity style={styles.LoginButton} onPress={handleSignUp}>
                <Text style={styles.ButtonText}>Save</Text>
            </TouchableOpacity>



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
        width: 300,
        height: 40,
        top: 30,
        borderRadius: 25,
        backgroundColor: "#bdbdbd",
        paddingHorizontal: 16,
        marginVertical: 10,

    },
    icon: {
        height: 200,
        width: 200,
        borderRadius: 60,

    },


})