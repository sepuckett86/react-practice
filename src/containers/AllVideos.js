import { connect } from 'react-redux';
import VideoImages from '../components/videos/VideoImages';

const mapStateToProps = state => ({
  videoUrls: getImageVideoUrls(state)
});

const mapDispatchToProps = dispatch => {

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoImages);
