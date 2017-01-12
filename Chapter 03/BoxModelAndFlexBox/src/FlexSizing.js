import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import TotalSize from './components/TotalSize';
import CalcSizeItem from './components/CalcSizeItem';

const flexGrowDemoStyles = [
  { flexBasis: 50 },
  { flexBasis: 50, flexGrow: 2 },
  { flexBasis: 50, flexGrow: 1 }
];

const FlexSizing = () => (
  <View style={styles.container}>
    {flexGrowDemoStyles.map((style, i) => (
      <CalcSizeItem type="column" style={style} index={i} key={i} />
    ))}
    <TotalSize />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch'
  }
});

export default FlexSizing;
