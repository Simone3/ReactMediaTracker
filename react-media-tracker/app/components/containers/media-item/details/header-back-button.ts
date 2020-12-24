import { HeaderFormExitBackComponent, HeaderFormExitBackComponentInput } from 'app/components/presentational/generic/header-form-exit-back';
import { State } from 'app/redux/state/state';
import { NavigationScreenProp } from 'react-navigation';
import { connect } from 'react-redux';

const mapStateToProps = (state: State, ownProps: MediaItemDetailsHeaderBackButtonContainerProps): HeaderFormExitBackComponentInput => {
	
	return {
		disabled: state.mediaItemDetails.saveStatus === 'SAVING',
		dirtyForm: state.mediaItemDetails.dirty,
		navigation: ownProps.navigation
	};
};

/**
 * Container component that handles Redux state for HeaderFormExitBackComponent
 */
export const MediaItemDetailsHeaderBackButtonContainer = connect(
	mapStateToProps
)(HeaderFormExitBackComponent);

/**
 * MediaItemDetailsHeaderBackButtonContainer's props
 */
export type MediaItemDetailsHeaderBackButtonContainerProps = {
	
	/**
	 * The navigation data
	 */
	navigation: NavigationScreenProp<object>;
}

