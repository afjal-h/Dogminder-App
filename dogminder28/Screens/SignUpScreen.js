import { View, Text, Alert, TouchableOpacity, Button, Image, StyleSheet } from "react-native";


function SignUpScreen(props) {
    return (
        <View style={styles.container}>
            <Image style={styles.icon} source={require('../assets/icon.png')} />
            <Text>Username</Text>
            <Text>Password</Text>

        </View>
    );
}

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#beeede",
        alignItems: "center",
        justifyContent: "flex-end",

    }

    ,
    icon: {
        height: 200,
        width: 200,
        position: "absolute",
        borderRadius: 60,
        top: 250
    },


})