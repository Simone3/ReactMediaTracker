
import { OwnPlatformPickerFieldComponent, OwnPlatformPickerFieldComponentInput, OwnPlatformPickerFieldComponentOutput } from 'app/components/presentational/form/fields/own-platform-picker';
import { deleteOwnPlatform, fetchOwnPlatforms, loadNewOwnPlatformDetails, loadOwnPlatformDetails } from 'app/redux/actions/own-platform/generators';
import { State } from 'app/redux/state/state';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

const mapStateToProps = (state: State, ownProps: OwnPlatformPickerFieldContainerProps): OwnPlatformPickerFieldComponentInput => {
	
	return {
		...ownProps,
		requiresFetch: state.ownPlatformsList.status === 'REQUIRES_FETCH',
		fetching: state.ownPlatformsList.status === 'FETCHING',
		ownPlatforms: state.ownPlatformsList.ownPlatforms
	};
};

const mapDispatchToProps = (dispatch: Dispatch, ownProps: OwnPlatformPickerFieldContainerProps): OwnPlatformPickerFieldComponentOutput => {

	return {
		...ownProps,
		fetchOwnPlatforms: () => {
			dispatch(fetchOwnPlatforms());
		},
		loadNewOwnPlatformDetails: () => {
			dispatch(loadNewOwnPlatformDetails());
		},
		loadOwnPlatformDetails: (ownPlatform) => {
			dispatch(loadOwnPlatformDetails(ownPlatform));
		},
		deleteOwnPlatform: (ownPlatform) => {
			dispatch(deleteOwnPlatform(ownPlatform));
		}
	};
};

/**
 * Container component that handles Redux state for OwnPlatformPickerFieldComponent
 */
export const OwnPlatformPickerFieldContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(OwnPlatformPickerFieldComponent);

/**
 * OwnPlatformPickerFieldContainer's input props
 */
export type OwnPlatformPickerFieldContainerInput = Omit<OwnPlatformPickerFieldComponentInput, 'ownPlatforms' | 'requiresFetch' | 'fetching'>;

/**
 * OwnPlatformPickerFieldContainer's props
 */
export type OwnPlatformPickerFieldContainerProps = OwnPlatformPickerFieldContainerInput;
