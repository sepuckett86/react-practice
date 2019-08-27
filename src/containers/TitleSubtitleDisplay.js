import { connect } from 'react-redux';
import Display from '../components/Display';
import { getControls } from '../selectors/controlsSelectors';

const mapStateToProps = state => ({
  controls: getControls(state)
});

export default connect(
  mapStateToProps
)(Display);
