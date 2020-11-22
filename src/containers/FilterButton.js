import { connect } from 'react-redux';
import { setVisibilityFilter } from '../redux/actions/actions';
import { Button } from '../components/Button/Button';

const mapStateToProps = (state, parentProps) => {
	return {
		active: parentProps.filter === state.visibilityFilter
	};
};

const mapDispatchToProps = (dispatch, parentProps) => {
	return {
		onFilter: () => dispatch(setVisibilityFilter(parentProps.filter))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Button);

