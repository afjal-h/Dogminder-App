import React, { useState } from 'react';
import { View, Text, Alert, TouchableOpacity, Button, Image, StyleSheet, SafeAreaView, ScrollView, StatusBar, FlatList, TextInput } from "react-native";
import Searchbar from './SearchBar';

export default function SearchScreen() {
    const [value, setValue] = useState()
    function updateSearch(value){

        console.log(value)

    }
    return (
        // <SafeAreaView><Text>This is the search screen for Shohani</Text></SafeAreaView>
       <View style={styles.container}>
           <View style={{height:'100%', backgroundColor: "#fee4cb", borderRadius: 10}}>
               {/* <Image 
                    style={{marginTop: '15%', marginLeft:'5%' }}
                    source ={require('../assets/ic_back.png')}/> */}

               <Searchbar
                   value={value}
                   updateSearch = {updateSearch}
                   style={{marginTop: '8%'}}
                 />
             </View>

         </View>
    )
}
const styles = StyleSheet.create({

})

