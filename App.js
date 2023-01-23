import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, SafeAreaView, FlatList } from 'react-native';
import Song from './components/song'

export default function App() {
  const[song, setSong] = useState([]);

  useEffect(() => {
    setSong([{name: "Party in the USA" , artist: "Miley Cyrus" , key: '1'},
    {name: 'Bohemian Rhapsody' , artist: 'Queen' , key: '2' },
    {name: 'Baby' , artist: 'Justin Bieber' , key: '3' }])
  }, [])

  return (
    <SafeAreaView style={styles.container}>

      <FlatList 
        data={song}
        renderItem={({ item }) => (
          <Song song={item.name} artist={item.artist} />

        )}
      
      
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DFFF9A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  songDisplay: {
    marginTop: 30,
    padding: 30,
    backgroundColor: 'green',
    fontSize: 24
  }
});

