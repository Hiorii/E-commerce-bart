import { connect } from 'react-redux';

import PriceFilter from './PriceFilter';

import { getAll, getProductByPrice } from '../../../redux/productsRedux';

const mapStateToProps = state => ({
  products: getAll(state),
  getProductByPrice: getProductByPrice(state),
});

export default connect(mapStateToProps)(PriceFilter);
