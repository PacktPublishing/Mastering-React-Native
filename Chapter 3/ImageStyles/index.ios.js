/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React from 'react';
import {
  View,
  AppRegistry
} from 'react-native';

// Uncomment these one at a time and update the Demo component
// import { LocalImage, RemoteImage, containerStyles } from './src/BasicImage';
// import { ImageStyles1, ImageStyles2, containerStyles } from './src/ImageResizeStyles';
import BackgroundImage, { containerStyles } from './src/BackgroundImage';

const Demo = () => (
  <View style={containerStyles.container}>
    <BackgroundImage />
  </View>
);

AppRegistry.registerComponent('ImageStyles', () => Demo);
