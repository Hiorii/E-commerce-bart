import { connect } from 'react-redux';

import Feedback from './Feedback';

import { getAll, getCount } from '../../../redux/feedbackRedux.js';

const mapStateToProps = state => ({
  feedback: getAll(state),
  count: getCount(state),
});

export default connect(mapStateToProps)(Feedback);
