import { connect } from 'react-redux';
import { getCompared, handleRemove } from '../../../redux/productsRedux';
import StickyBar from './StickyBar';

const mapStateToProps = state => ({
  products: getCompared(state),
});

const mapDispatchToProps = dispatch => ({
  handleRemove: value => dispatch(handleRemove(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StickyBar);
