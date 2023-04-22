import React, { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';

const minMaxInput = (props) => {
  const [text, setText] = useState('');

  const onChangeText = (newText) => {
    setText(newText);
    if (props.onChangeText) {
      props.onChangeText(newText);
    }
  };

  return (
    <TextInput
      value={text}
      onChangeText={onChangeText}
      placeholder={props.placeholder}
      style={props.style}
    />
  );
};

export default minMaxInput;

const styles = StyleSheet.create({
  boxes: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: '#FFD4A9',
    alignItems: 'center',
    justifyContent: 'center',
  } });