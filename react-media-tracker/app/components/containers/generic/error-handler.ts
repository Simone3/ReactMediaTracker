import { ErrorHandlerComponent, ErrorHandlerComponentInput, ErrorHandlerComponentOutput } from 'app/components/presentational/generic/error-handler';
import { State } from 'app/data/models/internal/state/state';
import { clearError } from 'app/redux/actions/error/generators';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

const mapStateToProps = (state: State): ErrorHandlerComponentInput => {
	
	return {
		error: state.error.error
	};
};

const mapDispatchToProps = (dispatch: Dispatch): ErrorHandlerComponentOutput => {

	return {
		clearError: () => {
			dispatch(clearError());
		}
	};
};

/**
 * Container component that handles Redux state for ErrorHandlerComponent
 */
export const ErrorHandlerContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(ErrorHandlerComponent);
