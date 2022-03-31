import { useNavigation } from "@react-navigation/native";
import { View, Text, Alert, TouchableOpacity, Button, Image, StyleSheet } from "react-native";



function SignUpScreen(props) {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Image style={styles.icon} source={require('../assets/icon.png')} />
            <TouchableOpacity style={styles.LoginButton} onPress={() => navigation.navigate('LoginPage')}>
                <Text style={styles.ButtonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.LoginButton} onPress={() => navigation.navigate('SignUpPage')}>
                <Text style={styles.ButtonText}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.LoginButton} onPress={() => navigation.navigate('SearchPage')}>
                <Text style={styles.ButtonText}>Search Test</Text>
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


})