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


export default function Searchbar({ values, updateSearch, style }) {
    const[dataFromState,setData]=useState(data);
    const [query, setQuery] = useState()
    const [error, setError] = useState(".")
    const [selectedValue, setSelectedValue] = useState("java");

    const data=[{
        "Name": "Cornie Tumayan",
        "Location": "London",
        "Bio": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
        "Price": "£3.59",
        "Pic": "https://robohash.org/omnisanimisint.png?size=50x50&set=set1",
        "Walker": false,
        "Sitter": true
      }, {
        "Name": "Moritz Mallett",
        "Location": "Luton",
        "Bio": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
        "Price": "£9.25",
        "Pic": "https://robohash.org/iustosolutaperspiciatis.png?size=50x50&set=set1",
        "Walker": false,
        "Sitter": false
      }, {
        "Name": "Nananne Medlar",
        "Location": "Manchester",
        "Bio": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
        "Price": "£5.68",
        "Pic": "https://robohash.org/facerenecessitatibuscorrupti.png?size=50x50&set=set1",
        "Walker": true,
        "Sitter": false
      }, {
        "Name": "Marilyn Swetman",
        "Location": "St.albans",
        "Bio": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
        "Price": "£9.80",
        "Pic": "https://robohash.org/laudantiumaliquamcum.png?size=50x50&set=set1",
        "Walker": false,
        "Sitter": true
      }, {
        "Name": "Cristi Druitt",
        "Location": "Bedford",
        "Bio": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
        "Price": "£5.33",
        "Pic": "https://robohash.org/hicsequiomnis.png?size=50x50&set=set1",
        "Walker": true,
        "Sitter": true
      }, {
        "Name": "Eddie Mounsie",
        "Location": "Hertfordshire",
        "Bio": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
        "Price": "£4.45",
        "Pic": "https://robohash.org/maiorescumquealiquid.png?size=50x50&set=set1",
        "Walker": false,
        "Sitter": false
      }, {
        "Name": "Marcella Dineen",
        "Location": "Qiaotou",
        "Bio": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
        "Price": "£1.73",
        "Pic": "https://robohash.org/utdistinctioqui.png?size=50x50&set=set1",
        "Walker": false,
        "Sitter": false
      }, {
        "Name": "Meridel Argent",
        "Location": "Babura",
        "Bio": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
        "Price": "£7.83",
        "Pic": "https://robohash.org/voluptatemquisconsequatur.png?size=50x50&set=set1",
        "Walker": false,
        "Sitter": true
      }, {
        "Name": "Lonnard Loweth",
        "Location": "Mankoeng",
        "Bio": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
        "Price": "£2.34",
        "Pic": "https://robohash.org/cupiditaterepellatest.png?size=50x50&set=set1",
        "Walker": false,
        "Sitter": true
      }, {
        "Name": "Kathie Devenish",
        "Location": "Lincoln",
        "Bio": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
        "Price": "£0.40",
        "Pic": "https://robohash.org/eosadipisciaut.png?size=50x50&set=set1",
        "Walker": true,
        "Sitter": false
      }, {
        "Name": "Sophie Dutteridge",
        "Location": "Jamshoro",
        "Bio": "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
        "Price": "£0.11",
        "Pic": "https://robohash.org/beataequoslaboriosam.png?size=50x50&set=set1",
        "Walker": true,
        "Sitter": true
      }, {
        "Name": "Arnaldo Gores",
        "Location": "La Courneuve",
        "Bio": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
        "Price": "£0.62",
        "Pic": "https://robohash.org/sedipsumet.png?size=50x50&set=set1",
        "Walker": true,
        "Sitter": false
      }, {
        "Name": "Cash Ruddiforth",
        "Location": "Gapan",
        "Bio": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
        "Price": "£5.64",
        "Pic": "https://robohash.org/sintvitaemolestias.png?size=50x50&set=set1",
        "Walker": true,
        "Sitter": false
      }, {
        "Name": "Madelon Rycraft",
        "Location": "Unisław",
        "Bio": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
        "Price": "£3.30",
        "Pic": "https://robohash.org/utestnemo.png?size=50x50&set=set1",
        "Walker": true,
        "Sitter": true
      }, {
        "Name": "Ikey Oaten",
        "Location": "Karangpete",
        "Bio": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
        "Price": "£9.09",
        "Pic": "https://robohash.org/necessitatibusnonenim.png?size=50x50&set=set1",
        "Walker": true,
        "Sitter": true
      }, {
        "Name": "Markus Chalcroft",
        "Location": "Rājo Khanāni",
        "Bio": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
        "Price": "£3.12",
        "Pic": "https://robohash.org/eiusetquas.png?size=50x50&set=set1",
        "Walker": false,
        "Sitter": false
      }, {
        "Name": "Aurlie Janton",
        "Location": "Shushenskoye",
        "Bio": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
        "Price": "£5.27",
        "Pic": "https://robohash.org/quioditquia.png?size=50x50&set=set1",
        "Walker": true,
        "Sitter": false
      }, {
        "Name": "Krishna Mingaye",
        "Location": "Senangkhanikhom",
        "Bio": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
        "Price": "£9.64",
        "Pic": "https://robohash.org/aliquidquisquamquaerat.png?size=50x50&set=set1",
        "Walker": false,
        "Sitter": true
      }, {
        "Name": "Loralie Wildor",
        "Location": "Duszniki-Zdrój",
        "Bio": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
        "Price": "£1.41",
        "Pic": "https://robohash.org/accusantiumporrosaepe.png?size=50x50&set=set1",
        "Walker": false,
        "Sitter": true
      }, {
        "Name": "Emmalynne Autry",
        "Location": "Yutou",
        "Bio": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
        "Price": "£9.17",
        "Pic": "https://robohash.org/consequaturnesciuntmagni.png?size=50x50&set=set1",
        "Walker": true,
        "Sitter": false
      }]

      const item =({item})=>{
          return(
            
              <TouchableOpacity style={styles.box}>

<Image
  source={{
    uri: item.Pic,
    cache: 'only-if-cached'
  }}
  style={{ width: 40, height: 40,top: 25 }}
/>
                <Text style={styles.baseText}>
                

                  <Text>       </Text>
                  <Text>{item.Name},</Text>
                  <Text> </Text>
                  <Text>{item.Location},</Text>
                  <Text> </Text>
                  <Text>{item.Price} per hour</Text>
                  </Text>
              </TouchableOpacity>
              
              
          )

      }

      const searchName =(input)=>{
          let searchData= data.filter((item)=>{
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
                        {(input)=>{
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
                selectedValue={selectedValue}
                style={{ height: 50, width: 200 }}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
              >
               <Picker.Item label="-Choose-" value="choose" />   
               <Picker.Item label="Service: dog sitting" value="service" />
               <Picker.Item label="Service: dog walking" value="service" />
               <Picker.Item label="Price: low to high" value="price" />
               <Picker.Item label="Price: high to low" value="price" />
               <Picker.Item label="Rating: low to high" value="rating" />
               <Picker.Item label="Rating: high to low" value="rating" />
             </Picker>
             
            </View>
            <FlatList 
            style={{width:'100%'}}
                data={dataFromState}
                renderItem={item}
                keyExtractor={(item, index)=> index.toString()}/>


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
        marginTop: '-24%',
        marginLeft: '10%',
        //backgroundColor: 'red',
        


    },
    box:{
        width: "98%",
        height: 90,
        borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
        backgroundColor: "#FFEFC0",
        paddingHorizontal: 16,
        marginVertical: 10,
        left:"0%",
       
        textAlignVertical: "bottom",
        
        
       
    },

    pfp:{
      borderRadius:75,

    },

    

    baseText:{
      fontWeight: 'bold',
      textAlign: 'right',
      fontFamily: 'monospace',
      fontSize:15,


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