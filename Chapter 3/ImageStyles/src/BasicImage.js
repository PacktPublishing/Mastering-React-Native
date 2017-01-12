import React from 'react';
import { Image, StyleSheet } from 'react-native';

export const LocalImage = () => (
  <Image source={require('./images/pizza.jpg')} />
);

export const RemoteImage = () => (
  <Image
    source={{ uri: 'https://pixabay.com/static/uploads/photo/2014/11/08/17/05/pizza-522485_960_720.jpg' }}
    style={{ width: 150, height: 300 }}
  />
);

export const containerStyles = StyleSheet.create({
  container: { // eslint-disable-line react-native/no-unused-styles
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingVertical: 20
  }
});
