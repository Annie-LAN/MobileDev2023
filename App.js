import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, SafeAreaView, View, FlatList, TextInput} from 'react-native';
import Song from './components/song'
import Dropdown from './components/song'
import DropdownMenu from './components/dropdownMenu';
import {KeyboardTrackingView, KeyboardAwareInsetsView, KeyboardRegistry, KeyboardAccessoryView, KeyboardUtils} from 'react-native-ui-lib/keyboard';


export default function App() {
  const[song, setSong] = useState([]);

  const [key, setKey] = useState(null);
  const [mode, setMode] = useState(null);
  const [timeSig, setTimeSig] = useState(null);

  const [artistName, setArtistName] = useState('');
  const [title, setTitle] = useState('');
  const [release, setRelease] = useState('');


  const [keyOptions, setKeyOptions] = useState([
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

  const modeOptions = [
    {label: "N/A", value: null},
    {label:"Major", value: 0}, 
    {label:"Minor", value: 1},
  ];

  const timeSigOptions = [
    {label: "N/A", value: null},
    {label:"0", value: 0}, 
    {label:"1", value: 1},
    {label: "3", value: 2},
    {label:"4", value: 3}, 
    {label:"5", value: 4},
    {label: "7", value: 5}

  ]

  // const handleValueChange = (value) => {
  //   setSelectedValue(value);
  // }


  const getSongs = (filters) => {
    let url = "http://10.105.12.214:3000/random/?"
    let keys = filters ? Object.keys(filters) : []
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
    let filters = {};
    if (artistName !== '') {
      filters['artist_name'] = artistName;
    }
    if (title !== '') {
      filters['title'] = title;
    }
    if (release !== '') {
      filters['release'] = release;
    }
    getSongs(filters);
  }, [artistName, title, release]);

  return (
    <SafeAreaView style={styles.container}>

      {/* <View flex paddingH-25 paddingT-120>
        <Text blue50 text20>Welcome</Text>
        <TextField text50 placeholder="username" grey10/>
        <TextField text50 placeholder="password" secureTextEntry grey10/>
        <View marginT-100 center>
          <Button text70 white background-orange30 label="Login"/>
          <Button link text70 orange30 label="Sign Up" marginT-20/>
        </View>
      </View> */}
      <TextInput
        style={styles.textInput}
        placeholder="Search by artist name"
        value={artistName}
        onChangeText={text => setArtistName(text)}
      />

      <TextInput
        style={styles.textInput}
        placeholder="Search by title"
        value={title}
        onChangeText={text => setTitle(text)}
      />

      <TextInput
        style={styles.textInput}
        placeholder="Search by release"
        value={release}
        onChangeText={text => setRelease(text)}
      />

      <DropdownMenu
    
        value = {key}
        items = {keyOptions}
        setValue = {setKey}
        setItems = {setKeyOptions}
        placeholder = "Select a Key"

      /> 

      {/* <DropdownMenu
        label = "Select a Mode"
        options = {modeOptions}
        selectedValue = {mode}
        onValueChange = {(itemValue, itemIndex) => setMode(itemValue)}
      /> 

      <DropdownMenu
        label = "Select a Time Signature"
        options = {timeSigOptions}
        selectedValue = {timeSig}
        onValueChange = {(itemValue, itemIndex) => setTimeSig(itemValue)}
      />  */}

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
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    padding: 5,
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

