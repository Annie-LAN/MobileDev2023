import React, { useState } from 'react';
import { TextInput } from 'react-native';

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