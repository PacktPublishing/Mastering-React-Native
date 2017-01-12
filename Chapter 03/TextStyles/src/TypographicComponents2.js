import React from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

const Bold = ({ children, style, ...otherProps }) => <Text style={[boldTextStyles.text, style]} {...otherProps}>{children}</Text>;
Bold.propTypes = {
  children: React.PropTypes.node.isRequired,
  style: Text.propTypes.style
};
const boldTextStyles = StyleSheet.create({
  text: {
    fontWeight: '600'
  }
});

const Demo = () => (
  <View>
    <Bold
      onPress={() => console.log('Pressed!')}
      numberOfLines={2}
      style={styles.green}
    >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec magna ipsum, lobortis quis rhoncus ac, suscipit sed dolor.
    </Bold>
  </View>
);

const styles = StyleSheet.create({
  green: {
    color: 'green'
  }
});

export default Demo;
