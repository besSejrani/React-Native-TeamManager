import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({ size, color }) => {
  const { spinnerContent } = styles;

  return (
    <View style={spinnerContent}>
      <ActivityIndicator size={size || 'large'} color={color} />
    </View>
  );
};

const styles = {
  spinnerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export default Spinner;
