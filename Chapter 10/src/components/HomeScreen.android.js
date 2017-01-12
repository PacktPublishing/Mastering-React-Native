import React, { Component, PropTypes } from 'react';
import {
  DrawerLayoutAndroid,
  View,
  StyleSheet
} from 'react-native';
import NewsFeedContainer from '../containers/NewsFeedContainer';
import SearchContainer from '../containers/SearchContainer';
import BookmarksContainer from '../containers/BookmarksContainer';
import Profile from './Profile';
import AppText from './AppText';
import * as globalStyles from '../styles/global';

const navConfig = {
  order: ['newsFeed', 'search', 'bookmarks', 'profile'],
  newsFeed: {
    title: 'News',
    view: <NewsFeedContainer />,
    tab: 'newsFeed'
  },
  search: {
    title: 'Search',
    view: <SearchContainer />,
    tab: 'search'
  },
  bookmarks: {
    title: 'Bookmarks',
    view: <BookmarksContainer />,
    tab: 'bookmarks'
  },
  profile: {
    title: 'Profile',
    view: <Profile />,
    tab: 'profile'
  }
};

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.renderDrawer = this.renderDrawer.bind(this);
    this.showNav = this.showNav.bind(this);
  }

  showNav() {
    this.drawer.openDrawer();
  }

  renderDrawer() {
    return (
      <View style={styles.drawer}>
        {navConfig.order.map(key => (
          <AppText
            key={key}
            style={styles.drawerItem}
            onPress={() => {
              this.props.tab(navConfig[key].tab);
              this.drawer.closeDrawer();
            }}
          >
            {navConfig[key].title}
          </AppText>
        ))}
      </View>
    );
  }

  render() {
    return (
      <DrawerLayoutAndroid
        ref={(c) => { this.drawer = c; }}
        drawerWidth={310}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        drawerBackgroundColor="rgba(0,0,0,0.5)"
        renderNavigationView={this.renderDrawer}
      >
        <View style={styles.container}>
          <AppText
            style={styles.menuButton}
            onPress={this.showNav}
          >Menu</AppText>
          {navConfig[this.props.selectedTab].view}
        </View>
      </DrawerLayoutAndroid>
    );
  }
}

HomeScreen.propTypes = {
  selectedTab: PropTypes.string,
  tab: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: globalStyles.BG_COLOR,
    flex: 1
  },
  drawer: {
    backgroundColor: globalStyles.BG_COLOR,
    flex: 1,
    padding: 10
  },
  drawerItem: {
    fontSize: 20,
    marginBottom: 5
  },
  menuButton: {
    marginHorizontal: 10,
    marginTop: 10,
    color: globalStyles.LINK_COLOR
  }
});
