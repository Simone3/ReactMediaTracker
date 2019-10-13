import { HeaderFormExitBackComponent, HeaderFormExitBackComponentInput } from 'app/components/presentational/generic/header-form-exit-back';
import { State } from 'app/redux/state/state';
import { NavigationStackProp } from 'react-navigation-stack';
import { connect } from 'react-redux';

const mapStateToProps = (state: State, ownProps: GroupDetailsHeaderBackButtonContainerProps): HeaderFormExitBackComponentInput => {
	
	return {
		dirtyForm: state.groupDetails.dirty,
		navigation: ownProps.navigation
	};
};

/**
 * Container component that handles Redux state for HeaderFormExitBackComponent
 */
export const GroupDetailsHeaderBackButtonContainer = connect(
	mapStateToProps
)(HeaderFormExitBackComponent);

/**
 * GroupDetailsHeaderBackButtonContainer's props
 */
export type GroupDetailsHeaderBackButtonContainerProps = {
	
	/**
	 * The navigation data
	 */
	navigation: NavigationStackProp<object>;
}

