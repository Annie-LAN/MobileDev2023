import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, SafeAreaView, View, FlatList } from 'react-native';
import Song from './components/song'

export default function App() {
  const[song, setSong] = useState([]);

  useEffect(() => {
    setSong([{name: "Party in the USA" , artist: "Miley Cyrus" , key: '1'},
    {name: 'Bohemian Rhapsody' , artist: 'Queen' , key: '2' },
    {name: 'Baby' , artist: 'Justin Bieber' , key: '3' }, 
    {name: 'Rolling in the Deep', artist: 'Adele', key: '4' },
    {name: 'Toxic', artist: 'Brittany Spears', key: '5'},
    {name: 'Shirt', artist: 'SZA', key: '6'},
    {name: 'Low', artist: 'SZA', key: '7' }, 
    {name: 'Spins', artist: 'Mac Miller', key: '8'},
    {name: 'Bad Habit', artist: 'Steve Lacy', key: '9'},
    {name: 'Single Ladies', artist: 'Beyonce', key: '10'}])
  }, [])

  return (
    <SafeAreaView style={styles.container}>

      <View>
        <Text style={styles.generate}>Generate</Text>
      </View>
      
      <FlatList 
        data={song}
        renderItem={({ index, item }) => (
          <Song song={item.name} artist={item.artist} index={index}/>

        )}
      
      
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

