import React from 'react';
import { View, Text, Alert, TouchableOpacity, Button, Image, StyleSheet, SafeAreaView, Box, ScrollView } from "react-native";

function BookScreen(props) {
    return (
         <SafeAreaView style={styles.container}>
             <ScrollView></ScrollView>
            <View style={styles.bookinglocations}>
                <Text style={styles.headerstyle}>Current Bookings</Text>
                <View style={styles.bookings}>
                    <Text style={styles.textstyle}>Owner Name:</Text>
                    <Text style={styles.textstyle}>Dog Name:</Text>
                    <Text style={styles.textstyle}>Time:</Text>
                    <Text style={styles.textstyle}>Status Update:</Text>
                    <Button 
                        title="Complete"
                        color="#d4a77d"
                        onPress={() => Alert.alert('Completed')}
                    />
                    <View style={styles.space} />
                    <Button 
                        title="Cancel"
                        color="#d4a77d"
                        onPress={() => Alert.alert('Button pressed')}
                    />

                </View>
            </View>
            <View style={styles.bookinglocations}>
                <Text style={styles.headerstyle}>Previous Bookings</Text>
                <View style={styles.bookings}>
                    <Text style={styles.textstyle}>Owner Name:</Text>
                    <Text style={styles.textstyle}>Dog Name:</Text>
                    <Text style={styles.textstyle}>Time:</Text>
                    <Text style={styles.textstyle}>Status Update: Finished</Text>
                    <Button 
                        title="Cancel"
                        color="#d4a77d"
                        onPress={() => Alert.alert('Button pressed')}
                    />

                </View>
                <View style={styles.bookings}>
                    <Text style={styles.textstyle}>Owner Name:</Text>
                    <Text style={styles.textstyle}>Dog Name:</Text>
                    <Text style={styles.textstyle}>Time:</Text>
                    <Text style={styles.textstyle}>Status Update: Finished</Text>
                    <Button 
                        title="Cancel"
                        color="#d4a77d"
                        onPress={() => Alert.alert('Button pressed')}
                    />

                </View>
                <View style={styles.bookings}>
                    <Text style={styles.textstyle}>Owner Name:</Text>
                    <Text style={styles.textstyle}>Dog Name:</Text>
                    <Text style={styles.textstyle}>Time:</Text>
                    <Text style={styles.textstyle}>Status Update: Finished</Text>
                    <Button 
                        title="Cancel"
                        color="#d4a77d"
                        onPress={() => Alert.alert('Button pressed')}
                    />

                </View>
            </View>
         </SafeAreaView>

    );
}

export default BookScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fee4cb",
    },

    bookings: {
        marginLeft:20,
        marginRight:20,
        marginTop:20,
        marginBottom:20,
        backgroundColor:"#fee4cb",
        justifyContent:"space-around",
    },

    bookinglocations: {
        marginLeft:50,
        marginRight:50,
        marginTop:20,
        backgroundColor:"#f0c69e",
        paddingBottom:20,
        justifyContent:"space-around",
    },

    textstyle:{
        paddingLeft:20,
        paddingRight:20,
        paddingTop:10,
    },

    headerstyle:{
        paddingLeft:20,
        paddingRight:20,
        paddingTop:10,
        marginLeft:80,
    },
    
    space: {
        width: 20, // or whatever size you need
        height: 2,
      },
})