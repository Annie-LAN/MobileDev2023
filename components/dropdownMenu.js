import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';



const DropdownMenu = ({ items, value, setValue, setItems, placeholder }) => {
  const [open, setOpen] = useState(false);

  return (
    <View>
      {/* <Text style={styles.label}>{label}</Text> */}
      <DropDownPicker
        open = {open}
        value = {value}
        items = {items}
        setOpen = {setOpen}
        setValue = {setValue} 
        setItems = {setItems} 
        placeholder = {placeholder}
        listMode="SCROLLVIEW"    
      />

    </View>
  );
};

export default DropdownMenu;


// const styles = StyleSheet.create({
//   label: {
//     top: 50,
//     padding: 10,
//     backgroundColor: 'white',
//     fontSize: 20
//   },
//   container: {
//     flex: 1,
//     paddingTop: 40,
//     alignItems: "center"
//   }
  
// });