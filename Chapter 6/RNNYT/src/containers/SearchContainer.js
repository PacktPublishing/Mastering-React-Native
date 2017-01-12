import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchNews } from '../actions/newsActions';
import Search from '../components/Search';
import { searchNewsSelector } from '../selectors/newsSelectors';

const mapStateToProps = state => ({
  filteredNews: searchNewsSelector(state)
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    searchNews
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Search);
