import React, { PropTypes } from 'react';
import {
  View,
  Image,
  StyleSheet
} from 'react-native';
import AppText from './AppText';
import { LIGHT_OVERLAY_COLOR } from '../styles/global';

import {
  DEVICE_HEIGHT,
  DEVICE_WIDTH
} from '../config/device';

const MINIMUM_IMAGE_HEIGHT = 460;
const IMAGE_SIZE = 300;

const OnboardingPanel = ({ backgroundColor, message, uri, style }) => (
  <View
    style={[styles.panel, { backgroundColor }, style]}
  >
    <View style={styles.content}>
      <AppText>{message}</AppText>
    </View>
    <View style={styles.container}>
      <Image
        source={{ uri }}
        style={{ width: IMAGE_SIZE, height: IMAGE_SIZE }}
      />
    </View>
  </View>
);

OnboardingPanel.propTypes = {
  message: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  uri: PropTypes.string.isRequired,
  style: View.propTypes.style
};

const calcTextContainerMaxHeight = (deviceHeight, minImageHeight) => {
  if ((deviceHeight - minImageHeight) < (deviceHeight * 0.25)) {
    return deviceHeight - minImageHeight;
  }
  return undefined;
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  panel: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    width: DEVICE_WIDTH
  },
  content: {
    flex: 0.25,
    justifyContent: 'flex-end',
    alignItems: 'center',
    alignSelf: 'stretch',
    padding: 20,
    marginBottom: 10,
    backgroundColor: LIGHT_OVERLAY_COLOR,
    maxHeight: calcTextContainerMaxHeight(DEVICE_HEIGHT, MINIMUM_IMAGE_HEIGHT)
  }
});

export default OnboardingPanel;
