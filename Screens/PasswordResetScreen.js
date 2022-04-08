import { useNavigation } from "@react-navigation/native";
import { View, Text, TextInput, Alert, TouchableOpacity, Button, Image, StyleSheet } from "react-native";
import { useState } from "react";
import { auth } from '../firebase';



function SignUpScreen(props) {
    const navigation = useNavigation(); //this is a variable that needs to be initialised on every page so that buttons can be used to navigate to different pages
    const [Email, setEmail] = useState('');


    const handleReset = () => {
        auth.sendPasswordResetEmail(Email)
            .then(userCredentials => {
                alert("Reset link has been sent!")
                navigation.replace('WelcomePage')
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






            <TouchableOpacity style={styles.LoginButton} onPress={handleReset}>
                <Text style={styles.ButtonText}>Reset</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.SignUpButton} onPress={() => navigation.navigate('WelcomePage')}>
                <Text style={styles.ButtonText}>Figured out your password? Sign In</Text>
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

    SignUpButton: {

        top: 80,

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