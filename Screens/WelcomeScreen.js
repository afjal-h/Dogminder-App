import { useNavigation } from "@react-navigation/native";
import { View, Text, TextInput, Alert, TouchableOpacity, Button, Image, StyleSheet } from "react-native";
import { auth } from '../firebase';
import { useEffect, useState } from "react";




function SignUpScreen(props) {
    const navigation = useNavigation(); //this is a variable that needs to be initialised on every page so that buttons can be used to navigate to different pages
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
                placeholderTextColor={"#fff"} />
            <TextInput style={styles.inputBox}
                value={Password}
                onChangeText={text => setPassword(text)}
                secureTextEntry={true}
                placeholder="Password"
                placeholderTextColor={"#fff"} />





            <TouchableOpacity style={styles.LoginButton} onPress={handleLogin}>
                <Text style={styles.ButtonText}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.SignUpButton} onPress={() => navigation.navigate('PasswordResetPage')}>
                <Text style={styles.ButtonText}>Forgot Password</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.SignUpButton} onPress={() => navigation.navigate('SignUpPage')}>
                <Text style={styles.ButtonText}>Don't have an account? Create one</Text>
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
    icon: {
        height: 200,
        width: 200,
        borderRadius: 60,

    },

    LoginButton: {

        width: 100,
        top: 30,
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

    backgroundVideo: {


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