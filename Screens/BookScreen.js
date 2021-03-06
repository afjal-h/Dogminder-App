import React, {useState,useEffect} from "react";
import {Alert, Button, Image, SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native";
import {TouchableOpacity} from "react-native";
import moment from "moment";
import { TextInput } from "react-native-gesture-handler";

const BookingStatusEnum = {
    FINISHED: "FINISHED",
    ONGOING: "ONGOING",
    CANCELLED: "CANCELLED"
}
var id=1;

// ended bookings must contain rating and showrating properties
export interface Booking {
    id: number;
    ownerName: string;
    dogName: string;
    time: number;
    status: BookingStatusEnum;
    rating?: any;
    showRating?: any;
}
let bled = [];

function addbooking(minderName,dogname){
    let booking: Booking = {
        id: id,
        ownerName: minderName,
        dogName: dogname,
        time: 1049629365,
        status: BookingStatusEnum.ONGOING,
        showRating: false,
        rating: 3
    };
    id+=1;
    console.log(id)
    bled.push(booking);
    return bled;

}

function sample_bookings() {
    let booking: Booking = {
        id: 1,
        ownerName: "Name Name",
        dogName: "Woof Woof",
        time: 1049629365,
        status: BookingStatusEnum.FINISHED,
        showRating: false,
        rating: 3
    };
    bled.push(booking);

    let booking2: Booking = {
        id: 2,
        ownerName: "Name Name",
        dogName: "Woof Woof",
        time: 1149629364,
        status: BookingStatusEnum.FINISHED,
        showRating: false,
        rating: 2
    };
    bled.push(booking2);


    let booking3: Booking = {
        id: 3,
        ownerName: "Name Name",
        dogName: "Woof Woof",
        time: 1249629365,
        status: BookingStatusEnum.FINISHED,
        showRating: false,
        rating: 3
    };
    bled.push(booking3);

    let booking4: Booking = {
        id: 4,
        ownerName: "Name Name",
        dogName: "Woof Woof",
        time: 1349629365,
        status: BookingStatusEnum.ONGOING,
        showRating: false
    };
    bled.push(booking4);


    let booking5: Booking = {
        id: 5,
        ownerName: "Name Name",
        dogName: "Woof Woof",
        time: 1449629365,
        status: BookingStatusEnum.ONGOING,
        showRating: false
    };
    bled.push(booking5);
    return bled; 
}


function BookScreen(props) {
    const [bookings, setBookings] = useState([]);
    const starCount = 5
    const [ownername,setOwnerName]=useState("");
    const [dogname,setDogname]=useState("");
    const [time,setTime]=useState(0);
    const [newbooking,setNewbooking]=useState(true);
    

    function updateObj(path, value, object) {
        var valuePath = path.split(','),
            last = valuePath.pop(),
            temp = object;

        for (let i = 0; i < valuePath.length; i++) {
            temp = temp[valuePath[i]];
        }
        temp[last] = value;
    }

    function updateBooking(id: number, key: string, value: any) {
        let index = -1;
        let i = 0;
        bookings.map(
            (booking) => {
                if (booking.id === id) {
                    index = i;
                }
                i += 1;
            }
        )

        if (index === -1) {
            return;
        }
        let bookingsClone = JSON.parse(JSON.stringify(bookings));

        let booking = JSON.parse(JSON.stringify(bookings[index])); // hacky deep copy
        if (booking[key] === value && key==='rating'){
            updateObj(key, 0, booking);
        }
        else {
            updateObj(key, value, booking);
        }
        bookingsClone[index] = booking;
        setBookings(bookingsClone);
    }

    

    function handleClick(e: number, bookingId: number) {
        updateBooking(bookingId, 'rating', e);
    }

    function handleButtonPress(bookingId: number) {
        updateBooking(bookingId, 'showRating', true);
    }


    function handleCompletePress(bookingId: number) {
        updateBooking(bookingId, 'status', BookingStatusEnum.FINISHED);
    }

    function handleCancelPress(bookingId: number) {
        updateBooking(bookingId, 'status', BookingStatusEnum.CANCELLED);
    }



    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.bookinglocations}>
                    <Text style={styles.headerstyle}>Current Bookings</Text>
                    <TextInput 
                        value={ownername}
                        onChangeText={setOwnerName}
                    />
                    <TextInput 
                        value={dogname}
                        onChangeText={setDogname}
                    />
                    <TextInput 
                        value={time}
                        onChangeText={setTime}
                    />
                    <View style={styles.bookings}>
                    <Button 
                        title="Book"
                        color="#d4a77d"
                        onPress={() => setBookings(addbooking(ownername,dogname))}
                    />
                   
                    </View> 
                    {
                        bookings.map(
                            (booking) => {
                                if (booking.status === BookingStatusEnum.ONGOING) {
                                    return (
                                        <View style={styles.bookings} key={booking.id}>
                                            <Text style={styles.textstyle}>Owner Name: {booking.ownerName}</Text>
                                            <Text style={styles.textstyle}>Dog Name: {booking.dogName}</Text>
                                            <Text
                                                style={styles.textstyle}>Time: {moment(new Date(booking.time * 1000)).format('MM/DD/YYYY hh:MM')}</Text>
                                            <Text style={styles.textstyle}>Status: {booking.status}</Text>
                                            <Button
                                                title="Complete"
                                                color="#d4a77d"
                                                onPress={() => handleCompletePress(booking.id)}
                                            />
                                            <View style={styles.space}/>
                                            <Button
                                                title="Cancel"
                                                color="#d4a77d"
                                                onPress={() => handleCancelPress(booking.id)}
                                            />

                                        </View>
                                    )
                                }
                            }
                        )
                    }
                </View>
                <View style={styles.bookinglocations}>
                    <Text style={styles.headerstyle}>Previous Bookings</Text>
                    {
                        bookings.map(
                            (booking) => {
                                if (booking.status === BookingStatusEnum.FINISHED) {
                                    return (
                                        <View style={styles.bookings} key={booking.id}>
                                            <Text style={styles.textstyle}>Owner Name: {booking.ownerName}</Text>
                                            <Text style={styles.textstyle}>Dog Name: {booking.dogName}</Text>
                                            <Text
                                                style={styles.textstyle}>Time: {moment(new Date(booking.time * 1000)).format('MM/DD/YYYY hh:MM')}</Text>
                                            <Text style={styles.textstyle}>Status Update: {booking.status}</Text>
                                            <Button
                                                title="Rate"
                                                color="#d4a77d"
                                                onPress={() => handleButtonPress(booking.id)}
                                            />
                                            <View style={styles.stars_row}>
                                                {
                                                    (
                                                        [...Array(starCount).keys()].map(
                                                            (index) => {
                                                                return (
                                                                    <TouchableOpacity
                                                                        key={index}
                                                                        onPress={() => handleClick(index + 1, booking.id)}
                                                                    >
                                                                        <Image
                                                                            style={booking.showRating === true ? styles.display : styles.no_display}
                                                                            key={"index" + index + 1}
                                                                            source={index + 1 <= booking.rating ? require('../assets/empty.png') : require('../assets/full.png')}
                                                                            alt={index + 1 <= booking.rating ? "filled star" : "empty star"}
                                                                        />
                                                                    </TouchableOpacity>
                                                                )
                                                            }
                                                        )
                                                    )
                                                }
                                            </View>
                                        </View>
                                    )
                                }
                            }
                        )
                    }
                </View>
                <View style={styles.bookinglocations}>
                    <Text style={styles.headerstyle}>Cancelled Bookings</Text>
                    {
                        bookings.map(
                            (booking) => {
                                if (booking.status === BookingStatusEnum.CANCELLED) {
                                    return (
                                        <View style={styles.bookings} key={booking.id}>
                                            <Text style={styles.textstyle}>Owner Name: {booking.ownerName}</Text>
                                            <Text style={styles.textstyle}>Dog Name: {booking.dogName}</Text>
                                            <Text
                                                style={styles.textstyle}>Time: {moment(new Date(booking.time * 1000)).format('MM/DD/YYYY hh:MM')}</Text>
                                            <Text style={styles.textstyle}>Status: {booking.status}</Text>
                        
                                        </View>
                                    )
                                }
                            }
                        )
                    }
                </View>
            </ScrollView>
        </SafeAreaView>

    );
};

export default BookScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fee4cb",
    },

    bookings: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: "#fee4cb",
        justifyContent: "space-around",
        borderRadius: 10,
    },

    bookinglocations: {
        marginLeft: 50,
        marginRight: 50,
        marginTop: 20,
        backgroundColor: "#f0c69e",
        paddingBottom: 20,
        justifyContent: "space-around",
        borderRadius: 10,
    },

    textstyle: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
    },

    headerstyle: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        marginLeft: 80,
    },

    space: {
        width: 20, // or whatever size you need
        height: 2,
    },
    no_display: {
        width: 30,
        height: 30,
        display: "none"
    },
    display: {
        width: 30,
        height: 30,
        display: "flex",
        marginRight: 10
    },
    stars_row: {
        display: "flex",
        flexDirection: "row",
        paddingLeft: "16%",
    }
})