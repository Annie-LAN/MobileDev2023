import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, SafeAreaView, View, FlatList, TextInput, ScrollView} from 'react-native';
import Song from './components/song'
import Dropdown from './components/song'
import DropdownMenu from './components/dropdownMenu';
import {KeyboardTrackingView, KeyboardAwareInsetsView, KeyboardRegistry, KeyboardAccessoryView, KeyboardUtils} from 'react-native-ui-lib/keyboard';
import MinMaxInput from './components/minMaxInput';


export default function FilterScreen() {
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

  const [modeOptions, setModeOptions] = useState([
    {label: "N/A", value: null},
    {label:"Major", value: 0}, 
    {label:"Minor", value: 1},
  ]);

  const [timeSigOptions, setTimeSigOptions] = useState([
    {label: "N/A", value: null},
    {label:"0", value: 0}, 
    {label:"1", value: 1},
    {label: "3", value: 2},
    {label:"4", value: 3}, 
    {label:"5", value: 4},
    {label: "7", value: 5}

  ]);

  //tempo//
  const [minTemp, setMinTemp] = useState(null);
  const handleMinTempoChange = (newVal) => {
    setMinTemp(newVal);
  };
  const [maxTemp, setMaxTemp] = useState(null);
  const handleMaxTempoChange = (newVal) => {
    setMaxTemp(newVal);
  };

  //year//
  const [minYear, setMinYear] = useState(null);
  const handleMinYearChange = (newVal) => {
    setMinYear(newVal);
  };
  const [maxYear, setMaxYear] = useState(null);
  const handleMaxYearChange = (newVal) => {
    setMaxYear(newVal);
  };

  //duration//
  const [minLen, setMinLen] = useState(null);
  const handleMinLenChange = (newVal) => {
    setMinLen(newVal);
  };
  const [maxLen, setMaxLen] = useState(null);
  const handleMaxLenChange = (newVal) => {
    setMaxLen(newVal);
  };

  //loudness//
  const [minLoud, setMinLoud] = useState(null);
  const handleMinLoudChange = (newVal) => {
    setMinLoud(newVal);
  };
  const [maxLoud, setMaxLoud] = useState(null);
  const handleMaxLoudChange = (newVal) => {
    setMaxLoud(newVal);
  };


  const getSongs = (filters) => {
    let url = "http://10.47.121.2021:3000/random/?"
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
      <ScrollView contentContainerStyle={{width: '50%'}}>

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

      <MinMaxInput 
        style={styles.textInput}
        placeholder = "Min Tempo (bpm)"
        onChangeText= {handleMinTempoChange}
      />

      <MinMaxInput 
        style={styles.textInput}
        placeholder = "Max Tempo (bpm)"
        onChangeText= {handleMaxTempoChange}
      />

      <MinMaxInput 
        style={styles.textInput}
        placeholder = "Min Year"
        onChangeText= {handleMinYearChange}
      />

      <MinMaxInput 
        style={styles.textInput}
        placeholder = "Max Year"
        onChangeText= {handleMaxYearChange}
      />

      <MinMaxInput 
        style={styles.textInput}
        placeholder = "Min Duration"
        onChangeText= {handleMinLenChange}
      />  
      <MinMaxInput 
        style={styles.textInput}
        placeholder = "Max Duration"
        onChangeText= {handleMaxLenChange}
      />  

      <MinMaxInput 
        style={styles.textInput}
        placeholder = "Min Loudness"
        onChangeText= {handleMinLoudChange}
      />  

      <MinMaxInput 
        style={styles.textInput}
        placeholder = "Max Loudness"
        onChangeText= {handleMaxLoudChange}
      />  





      {/* DROPDOWNS */}
      <DropdownMenu
        value = {key}
        items = {keyOptions}
        setValue = {setKey}
        setItems = {setKeyOptions}
        placeholder = "Select a Key"
        z={100}

      /> 

      <DropdownMenu
        value = {mode}
        items = {modeOptions}
        setValue = {setMode}
        setItems = {setModeOptions}
        placeholder = "Select a Mode"
        z={99}
      /> 

      <DropdownMenu
        value = {timeSig}
        items = {timeSigOptions}
        setValue = {setTimeSig}
        setItems = {setTimeSigOptions}
        placeholder = "Select a Time Signature"
        z={98}
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
        <Text onPress={getSongs} style={styles.generate}>Swirl!</Text>
      </View>

      {song.map((item, index) =>  <Song song={item.title} artist={item.artis_name} index={index} key={item.title}/>)}
      
      {/* <FlatList 
        data={song}
        renderItem={({ index, item }) => (
          <Song song={item.title} artist={item.artis_name} index={index}/>

        )}

          keyExtractor={item => item.title}
      
      /> */}
      </ScrollView>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'gray',
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
    alignItems: 'center',
    padding: 8,
    fontSize: 25,
    color: "#000010",
    backgroundColor: "#FFE78F"
  }
});

