import { useNavigation } from "@react-navigation/native";
import { View, Text, TextInput, Alert, TouchableOpacity, Button, Image, StyleSheet } from "react-native";
import { auth } from '../firebase';
import { useEffect, useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
function PaymentScreen() {
    const navigation = useNavigation(); //this is a variable that needs to be initialised on every page so that buttons can be used to navigate to different pages
    const [cardName, setCardName] = useState('');
    const [cardNum, setCardNum] = useState('');
    const [expDate, setExp] = useState('');
    const [cvv, setCvv] = useState('');

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const handleConfirm = (date) => {
      console.warn("A date has been picked: ", date);
      hideDatePicker();
    };
    
    return (
        
        <View style={styles.container}>
            
            <Image style={styles.icon} source={require('../assets/shopping-cart.png')} />
            <Button style={styles.CheckoutButton} title="Select a date to book" onPress={showDatePicker} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
            <TextInput style={styles.inputBox}
                placeholder="Card Name"
                value={cardName}
                onChangeText={setCardName}
                placeholderTextColor={"#fff"} />

            <TextInput style={styles.inputBox}
                value={cardNum}
                keyboardType="numeric"
                onChangeText={setCardNum}
                placeholder="Card Number"
                placeholderTextColor={"#fff"} 
                maxLength={16}/>

            <TextInput style={styles.inputBox}
                value={expDate}
                keyboardType="numeric"
                onChangeText={setExp}
                placeholder="Expiry Date"
                maxLength={4}
                placeholderTextColor={"#fff"} />

            <TextInput style={styles.inputBox}
                value={cvv}
                maxLength={3}
                onChangeText={setCvv}
                placeholder="CVV"
                secureTextEntry={true}
                keyboardType="numeric"
                placeholderTextColor={"#fff"} />
                

            <TouchableOpacity style={styles.CheckoutButton}>
                <Text style={styles.ButtonText}>Buy Now</Text>
            </TouchableOpacity>

        </View>
    );
}

export default PaymentScreen

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        backgroundColor: "#fee4cb",
        alignItems: "center",
        justifyContent: "center",
    },
    
    CheckoutButton: {
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