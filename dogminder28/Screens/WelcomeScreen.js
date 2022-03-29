import { useNavigation } from "@react-navigation/native";
import { View, Text, Alert, TouchableOpacity, Button, Image, StyleSheet } from "react-native";



function SignUpScreen(props) {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Image style={styles.icon} source={require('../assets/icon.png')} />
            <Button

                title="Login"
                onPress={() => navigation.navigate("SignUpPage")}
            />
            <Button
                title="Sign Up"
                onPress={() => navigation.navigate("SignUpPage")}
            />

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