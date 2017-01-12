import React from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

const Button = ({ style, children, ...otherProps }) => (
  <TouchableHighlight
    style={[buttonStyles.core, buttonStyles.hairlineBorder, style]}
    {...otherProps}
    underlayColor="#efefef"
    activeOpacity={0.8}
  >
    {children}
  </TouchableHighlight>
);

Button.propTypes = {
  style: TouchableHighlight.propTypes.style,
  children: React.PropTypes.node
};

const buttonStyles = StyleSheet.create({
  core: {
    borderStyle: 'solid',
    borderColor: '#d5d5d5',
    borderWidth: 1,
    backgroundColor: '#eee',
    borderRadius: 3,
    padding: 3,
    paddingLeft: 5,
    paddingRight: 5
  },
  hairlineBorder: {
    borderWidth: StyleSheet.hairlineWidth
  },
  spacer: {
    marginBottom: 10
  }
});

export default () => (
  <View style={styles.container}>
    <Button onPress={() => {}} style={buttonStyles.spacer}>
      <Text>Custom button with props</Text>
    </Button>
    <Button>
      <Text>Custom button</Text>
    </Button>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});
