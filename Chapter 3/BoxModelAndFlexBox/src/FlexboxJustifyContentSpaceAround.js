import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

const FlexBoxLayout = () => (
  <View style={styles.container}>
    <View style={styles.item} />
    <View style={styles.item} />
    <View style={styles.item} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start'
  },
  item: {
    backgroundColor: 'lightgoldenrodyellow',
    borderWidth: 1,
    borderColor: 'goldenrod',
    height: 150,
    width: 150
  }
});

export default FlexBoxLayout;
