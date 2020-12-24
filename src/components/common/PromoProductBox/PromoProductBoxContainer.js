import { connect } from 'react-redux';
import PromoProductBox from './PromoProductBox';
import {
  getNew,
  getHotDeal,
  handleFavourite,
  handleStar,
  handleStyle,
  handleCompare,
} from '../../../redux/productsRedux';
import { getAll } from '../../../redux/categoriesRedux.js';

const mapStateToProps = state => ({
  categories: getAll(state),
  products: getNew(state),
  hotDeal: getHotDeal(state),
});

const mapDispatchToProps = dispatch => ({
  handleFavourite: value => dispatch(handleFavourite(value)),
  handleStar: value => dispatch(handleStar(value)),
  handleStyle: value => dispatch(handleStyle(value)),
  handleCompare: value => dispatch(handleCompare(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PromoProductBox);
