import React, { PropTypes } from 'react';
import {
  TabBarIOS,
  StatusBar
} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import NewsFeedContainer from '../containers/NewsFeedContainer';
import SearchContainer from '../containers/SearchContainer';
import BookmarksContainer from '../containers/BookmarksContainer';
import Profile from './Profile';
import * as globalStyles from '../styles/global';

// Set the status bar for iOS to light
StatusBar.setBarStyle('light-content');

const HomeScreen = ({ selectedTab, tab }) => (
  <TabBarIOS
    barTintColor={globalStyles.BAR_COLOR}
    tintColor={globalStyles.LINK_COLOR}
    translucent={false}
  >
    <Icon.TabBarItemIOS
      iconName={'star'}
      title={'News'}
      selected={selectedTab === 'newsFeed'}
      onPress={() => tab('newsFeed')}
    >
      <NewsFeedContainer />
    </Icon.TabBarItemIOS>
    <Icon.TabBarItemIOS
      iconName={'search'}
      title={'Search'}
      selected={selectedTab === 'search'}
      onPress={() => tab('search')}
    >
      <SearchContainer />
    </Icon.TabBarItemIOS>
    <Icon.TabBarItemIOS
      iconName={'paperclip'}
      title={'Bookmarks'}
      selected={selectedTab === 'bookmarks'}
      onPress={() => tab('bookmarks')}
    >
      <BookmarksContainer />
    </Icon.TabBarItemIOS>
    <Icon.TabBarItemIOS
      iconName={'user'}
      title={'Profile'}
      selected={selectedTab === 'profile'}
      onPress={() => tab('profile')}
    >
      <Profile />
    </Icon.TabBarItemIOS>
  </TabBarIOS>
);

HomeScreen.propTypes = {
  selectedTab: PropTypes.string,
  tab: PropTypes.func.isRequired
};

export default HomeScreen;
