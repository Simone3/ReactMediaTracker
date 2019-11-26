import { AuthLoadingScreenComponent, AuthLoadingScreenComponentInput, AuthLoadingScreenComponentOutput } from 'app/components/presentational/auth/loading/screen';
import { checkUserLoginStatus } from 'app/redux/actions/user/generators';
import { State } from 'app/redux/state/state';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

const mapStateToProps = (state: State): AuthLoadingScreenComponentInput => {
	
	const status = state.userGlobal.status;

	let isLoggedIn;
	if(status === 'REQUIRES_CHECK') {

		isLoggedIn = undefined;
	}
	else if(status === 'AUTHENTICATED') {

		isLoggedIn = true;
	}
	else {

		isLoggedIn = false;
	}

	return {
		isLoggedIn: isLoggedIn
	};
};

const mapDispatchToProps = (dispatch: Dispatch): AuthLoadingScreenComponentOutput => {

	return {
		fetchLoginStatus: () => {
			dispatch(checkUserLoginStatus());
		}
	};
};

/**
 * Container component that handles Redux state for AuthLoadingScreenComponent
 */
export const AuthLoadingScreenContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(AuthLoadingScreenComponent);
