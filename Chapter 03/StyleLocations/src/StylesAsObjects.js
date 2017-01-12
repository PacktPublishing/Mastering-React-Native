import React from 'react';
import { View, Text } from 'react-native';

const DemoComponent = () => (
  <View style={viewStyles}>
    <Text style={textStyles}>Hello World</Text>
  </View>
);

const viewStyles = {
  backgroundColor: 'blue',
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
};

const textStyles = {
  color: '#fff',
  fontSize: 22
};

export default DemoComponent;
