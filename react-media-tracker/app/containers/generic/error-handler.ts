import { clearError } from 'app/actions/error/generators';
import { ErrorHandlerComponent, ErrorHandlerComponentInput, ErrorHandlerComponentOutput } from 'app/components/generic/error-handler';
import { State } from 'app/models/internal/state/state';
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
