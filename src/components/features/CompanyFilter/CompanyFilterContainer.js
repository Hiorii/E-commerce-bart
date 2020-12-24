import { connect } from 'react-redux';

import CompanyFilter from './CompanyFilter';

import { getAll, getProductByManufacturer } from '../../../redux/productsRedux';

const mapStateToProps = state => ({
  products: getAll(state),
  companies: getProductByManufacturer(state),
});

export default connect(mapStateToProps)(CompanyFilter);
