import { connect } from 'react-redux';
import BurgerMenu from './BurgerMenu';
import { getAll } from '../../../redux/categoriesRedux.js';

const mapStateToProps = state => ({
  categories: getAll(state),
});

export default connect(mapStateToProps)(BurgerMenu);
