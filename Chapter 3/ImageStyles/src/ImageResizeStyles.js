import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

const pizzaImage = require('./images/pizza.jpg');

export const ImageStyles1 = () => (
  <View>
    <View style={styles.row}>
      <Text style={styles.text}>Cover</Text>
      <Image source={pizzaImage} style={[styles.image, { resizeMode: 'cover' }]} />
    </View>
    <View style={styles.row}>
      <Text style={styles.text}>Contain</Text>
      <Image source={pizzaImage} style={[styles.image, { resizeMode: 'contain' }]} />
    </View>
    <View style={styles.row}>
      <Text style={styles.text}>Stretch</Text>
      <Image source={pizzaImage} style={[styles.image, { resizeMode: 'stretch' }]} />
    </View>
  </View>
);

export const ImageStyles2 = () => (
  <View>
    <View style={styles.row}>
      <Text style={styles.text}>Repeat</Text>
      <Image source={pizzaImage} style={[styles.image, { resizeMode: 'repeat' }]} />
    </View>
    <View style={styles.row}>
      <Text style={styles.text}>Center</Text>
      <Image source={pizzaImage} style={[styles.image, { resizeMode: 'center' }]} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: '#201713cc',
    borderWidth: StyleSheet.hairlineWidth,
    overflow: 'hidden',
    marginHorizontal: 20,
    marginBottom: 5
  },
  image: {
    width: 170,
    height: 205,
    borderWidth: 1,
    borderColor: '#201713cc',
    backgroundColor: '#fff',
    flex: 1
  },
  text: {
    fontSize: 22,
    minWidth: 120,
    textAlign: 'center'
  }
});

export const containerStyles = StyleSheet.create({
  container: { // eslint-disable-line react-native/no-unused-styles
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
    paddingVertical: 20
  }
});
