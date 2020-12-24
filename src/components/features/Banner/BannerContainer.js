import { connect } from 'react-redux';
import Banner from './Banner';

const mapStateToProps = state => ({
  ...state.bannerData,
});

export default connect(mapStateToProps)(Banner);
