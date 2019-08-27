import { connect } from 'react-redux';
import Controls from '../components/Controls';
import { updateTitle, updateSubtitle } from '../actions/controlsActions';
import { getControls } from '../selectors/controlsSelectors';

const mapStateToProps = state => ({
  controls: getControls(state)
});

const mapDispatchToProps = dispatch => ({
  handleChange({ target }) {
    if(target.name === 'title') {
      dispatch(updateTitle(target.value));
    }
    if(target.name === 'subtitle') {
      dispatch(updateSubtitle(target.value));
    }
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Controls);
