import { connect } from 'react-redux';

import MenuBar from './MenuBar';

import { getAll } from '../../../redux/categoriesRedux.js';

const mapStateToProps = state => ({
  categories: getAll(state),
});

export default connect(mapStateToProps)(MenuBar);
