import { NavigationExperimental } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadNews } from '../actions/newsActions';
import { openModal, closeModal } from '../actions/navigationActions';
import { addBookmark } from '../actions/bookmarkActions';
import NewsFeed from '../components/NewsFeed';
import { allNewsSelector } from '../selectors/newsSelectors';

const { StateUtils } = NavigationExperimental;

const mapStateToProps = (state) => {
  const homeState = StateUtils.get(state.navigation, 'home');
  const newsFeedState = homeState && StateUtils.get(homeState, 'newsFeed');
  const modal = newsFeedState && newsFeedState.modal;
  return {
    news: allNewsSelector(state),
    modal: modal || undefined
  };
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    load: loadNews,
    onModalOpen: openModal,
    onModalClose: closeModal,
    addBookmark
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed);
