import React from 'react';
import {
  Text,
  StyleSheet
} from 'react-native';

const BasicType = () => (
  <Text style={styles.headline}>
    Welcome to <Text style={styles.bold}>React</Text> Native {'\n'}
    <Text style={styles.subheader}>This is <Text style={styles.bold}>so cool!</Text></Text>
  </Text>
);

const styles = StyleSheet.create({
  headline: {
    fontFamily: 'Georgia',
    fontSize: 20
  },
  subheader: {
    color: 'blue'
  },
  bold: {
    fontWeight: 'bold'
  }
});

export default BasicType;
