import { connect } from 'react-redux';
import ProductSearch from './ProductSearch';
import { getAll } from '../../../redux/productsRedux.js';

const mapStateToProps = state => ({
  products: getAll(state),
});

export default connect(mapStateToProps)(ProductSearch);
