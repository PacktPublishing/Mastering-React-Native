import { NavigationExperimental } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { openModal, closeModal } from '../actions/navigationActions';
import { loadBookmarks, addBookmark } from '../actions/bookmarkActions';
import NewsFeed from '../components/NewsFeed';
import { bookmarkedNewsSelector } from '../selectors/newsSelectors';

const { StateUtils } = NavigationExperimental;

const mapStateToProps = (state) => {
  const homeState = StateUtils.get(state.navigation, 'home');
  const bookmarksState = homeState && StateUtils.get(homeState, 'bookmarks');
  const modal = bookmarksState && bookmarksState.modal;
  return {
    news: bookmarkedNewsSelector(state),
    modal: modal || undefined
  };
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    load: loadBookmarks,
    onModalOpen: openModal,
    onModalClose: closeModal,
    addBookmark
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed);
