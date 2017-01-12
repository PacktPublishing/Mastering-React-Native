/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React from 'react';
import {
  View,
  AppRegistry,
  StyleSheet
} from 'react-native';

// Uncomment these one at a time and update the Demo component
import BasicType from './src/BasicType';
// import AdvancedType from './src/AdvancedType';
// import TypographicComponents1 from './src/TypographicComponents1';
// import TypographicComponents2 from './src/TypographicComponents2';

const Demo = () => (
  <View style={styles.container}>
    <BasicType />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 20
  }
});

AppRegistry.registerComponent('TextStyles', () => Demo);
