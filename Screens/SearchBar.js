import { NavigationContainer } from '@react-navigation/native';
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
import { borderLeftColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { useNavigation } from "@react-navigation/native";


export default function Searchbar({ values, updateSearch, style }) {
  const navigation = useNavigation(); //this is a variable that needs to be initialised on every page so that buttons can be used to navigate to different pages
  const [dataFromState, setData] = useState(data);
  const [query, setQuery] = useState()
  const [error, setError] = useState(".")
  const [selectedValue, setSelectedValue] = useState();
  const [selectedService, setSelectedService] = useState();

  const data = [{
    "Name": "Cornie Tumayan",
    "Location": "London",
    "Bio": "Hello! I'm Cornie, twenty seven years old. Growing up in the countryside in a vastly rural environment, dogs were just a natural part of the scene but also part of the family.\n\nI'm currently working but I still have a lot of time available and my favourite pass time is to play with puppies and go on walks so this works perfect for me.",
    "Price": "£10.50",
    "Pic": "https://robohash.org/omnisanimisint.png?size=50x50&set=set1",
    "Walker": false,
    "Sitter": true
  }, {
    "Name": "Moritz Mallett",
    "Location": "Luton",
    "Bio": "Hi, I am Moritz and I have previous experience of dog sitting. I have sat for a range of different breeds from cheeky labrador puppies to energetic spaniels.\n\nHere to help you and spend time with your furry friend. I always wanted a dog of my own but due to living in a rented flat it has not been allowed. One day though. ",
    "Price": "£9.25",
    "Pic": "https://robohash.org/iustosolutaperspiciatis.png?size=50x50&set=set1",
    "Walker": false,
    "Sitter": true
  }, {
    "Name": "Laura Medlar",
    "Location": "Manchester",
    "Bio": "My name is Laura. I am 39 years old and love all animals. I've been a pet owner and lived with animals for around 20 years.\n\nI am highly active so happy to take your pets for long walks and runs if they like! I am available morning until evening and am confident with looking after small to large dogs.",
    "Price": "£7.80",
    "Pic": "https://robohash.org/facerenecessitatibuscorrupti.png?size=50x50&set=set1",
    "Walker": true,
    "Sitter": false
  }, {
    "Name": "Marilyn Swetman",
    "Location": "St.albans",
    "Bio": "I am an excellent care provider for pets of all size and breeds. I have owned dogs my whole life and also dog sit on multiple occasions for family and friends.\n\nI have lots of free time to take care of your precious pals. I am available from Monday to Friday.",
    "Price": "£9.80",
    "Pic": "https://robohash.org/laudantiumaliquamcum.png?size=50x50&set=set1",
    "Walker": false,
    "Sitter": true
  }, {
    "Name": "Cristi Druitt",
    "Location": "Bedford",
    "Bio": "I grew up in a house full of animals, three dogs and three cats, goats and chicken. I have plenty of experience and love! I am looking for this job not because of money but more because I miss my pets that stayed in my parents' home.\n\nI am student and I have a part-time job, so I am looking to care for dogs to take out for a walk or to come and feed them. I am flexible so everything is up to your request.",
    "Price": "£8.30",
    "Pic": "https://robohash.org/hicsequiomnis.png?size=50x50&set=set1",
    "Walker": true,
    "Sitter": true
  }, {
    "Name": "Eddie Mounsie",
    "Location": "Hertfordshire",
    "Bio": "I have great relationship with all animals especially dogs and cats. I've worked for the RSPCA as an animal foster carer- rearing and rehoming- and for Bleakholt Animal Sanctuary as a trained and registered dog walker.\n\nGiving animals the attention they need is a hugely rewarding thing to do so I am happy to help you walk your dog.",
    "Price": "£10.90",
    "Pic": "https://robohash.org/maiorescumquealiquid.png?size=50x50&set=set1",
    "Walker": true,
    "Sitter": false
  }, {
    "Name": "Marcella Dineen",
    "Location": "Cambridge",
    "Bio": "Hi there! I am Marcella. I am a vet and big dog passionate lover. I grew up around dogs since I was 10 years old. I used to feed them, take them to the vet, bath and play with the.\n\nIf you choose me to take care of your dogs, they are going to be treated with so much love, attention and care. Just let me know if your pet needs any special requirement.",
    "Price": "£8.10",
    "Pic": "https://robohash.org/utdistinctioqui.png?size=50x50&set=set1",
    "Walker": false,
    "Sitter": true
  }, {
    "Name": "Meridel Argent",
    "Location": "Nottingham",
    "Bio": "I like to board one animal at a time to be able to provide a luxury service that your pet will feel and love!\n\nI work from home so I have plenty of time to be with your pet! Fuss, playing time and a lot of socialising time outdoors to enjoy.",
    "Price": "£7.83",
    "Pic": "https://robohash.org/voluptatemquisconsequatur.png?size=50x50&set=set1",
    "Walker": false,
    "Sitter": true
  }, {
    "Name": "Lonnard Loweth",
    "Location": "Bath",
    "Bio": "I have lived around dogs my entire life so I have lots of experience looking after them. The majority of my experience with dogs has been through our family dogs or looking after family friends' dogs.\n\nI have just graduated from university so I currently have no commitments meaning that I will be able to give my full attention to the dogs without any distractions. ",
    "Price": "£9.00",
    "Pic": "https://robohash.org/cupiditaterepellatest.png?size=50x50&set=set1",
    "Walker": false,
    "Sitter": true
  }, {
    "Name": "Kathie Devenish",
    "Location": "London",
    "Bio": "I've had my beloved springer Tilly for 12 years, and since moving to London without her I have greatly missed the presence of a dog in my life.\n\nFully DBS checked and excellent reference available.\n\nOver three year of paid dog care experience working with a range of breeds including cockapoos, dachshunds, labradors and spaniels.\n\nI am available every weekends.",
    "Price": "£10.20",
    "Pic": "https://robohash.org/eosadipisciaut.png?size=50x50&set=set1",
    "Walker": true,
    "Sitter": false
  }, {
    "Name": "Sophie Dutteridge",
    "Location": "Norwich",
    "Bio": "Hey there! I am Sophie and I am a writer who works from home so I have the opportunity to take care of dogs whilst at home. I will ensure your dog receives my full attention whilst boarding/walking with me and I will cater to any special instructions.\n\nI have grown up with dogs and even dog sitted a guide dog in training so I am no stranger when it comes to them.",
    "Price": "£7.90",
    "Pic": "https://robohash.org/beataequoslaboriosam.png?size=50x50&set=set1",
    "Walker": true,
    "Sitter": true
  }, {
    "Name": "Arnaldo Gores",
    "Location": "Bradford",
    "Bio": "I love dogs so much and would love to take care of them, walk them, and play with them. It's my favourite thing in the world.\n\nI am a masters student and only go in once a week, so I have got plenty of time to walk your dog all week.",
    "Price": "£8.25",
    "Pic": "https://robohash.org/sedipsumet.png?size=50x50&set=set1",
    "Walker": true,
    "Sitter": false
  }, {
    "Name": "Cash Ruddiforth",
    "Location": "Leicester",
    "Bio": "Since I was about 7 years old, I had to walk all of my dogs three times a day, every day. Throughout the years I have had many different dogs going through my home, as our family and friends knew they could always rely on us with taking good care of their pets.\n\nI am currently available to work all the week days.",
    "Price": "£8.15",
    "Pic": "https://robohash.org/sintvitaemolestias.png?size=50x50&set=set1",
    "Walker": true,
    "Sitter": false
  }, {
    "Name": "Madelon Rycraft",
    "Location": "Oxford",
    "Bio": "I've lived with and cared for dogs all my life, ranging from big Labradors to tiny Frenchies, and even unruly Rhodesian Ridgebacks. My friend calls me the dog whisperer because I get on so natually with dogs.\n\nI am available most times and really easy going and friendly. I'm known to be reliable, and am looking to work with people in the long term so I could get to know them and their dogs better.",
    "Price": "£9.15",
    "Pic": "https://robohash.org/utestnemo.png?size=50x50&set=set1",
    "Walker": true,
    "Sitter": true
  }, {
    "Name": "Ikey Oaten",
    "Location": "Karangpete",
    "Bio": "I am an animals loving person with more than 20 years of experience looking after and taking care of dogs with flexible time, willing in the sensible manner to look after your best hairy friend.",
    "Price": "£9.09",
    "Pic": "https://robohash.org/necessitatibusnonenim.png?size=50x50&set=set1",
    "Walker": true,
    "Sitter": true
  }, {
    "Name": "Markus Chalcroft",
    "Location": "Rājo Khanāni",
    "Bio": "Everybody has that one thing they are passionate about, for me it's animals and nature. I am more than willing to walk your dogs to meet their needs. I am quite an active person too so it's the perfect job for me.",
    "Price": "£7.99",
    "Pic": "https://robohash.org/eiusetquas.png?size=50x50&set=set1",
    "Walker": true,
    "Sitter": false
  }, {
    "Name": "Aurlie Janton",
    "Location": "Shushenskoye",
    "Bio": "My job is very flexible which allows me to be available for day time walks with your pooch! I am a massive lover of dogs and happy to provide whatever atterntion your dog requires\n\nPreviously I owned a medium sized strong dog and I have volunteered at a Kennels for around 4 years dealing with all different breeds of dog so I am experienced and happy to deal with your dogs.",
    "Price": "£10.10",
    "Pic": "https://robohash.org/quioditquia.png?size=50x50&set=set1",
    "Walker": true,
    "Sitter": false
  }, {
    "Name": "Krishna Mingaye",
    "Location": "Birmingham",
    "Bio": "Each pet has their own personality and style. I adapt to exactly what your dog needs and wants. If they want cuddles, they get cuddles. If they want space, they get space. It's always about the adorable pets needs.\n\nI am enthusiastic and highly energetic so it will take a lot for a dog to tire me out. I am free to sit your dog any week days.",
    "Price": "£9.64",
    "Pic": "https://robohash.org/aliquidquisquamquaerat.png?size=50x50&set=set1",
    "Walker": false,
    "Sitter": true
  }, {
    "Name": "Loralie Wildor",
    "Location": "Duszniki-Zdrój",
    "Bio": "I am an excellent care provider for dogs of all size and breed, I have owned dogs my whole life and also dog sit on many occasions for relatives. I am naturally calm and body quickly with new dogs. ",
    "Price": "£9.95",
    "Pic": "https://robohash.org/accusantiumporrosaepe.png?size=50x50&set=set1",
    "Walker": false,
    "Sitter": true
  }, {
    "Name": "Emmalynne Autry",
    "Location": "Yutou",
    "Bio": "I have had my own dog for the last 15 years, a lovely Jack Russel. I am very active and can ensure your pet will be well excercised.\n\nI am currently working from home with a flexible timetable meaning I can walk the dog in the morning, lunch or afternoon depending on the requirements and schedule of the dog.",
    "Price": "£9.17",
    "Pic": "https://robohash.org/consequaturnesciuntmagni.png?size=50x50&set=set1",
    "Walker": true,
    "Sitter": false
  }]

  const item = ({ item }) => {
    return (

      <TouchableOpacity style={styles.box}
        onPress={() => navigation.navigate('MinderScreen', {
          Name: item.Name,
          Bio: item.Bio,
          Location: item.Location,
          Price: item.Price,
          Pic: item.Pic

        })}>

        <Image
          source={{
            uri: item.Pic,
            cache: 'only-if-cached'
          }}
          style={{ width: 40, height: 40, top: 25, borderRadius: 75, backgroundColor: '#696880' }}
        />
        {console.log("Walker:", item.Walker)}
        <Text style={styles.baseText}>{item.Name}</Text>
        <Text style={styles.baseText}>{item.Location}    <Text style={styles.hour}>{item.Price} per hour</Text></Text>
      </TouchableOpacity>


    )

  }

  const searchName = (input) => {
    let searchData = data.filter((item) => {
      return item.Location.toLowerCase().includes(input.toLowerCase())
    });
    setData(searchData);

  }







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
          onChangeText=
          {(input) => {
            searchName(input)
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
        <Text style={styles.textstyle}>Filter by:</Text>
        <Picker
          selectedService={selectedService}
          style={{ height: 50, width: 200 }}
          onValueChange={(itemValue, itemIndex) => setSelectedService(itemValue)}
        >
          < Picker.Item label="-Choose Service-" value="choose" />
          <Picker.Item label="Service: dog sitting" value="sit" />
          <Picker.Item label="Service: dog walking" value="walk" />
        </Picker>
        <Picker
          selectedValue={selectedValue}
          style={{ height: 50, width: 200 }}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          < Picker.Item label="-Sort By-" value="choose" />
          <Picker.Item label="Price: low to high" value="low price" />
          <Picker.Item label="Price: high to low" value="high price" />
          <Picker.Item label="Rating: low to high" value="low rating" />
          <Picker.Item label="Rating: high to low" value="high rating" />
        </Picker>

      </View>
      <View
        style={{ height: "70%" }}>
        <FlatList
          data={selectedValue ? dataFromState.sort((a, b) => {

            if (selectedValue === "low price") {
              if (a.Price > b.Price) {
                return 1
              }
              else {
                return -1
              }
            }
            if (selectedValue === "high price") {
              if (a.Price > b.Price) {
                return -1
              }
              else {
                return 1
              }
            }
            if (selectedService === "walk") {
              if (a.Walker === true) {
                return -1
              }
              else {
                return 1
              }
            }
            if (selectedService === "sit") {
              if (a.Sitter === true) {
                return -1
              }
              else {
                return 1
              }
            }
          }) : dataFromState}
          renderItem={item}
          keyExtractor={(item, index) => index.toString()} />
      </View>



    </View>

  )
}
const styles = StyleSheet.create({
  txtError: {
    width: '90%',
    marginTop: '-24%',
    marginLeft: '10%',
    //backgroundColor: 'red',



  },
  box: {
    width: "95%",
    height: 90,
    borderRadius: 20,
    backgroundColor: "#ddbc9b",
    paddingHorizontal: 16,
    marginVertical: 10,
    left: "2%",

    textAlignVertical: "top",



  },






  baseText: {
    fontWeight: 'bold',
    textAlign: 'left',
    fontFamily: 'sans-serif',
    fontSize: 18,
    bottom: 20,
    left: 50


  },
  hour: {
    fontWeight: 'bold',
    textAlign: 'left',
    fontFamily: 'sans-serif',
    fontSize: 18,
    bottom: 20,
    left: 80


  },

  vwClear: {
    //backgroundColor:'blue',
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'flex-end',


  },
  textInput: {
    //backgroundColor:'green',
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

    fontSize: 15,
    color: "#cd853f",
    //fontweight: 'bold'
    //marginTop: '-5%'
    //paddingTop: 40 px

  },
});