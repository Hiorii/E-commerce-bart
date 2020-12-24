import { connect } from 'react-redux';
import ProductMore from './ProductMore';
import { getMore } from '../../../redux/moreRedux.js';

const mapStateToProps = state => ({
  more: getMore(state),
});

export default connect(mapStateToProps)(ProductMore);
