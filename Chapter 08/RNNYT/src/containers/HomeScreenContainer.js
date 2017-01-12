import { NavigationExperimental } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import HomeScreen from '../components/HomeScreen';

import { tab } from '../actions/navigationActions';

const { StateUtils } = NavigationExperimental;

const mapStateToProps = (state) => {
  const homeState = StateUtils.get(state.navigation, 'home');
  return {
    selectedTab: homeState ? homeState.routes[homeState.index].key : 'newsFeed'
  };
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    tab
  }, dispatch)
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
