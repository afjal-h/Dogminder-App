import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Alert, TouchableOpacity, Button, Image, StyleSheet, TextInput } from "react-native";

import { db } from '../firebase';
import { auth } from '../firebase';




function SignUpScreen(props) {
    const navigation = useNavigation();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [location, setLocation] = useState('');
    const [password, setPassword] = useState('');
    const [RepeatPassword, setRepeatPassword] = useState('');

    const handleSignUp = () => { //firebase authentication so that info is sent to database
        if (password !== RepeatPassword) { //checks to see if passwords match
            Alert.alert("Passwords do not match!")
        }

        else {
            auth.createUserWithEmailAndPassword(email, password)
                .then(result => {
                    db.collection("users")
                        .doc(auth.currentUser.uid)
                        .set({
                            username,
                            email,
                            phone,
                            location
                        })
                    console.log(result)
                    navigation.replace('SignUpInfoPage')
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
                value={password}
                onChangeText={setPassword}
                placeholder="Password"
                placeholderTextColor={"#fff"}
                secureTextEntry={true} />


            <TextInput style={styles.inputBox}
                value={RepeatPassword}
                onChangeText={setRepeatPassword}
                secureTextEntry={true}
                placeholder="Repeat Password"
                placeholderTextColor={"#fff"} />



            <TouchableOpacity style={styles.LoginButton} onPress={handleSignUp}>
                <Text style={styles.ButtonText}>Register</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.SigninButton} onPress={() => navigation.navigate('WelcomePage')}>
                <Text style={styles.ButtonText}>Back To Sign In</Text>
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