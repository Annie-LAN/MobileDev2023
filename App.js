import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
  const[song, setSong] = useState([
    {name: "Party in the USA" , artist: "Miley Cyrus" , key: '1'},
    {name: 'Bohemian Rhapsody' , artist: 'Queen' , key: '2' },
    {name: 'Baby' , artist: 'Justin Bieber' , key: '3' }

  ]);
  return (
    <View style={styles.container}>
      <FlatList 
        data={song}
        renderItem={({ item }) => (
          <Text style={styles.songDisplay}>{item.song} {item.artist}</Text>

        )}
      
      
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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

