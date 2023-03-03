import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, SafeAreaView, View, FlatList } from 'react-native';
import Song from './components/song'
import Dropdown from './components/song'
import DropdownMenu from './components/dropdownMenu';
import MinMaxInput from './components/minMaxInput';


export default function App() {
  const[song, setSong] = useState([]);

  const [key, setKey] = useState(null);
  const [mode, setMode] = useState(null);
  const [timeSig, setTimeSig] = useState(null);

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
    getSongs()
  }, [])

  return (
    <SafeAreaView style={styles.container}>

      <MinMaxInput 
        placeholder = "Min Tempo (bpm)"
        onChangeText= {handleMinTempoChange}
      />

      <MinMaxInput 
        placeholder = "Max Tempo (bpm)"
        onChangeText= {handleMaxTempoChange}
      />

      <MinMaxInput 
        placeholder = "Min Year"
        onChangeText= {handleMinYearChange}
      />

      <MinMaxInput 
        placeholder = "Max Year"
        onChangeText= {handleMaxYearChange}
      />

      <MinMaxInput 
        placeholder = "Min Duration"
        onChangeText= {handleMinLenChange}
      />  
      <MinMaxInput 
        placeholder = "Max Duration"
        onChangeText= {handleMaxLenChange}
      />  

      <MinMaxInput 
        placeholder = "Min Loudness"
        onChangeText= {handleMinLoudChange}
      />  

      <MinMaxInput 
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
  generate:{
    marginTop: 30,
    justifyContent: 'center',
    padding: 8,
    fontSize: 25,
    color: "#000010",
    backgroundColor: "#FFE78F"
  }
});

