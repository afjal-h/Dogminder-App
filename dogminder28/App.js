import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';


export default function App() {
  const handlepress=() => console.log("Text has been pressed LFG");
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.tinyLogo}
      
       source={require("./assets/icon.png")}/>
      <Text onPress={handlepress}>Username</Text>
      <Text>Password</Text>


      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#beeede',
    alignItems: 'center',
    justifyContent: 'center',
  },

  tinyLogo:{
    width: 200,
    height: 200,
    borderRadius:60


  }
  
});
