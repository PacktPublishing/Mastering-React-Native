import React, { PropTypes } from 'react';
import {
  View,
  Animated,
  StyleSheet
} from 'react-native';
import { DEVICE_WIDTH } from '../config/device';

const BAR_WIDTH = 250;
const COMPLETION_BAR_BORDER_COLOR = '#fff';
const COMPLETION_BAR_BG_COLOR = 'transparent';
const COMPLETION_BAR_STATUS_BG_COLOR = '#fff6';

const computeCompletionBarWidth = (itemCount, barWidth, deviceWidth, pan) => {
  const inputRange = [];
  const outputRange = [];
  for (let i = itemCount - 1; i >= 0; i -= 1) {
    inputRange.push(deviceWidth * i * -1);
    outputRange.push(barWidth * ((i + 1) / itemCount));
  }

  if (outputRange.length < 2) {
    inputRange.push(inputRange[inputRange.length - 1]);
    outputRange.push(outputRange[outputRange.length - 1]);
  }

  return {
    width: pan.interpolate({
      inputRange,
      outputRange
    })
  };
};

const OnboardingProgress = ({ totalItems, pan }) => (
  <View style={styles.container}>
    <View style={styles.bar}>
      <Animated.View
        style={[
          styles.status,
          computeCompletionBarWidth(totalItems, BAR_WIDTH, DEVICE_WIDTH, pan)
        ]}
      />
    </View>
  </View>
);

OnboardingProgress.propTypes = {
  totalItems: PropTypes.number.isRequired,
  pan: PropTypes.instanceOf(Animated.Value)
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 100,
    left: 0,
    right: 0
  },
  bar: {
    borderRadius: 6,
    height: 10,
    borderWidth: 1,
    borderColor: COMPLETION_BAR_BORDER_COLOR,
    backgroundColor: COMPLETION_BAR_BG_COLOR,
    marginHorizontal: 20,
    width: BAR_WIDTH,
    overflow: 'hidden',
    flexDirection: 'row'
  },
  status: {
    backgroundColor: COMPLETION_BAR_STATUS_BG_COLOR,
    height: 8
  }
});

export default OnboardingProgress;
