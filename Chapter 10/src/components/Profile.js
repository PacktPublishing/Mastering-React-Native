import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  NativeModules,
  Image,
  NativeEventEmitter
} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import Title from './Title';
import AppText from './AppText';
import * as globalStyles from '../styles/global';

const { ImageLibraryManager } = NativeModules;

export default class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.onSelectImage = this.onSelectImage.bind(this);
    this.onSelectImagePromise = this.onSelectImagePromise.bind(this);
  }

  componentWillMount() {
    const imageLibraryEvents = new NativeEventEmitter(ImageLibraryManager);
    this.setState({
      startEventSubscription: imageLibraryEvents.addListener(
        ImageLibraryManager.startEvent,
        () => console.log('Image Selection Started')
      ),
      endEventSubscription: imageLibraryEvents.addListener(
        ImageLibraryManager.endEvent,
        url => console.log('Image Selection Ended', url)
      )
    });
  }

  componentWillUnmount() {
    this.state.startEventSubscription.remove();
    this.state.endEventSubscription.remove();
  }

  onSelectImage() {
    ImageLibraryManager.selectImage((url) => {
      this.setState({
        profileImageUrl: url
      });
    });
  }

  onSelectImagePromise() {
    ImageLibraryManager.selectImagePromise().then((url) => {
      this.setState({
        profileImageUrl: url
      });
    });
  }

  renderProfileImage() {
    if (this.state.profileImageUrl) {
      return (
        <Image
          source={{ uri: this.state.profileImageUrl }}
          style={styles.profileImage}
        />
      );
    }
    return (
      <Icon
        name="user"
        style={styles.avatarIcon}
      />
    );
  }

  render() {
    return (
      <View style={[globalStyles.COMMON_STYLES.pageContainer, styles.container]}>
        <TouchableOpacity
          onPress={this.onSelectImagePromise}
        >
          {this.renderProfileImage()}
        </TouchableOpacity>
        <Title>Username</Title>
        <AppText>Your Name</AppText>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatarIcon: {
    color: globalStyles.HEADER_TEXT_COLOR,
    fontSize: 200
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75
  }
});
