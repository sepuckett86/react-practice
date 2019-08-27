import { connect } from 'react-redux';
import VideoImages from '../components/videos/VideoImages';

const mapStateToProps = state => ({
  videoUrls: getImageVideoUrls(state)
});

export default connect(
  mapStateToProps
)(VideoImages);
