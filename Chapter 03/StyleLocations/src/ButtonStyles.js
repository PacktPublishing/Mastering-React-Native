import React from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

const ButtonStyles = () => (
  <View style={viewStyles}>
    <TouchableHighlight
      style={[buttonStyles.core, buttonStyles.spacer]}
    >
      <Text>Default Normal</Text>
    </TouchableHighlight>
    <TouchableHighlight
      style={[buttonStyles.core, buttonStyles.hairlineBorder, buttonStyles.spacer]}
      underlayColor="#efefef"
      activeOpacity={0.8}
      onPress={() => {}}
    >
      <Text>Default Hairline</Text>
    </TouchableHighlight>
    <TouchableHighlight
      style={[buttonStyles.core, buttonStyles.primary, buttonStyles.spacer]}
    >
      <Text>Primary Normal</Text>
    </TouchableHighlight>
    <TouchableHighlight
      style={[buttonStyles.core, buttonStyles.primary, buttonStyles.hairlineBorder]}
      underlayColor="#60b044cc"
      activeOpacity={0.9}
      onPress={() => {}}
    >
      <Text>Primary Hairline</Text>
    </TouchableHighlight>
  </View>
);

const buttonStyles = StyleSheet.create({
  core: {
    borderStyle: 'solid',
    borderColor: '#d5d5d5',
    borderWidth: 1,
    backgroundColor: '#eee',
    borderRadius: 3,
    padding: 3,
    paddingLeft: 5,
    paddingRight: 5
  },
  primary: {
    backgroundColor: '#60b044',
    borderColor: '#355f27'
  },
  hairlineBorder: {
    borderWidth: StyleSheet.hairlineWidth
  },
  spacer: {
    marginBottom: 10
  }
});

const viewStyles = {
  backgroundColor: 'white',
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
};

export default ButtonStyles;
