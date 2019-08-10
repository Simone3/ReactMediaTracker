import { HeaderFormExitBackComponent, HeaderFormExitBackComponentInput } from 'app/components/presentational/generic/header-form-exit-back';
import { State } from 'app/redux/state/state';
import { NavigationScreenProp } from 'react-navigation';
import { connect, MapStateToPropsParam } from 'react-redux';

const mapStateToProps: MapStateToPropsParam<HeaderFormExitBackComponentInput, CategoryDetailsHeaderBackButtonContainerProps, State> = (state: State, ownProps: CategoryDetailsHeaderBackButtonContainerProps): HeaderFormExitBackComponentInput => {
	
	return {
		dirtyForm: state.categoryDetails.dirty,
		navigation: ownProps.navigation
	};
};

/**
 * Container component that handles Redux state for HeaderFormExitBackComponent
 */
export const CategoryDetailsHeaderBackButtonContainer = connect(
	mapStateToProps,
	null
)(HeaderFormExitBackComponent);

/**
 * CategoryDetailsHeaderBackButtonContainer's props
 */
export type CategoryDetailsHeaderBackButtonContainerProps = {
	
	/**
	 * The navigation data
	 */
	navigation: NavigationScreenProp<object>;
}

