import { NavigationExperimental } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchNews } from '../actions/newsActions';
import { openModal, closeModal } from '../actions/navigationActions';
import { addBookmark } from '../actions/bookmarkActions';
import Search from '../components/Search';
import { searchNewsSelector } from '../selectors/newsSelectors';

const { StateUtils } = NavigationExperimental;

const mapStateToProps = (state) => {
  const homeState = StateUtils.get(state.navigation, 'home');
  const searchState = homeState && StateUtils.get(homeState, 'search');
  const modal = searchState && searchState.modal;
  return {
    filteredNews: searchNewsSelector(state),
    modal: modal || undefined
  };
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    searchNews,
    onModalOpen: openModal,
    onModalClose: closeModal,
    addBookmark
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Search);
