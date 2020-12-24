import { connect } from 'react-redux';
import ProductList from './ProductList';
import { getAll } from '../../../redux/categoriesRedux.js';
import { getNew, getProductByPrice } from '../../../redux/productsRedux.js';

const mapStateToProps = state => ({
  categories: getAll(state),
  products: getNew(state),
  getProductByPrice: getProductByPrice(state),
});

export default connect(mapStateToProps)(ProductList);
