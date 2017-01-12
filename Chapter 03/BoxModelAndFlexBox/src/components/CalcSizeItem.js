import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

class CalcSizeItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: 0,
      height: 0
    };

    this.onLayoutChange = this.onLayoutChange.bind(this);
  }

  onLayoutChange(event) {
    const { width, height } = event.nativeEvent.layout;
    this.setState({ width, height });
  }

  render() {
    const { style, index, type } = this.props;
    const bgStyles = {
      backgroundColor: index % 2 ? 'lightgoldenrodyellow' : 'mistyrose'
    };
    const size = type === 'column' ? this.state.height : this.state.width;

    return (
      <View style={[styles.item, bgStyles, style]} onLayout={this.onLayoutChange}>
        <Text>{size}</Text>
      </View>
    );
  }
}

CalcSizeItem.propTypes = {
  type: React.PropTypes.string.isRequired,
  style: View.propTypes.style,
  index: React.PropTypes.number.isRequired
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'lightgoldenrodyellow',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CalcSizeItem;
