import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, SafeAreaView, View, FlatList } from 'react-native';
import Song from './components/song'
import { useFonts } from 'expo-font';
import DropDownPicker from 'react-native-dropdown-picker';


export default function App() {
  const[song, setSong] = useState([]);

  ////KEY////
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      {label: "N/A", value: null},
      {label: 'A', value: '0'}, 
      {label: 'A#', value: '1'}, 
      {label: 'B', value: '2'}, 
      {label: 'C', value: '3'}, 
      {label: 'C#', value: '4'}, 
      {label: 'D', value: '5'}, 
      {label: 'D#', value: '6'}, 
      {label: 'E', value: '7'}, 
      {label: 'F', value: '8'}, 
      {label: 'F#', value: '9'}, 
      {label: 'G', value: '10'}, 
      {label: 'G#', value: '11'}, 

    ]);

    ////MODE////

      {label:"Major", value: 0}, 
      {label:"Minor", value: 1}, 


  const getSongs = (filters) => {
    let url = "http://10.105.12.214:3000/random/?"
    keys = filters ? Object.keys(filters) : []
    for (let i=0; i < keys.length; i++) {
      url += keys[i] + "=" + filters[keys[i]]
    }
    fetch(url).then((res) => {
      res.json().then((data) => {
        // console.log(data)
        setSong(data)
      })
    }).catch(() => console.log("error"))
  }

  useEffect(() => {
    getSongs()
  }, [])

  return (
    <SafeAreaView style={styles.container}>

    <DropDownPicker
      placeholderStyle={{
        color: "grey",
        fontWeight: "bold",
        fontSize: 20,
        padding: 5, 
        marginLeft: 10
      }}
      dropDownContainerStyle={{
        backgroundColor: "#dfdfdf",
        fontSize: 20
      }}
      containerStyle={{width: 200}}
      placeholder = "Select a Key"
      open = {open}
      value = {value}
      items = {items}
      setOpen = {setOpen}
      setValue = {setValue}
      setItems = {setItems}
    />

      <View>
        <Text onPress={getSongs} style={styles.generate}>Generate</Text>
      </View>
      
      <FlatList 
        data={song}
        renderItem={({ index, item }) => (
          <Song song={item.title} artist={item.artis_name} index={index}/>

        )}
          keyExtractor={item => item.title}
      
      />
    </SafeAreaView>
  );
}

// export default function App(){
//   const [loaded] = useFonts({
//     Inria: require('./assets/fonts/InriaSerif-Regular.ttf'),
//     InriaItalic: require('./assets/fonts/InriaSerif-LightItalic.ttf'),
//     InriaLight: require('./assets/fonts/InriaSerif-Light.ttf'),
//     InriaBoldI: require('./assets/fonts/InriaSerif-BoldItalic.ttf'),
//     InriaBold: require('./assets/fonts/InriaSerif-Bold.ttf'),
//   });

//   if (!loaded){
//     return null;
//   }

//   return(
//     <View style={{flex:1}}>
//       <Text style={{ fontFamily: 'Inria', fontSize: 27 }}>Inria</Text>
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD4A9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  songDisplay: {
    marginTop: 30,
    padding: 30,
    backgroundColor: 'green',
    fontSize: 24
  },
  generate:{
    marginTop: 30,
    justifyContent: 'center',
    padding: 8,
    fontSize: 25,
    color: "#000010",
    backgroundColor: "#FFE78F"
  }
});

