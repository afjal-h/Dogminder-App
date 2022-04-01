import { useNavigation } from "@react-navigation/native";
import { View, Text, TextInput, Alert, TouchableOpacity, Button, Image, StyleSheet } from "react-native";
import { useState } from "react";




function SignUpScreen(props) {
    const navigation = useNavigation(); //this is a variable that needs to be initialised on every page so that buttons can be used to navigate to different pages
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');


    return (

        <View style={styles.container}>
            <Image style={styles.icon} source={require('../assets/icon.png')} />
            <TextInput style={styles.inputBox}
                value={Username}
                onChangeText={text => setUsername(text)}
                placeholder="Username"
                placeholderTextColor={"#fff"} />
            <TextInput style={styles.inputBox}
                value={Password}
                onChangeText={text => setPassword(text)}
                secureTextEntry={true}
                placeholder="Password"
                placeholderTextColor={"#fff"} />





            <TouchableOpacity style={styles.LoginButton} onPress={() => navigation.replace('HomePage')}>
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