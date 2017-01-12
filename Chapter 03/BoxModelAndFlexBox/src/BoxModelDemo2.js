import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

const BoxModelDemo = () => (
  <View style={styles.main}>
    <Text style={styles.content}>Column 1</Text>
    <Text style={styles.content}>Column 2</Text>
    <Text style={styles.content}>Column 3</Text>
  </View>
);

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingVertical: 20,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  content: {
    padding: 20,
    marginHorizontal: 10,
    backgroundColor: '#ef4c',
    width: 125,
    height: 125,
    borderWidth: 1,
    borderColor: 'red',
    textAlign: 'center'
  }
});

export default BoxModelDemo;
