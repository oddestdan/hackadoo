import { connect } from 'react-redux';
import Survey from '../components/Survey/Survey';
import { saveProgress } from '../actions/progressActions';

const mapStateToProps = (state) => {
  return {
    chosenPath: state.chosenPath,
    progress: state.progress,
  };
};

const mapDispatchToProps = (dispatch) => ({
  saveProgressToStore: (progress) => dispatch(saveProgress(progress)),
});

const SurveyContainer = connect(mapStateToProps, mapDispatchToProps)(Survey);

export default SurveyContainer;
