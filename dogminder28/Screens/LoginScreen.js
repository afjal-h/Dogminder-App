import { View, Text, Alert, TouchableOpacity, Button, Image, StyleSheet, TextInput } from "react-native";


function SignUpScreen(props) {
    return (
        <View style={styles.container}>
            <Image style={styles.icon} source={require('../assets/icon.png')} />
            <TextInput style={styles.inputBox}
                placeholder="Email"
                placeholderTextColor={"#fff"} />
            <TextInput style={styles.inputBox}
                secureTextEntry={true}
                placeholder="Password"
                placeholderTextColor={"#fff"} />



            <TouchableOpacity style={styles.LoginButton}>
                <Text style={styles.ButtonText}>Login</Text>
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