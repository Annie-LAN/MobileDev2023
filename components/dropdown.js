import React, { useState, useEffect } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

let Dropdown = ({items, holder}) => {
  
    ////KEY////
      const [open, setOpen] = useState(false);
      const [value, setValue] = useState(null);
      const [items, setItems] = useState([
        {items}
      ]);

    }

      return(
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
            placeholder = {holder}
            open = {open}
            value = {value}
            items = {items}
            setOpen = {setOpen}
            setValue = {setValue}
            setItems = {setItems}
        />


      )