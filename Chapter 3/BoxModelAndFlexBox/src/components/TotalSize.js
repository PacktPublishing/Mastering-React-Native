import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions
} from 'react-native';

const { width, height } = Dimensions.get('window');

const TotalSize = () => (
  <View style={styles.totalSize}>
    <Text>{width} x {height}</Text>
  </View>
);

const styles = StyleSheet.create({
  totalSize: {
    backgroundColor: '#fff',
    padding: 3,
    position: 'absolute',
    bottom: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default TotalSize;
