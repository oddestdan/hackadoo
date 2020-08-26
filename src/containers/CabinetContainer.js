import { connect } from 'react-redux';
import Cabinet from '../pages/Cabinet/Cabinet';
import { setPath } from '../actions/pathActions';

const mapDispatchToProps = (dispatch) => ({
  savePathToStore: (path) => dispatch(setPath(path)),
});

const CabinetContainer = connect(null, mapDispatchToProps)(Cabinet);

export default CabinetContainer;
