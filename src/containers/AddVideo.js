import { connect } from 'react-redux';
import VideoForm from '../components/form/VideoForm';
import { getId } from '../selectors/videoFormSelectors';
import { updateFormId } from '../actions/videoFormActions';
import { addVideo } from '../actions/videoActions';

const mapStateToProps = state => ({
  id: getId(state)
});

const mapDispatchToProps = dispatch => ({
  handleChange({ target }) {
    dispatch(updateFormId(target.value));
  },
  handleSubmit(event, id) {
    event.preventDefault();
    dispatch(addVideo(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoForm);
