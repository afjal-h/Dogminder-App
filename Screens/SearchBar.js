import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    FlatList,
    TouchableOpacity,
    TextInput, Image, Picker
} from 'react-native';

export default function Searchbar({ values, updateSearch, style }) {
    const [query, setQuery] = useState()
    const [error, setError] = useState(".")
    const [selectedValue, setSelectedValue] = useState("java");
    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>

                <View styles={styles.vwSearch}>
                    <Image
                        //resizeMode='center'
                        style={styles.icSearch}
                        source={require('../assets/ic_search.png')} />
                </View>

                <TextInput
                    value={query}
                    placeholder="Search Location"
                    style={styles.textInput}
                    onChangeText={(text) => {
                        var letters = /^$|^[a-zA-Z._\b ]+$/;
                        if (text.length > 12)
                            setError("Query too long.")
                        else if (text.match(letters)) {
                            setQuery(text)
                            updateSearch(text)
                            if (error)
                                setError(false)
                        }
                        else setError("Only alphabets accepted")
                    }}
                />
                {
                    query ?
                        <TouchableOpacity
                            onPress={() => setQuery('')}
                            style={styles.vwClear}>
                            <Image
                                style={styles.icClear}
                                source={require('../assets/ic_clear.png')} />

                        </TouchableOpacity>
                        : <View style={styles.vwClear} />
                }
            </View>
            <View style={styles.dropdown}>
            <Text style={styles.textstyle}>Search dog minder by:</Text>
              <Picker
                selectedValue={selectedValue}
                style={{ height: 50, width: 150 }}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
              >
               <Picker.Item label="Service" value="service" />
               <Picker.Item label="Price" value="price" />
               <Picker.Item label="Rating" value="rating" />
             </Picker>
            </View>
            {
                error &&
                <Text style={styles.txtError}>
                    {error}
                </Text>
            }
        </View>
        
    )
}
const styles = StyleSheet.create({
    txtError: {
        width: '90%',
        marginTop: '2%',
        marginLeft: '5%'


    },
    vwClear: {
        //backgroundColor:'blue',
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'flex-end',


    },
    textInput: {
        //  backgroundColor:'green',
        flex: 1,
        marginLeft: '10%',
        marginTop: '-5.5%'
    },
    vwSearch: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center'

        //width: 40,
        //backgroundColor:'red'

    },
    icSearch: {
        height: 18, width: 18,
        marginTop: '3.5%',
        marginLeft: '2.5%'
        //alignItems:'flex-start'
    },
    icClear: {
        marginTop: '-9%',
        marginRight: '4%'

    },
    searchContainer: {
        backgroundColor: 'white',
        width: '90%',
        height: 40,
        marginLeft: '5%',
        borderRadius: 30,


    },
    container: {

        paddingTop: 40,
        flex: 1
    },
    dropdown: {
        //flex: 0.5,
        paddingTop: 30,
        alignItems: "center",
        //marginTop: '-10%',
        //backgroundColor: 'red'

        
    },

    textstyle: {
    
        fontSize: 25,
        color: "#cd853f",
        //fontweight: 'bold'
        //marginTop: '-5%'
        //paddingTop: 40 px

    },
});