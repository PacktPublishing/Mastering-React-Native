import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  View,
  LayoutAnimation,
  Animated,
  PanResponder
} from 'react-native';
import OnboardingButtons from './OnboardingButtons';
import OnboardingPanel from './OnboardingPanel';
import onboardingContent from '../config/onboarding';
import AppText from './AppText';
import CollapsibleView from './CollapsibleView';
import { ACCENT_COLORS } from '../styles/global';
import { DEVICE_WIDTH } from '../config/device';
import OnboardingProgress from './OnboardingProgress';

export default class Onboarding extends Component {
  constructor(props) {
    super(props);
    this.moveNext = this.moveNext.bind(this);
    this.movePrevious = this.movePrevious.bind(this);
    this.transitionToNextPanel = this.transitionToNextPanel.bind(this);
    this.moveFinal = this.moveFinal.bind(this);
    this.state = {
      currentIndex: 0,
      isDone: false,
      pan: new Animated.Value(0)
    };
  }

  componentWillMount() {
    this.dragPosition = 0;
    this.panListener = this.state.pan.addListener((value) => {
      this.dragPosition = value.value;
    });

    this.panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        this.state.pan.setOffset(this.dragPosition);
        this.state.pan.setValue(0);
      },

      onPanResponderMove: (e, gestureState) => {
        this.state.pan.setValue(gestureState.dx);
      },

      onPanResponderRelease: (e) => {
        const movedLeft = e.nativeEvent.pageX < (DEVICE_WIDTH / 2);
        let updateState = false;
        let toValue = movedLeft
          ? DEVICE_WIDTH * (this.state.currentIndex + 1) * -1
          : DEVICE_WIDTH * (this.state.currentIndex - 1) * -1;

        if (toValue > 0) {
          toValue = 0;
        } else if (toValue < ((DEVICE_WIDTH * onboardingContent.length) - DEVICE_WIDTH) * -1) {
          toValue = ((DEVICE_WIDTH * onboardingContent.length) - DEVICE_WIDTH) * -1;
        } else {
          updateState = true;
        }

        this.state.pan.flattenOffset();

        if (updateState) {
          this.transitionToNextPanel(movedLeft
            ? this.state.currentIndex + 1
            : this.state.currentIndex - 1
          );
        } else {
          Animated.spring(this.state.pan, {
            velocity: 0.5,
            tensions: 0.2,
            friction: 2,
            toValue
          }).start();
        }
      }
    });
  }

  componentWillUnmount() {
    this.state.pan.removeListener(this.panListener);
  }

  movePrevious() {
    this.transitionToNextPanel(this.state.currentIndex - 1);
  }

  moveNext() {
    this.transitionToNextPanel(this.state.currentIndex + 1);
  }

  transitionToNextPanel(nextIndex) {
    Animated.timing(this.state.pan, {
      toValue: nextIndex * DEVICE_WIDTH * -1,
      duration: 300
    }).start(() => {
      this.setState({
        currentIndex: nextIndex
      });
    });
  }

  moveFinal() {
    LayoutAnimation.configureNext({
      duration: 1250,
      update: {
        springDamping: 0.4,
        type: LayoutAnimation.Types.spring
      }
    });
    this.setState({ isDone: true });
    setTimeout(() => {
      this.props.push('home');
    }, 2000);
  }

  render() {
    return (
      <View style={styles.container}>
        <CollapsibleView
          style={[
            styles.container,
            { backgroundColor: onboardingContent[this.state.currentIndex].backgroundColor }
          ]}
          hide={this.state.isDone}
        >
          <Animated.View
            {...this.panResponder.panHandlers}
            style={[
              styles.panelContainer,
              { width: DEVICE_WIDTH * onboardingContent.length },
              {
                transform: [{
                  translateX: this.state.pan
                }]
              }
            ]}
          >
            {onboardingContent.map((panel, i) => (
              <OnboardingPanel key={i} {...panel} />
            ))}
          </Animated.View>
          <OnboardingProgress
            totalItems={onboardingContent.length}
            pan={this.state.pan}
          />
          <OnboardingButtons
            totalItems={onboardingContent.length}
            currentIndex={this.state.currentIndex}
            movePrevious={this.movePrevious}
            moveNext={this.moveNext}
            moveFinal={this.moveFinal}
          />
        </CollapsibleView>
        <CollapsibleView hide={!this.state.isDone} style={styles.doneContainer}>
          <AppText style={styles.doneText}>Let's read the news!</AppText>
        </CollapsibleView>
      </View>
    );
  }
}

Onboarding.propTypes = {
  push: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  panelContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  doneContainer: {
    overflow: 'hidden',
    backgroundColor: ACCENT_COLORS[0],
    justifyContent: 'center',
    alignItems: 'center'
  },
  doneText: {
    fontSize: 20
  }
});
