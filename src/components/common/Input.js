import React from 'react';
import { View, Text, TextInput } from 'react-native';

const Input = ({
  label,
  value,
  onChangeText,
  placeHolder,
  secureTextEntry
}) => {
  const { inputContent, labelContent, containerContent } = styles;
  return (
    <View style={containerContent}>
      <Text style={labelContent}>{label}</Text>
      <TextInput
        style={inputContent}
        value={value}
        onChangeText={onChangeText}
        autoCorrect={false}
        placeholder={placeHolder}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = {
  inputContent: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 17,
    lineHeight: 20,
    flex: 2
  },
  labelContent: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerContent: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export default Input;
