import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const DropdownMenu = ({ options, selectedValue, onValueChange, label }) => {
  return (
    <View>
      <Text>{label}</Text>
      <Picker
        selectedValue={selectedValue}
        onValueChange={onValueChange}
      >
        {options.map((option, index) => (
          <Picker.Item key={index} label={option.label} value={option.value} />
        ))}
      </Picker>
    </View>
  );
};

export default DropdownMenu;
