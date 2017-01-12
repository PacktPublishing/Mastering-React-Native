import React from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

const Bold = ({ children }) => <Text style={boldTextStyles.text}>{children}</Text>;
Bold.propTypes = {
  children: React.PropTypes.node.isRequired
};
const boldTextStyles = StyleSheet.create({
  text: {
    fontWeight: '600'
  }
});

const BodyCopy = ({ children }) => <Text style={bodyCopyStyles.text}>{children}</Text>;
BodyCopy.propTypes = {
  children: React.PropTypes.node.isRequired
};
const bodyCopyStyles = StyleSheet.create({
  text: {
    fontFamily: 'Helvetica',
    fontSize: 18,
    color: '#333'
  }
});

const Headline = ({ children }) => <Bold><Text style={headlineStyles.text}>{children}</Text></Bold>;
Headline.propTypes = {
  children: React.PropTypes.node.isRequired
};
const headlineStyles = StyleSheet.create({
  text: {
    fontFamily: 'Optima',
    fontSize: 30,
    color: '#333'
  }
});

const Demo = () => (
  <View>
    <Headline>This is a header</Headline>
    <BodyCopy>This is my regular or <Bold>bold</Bold> text.</BodyCopy>
  </View>
);

export default Demo;
