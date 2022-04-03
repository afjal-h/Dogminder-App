import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Alert, TouchableOpacity, Button, Image, StyleSheet, TextInput } from "react-native";
import { auth } from '../firebase';


function SignUpScreen(props) {
    const navigation = useNavigation();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [RepeatPassword, setRepeatPassword] = useState('');

    const handleSignUp = () => {
<<<<<<< HEAD
        if (password !== RepeatPassword) {
            Alert.alert("Passwords do not match!")
        }

        else {
            auth
                .createUserWithEmailAndPassword(email, password)
                .then(userCredentials => {
                    const user = userCredentials.user;
                })
                .catch(error => alert(error.message))

        }

=======
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
            })
            .catch(error => alert(error.message))
>>>>>>> 51a9ae76305bc01d96c6163ef3f1ab3b953b54ad

    }


    return (
        <View style={styles.container}>
            <Image style={styles.icon} source={require('../assets/icon.png')} />
            {/* <TextInput style={styles.inputBox}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
                placeholderTextColor={"#fff"} /> */ //we haven;t got usernames sorted yet
            }


            <TextInput style={styles.inputBox}
                value={email}
                onChangeText={setEmail}
                placeholder="Email"
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
        backgroundColor: "#beeede",
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