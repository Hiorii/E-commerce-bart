import { connect } from 'react-redux';
import Sale from './Sale';

const mapStateToProps = state => ({
  saleContent: state.saleContent,
  saleFeedback: state.saleFeedback,
});

export default connect(mapStateToProps)(Sale);
