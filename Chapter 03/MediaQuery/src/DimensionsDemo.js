import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions
} from 'react-native';

const getDimensions = () => {
  const { width, height, scale } = Dimensions.get('window');
  console.log(`width: ${width}, height: ${height}, scale: ${scale}`);
};

const DimensionsDemo = () => {
  getDimensions();
  return (
    <View style={styles.container}>
      <Text>Check your browser console log</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});

export default DimensionsDemo;
