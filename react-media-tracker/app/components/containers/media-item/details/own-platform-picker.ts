import { OwnPlatformPickerFieldComponent, OwnPlatformPickerFieldComponentInput, OwnPlatformPickerFieldComponentOutput } from 'app/components/presentational/form/fields/own-platform-picker';
import { requestOwnPlatformSelection } from 'app/redux/actions/own-platform/generators';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

const mapDispatchToProps = (dispatch: Dispatch, ownProps: OwnPlatformPickerFieldContainerProps): OwnPlatformPickerFieldComponentOutput => {

	return {
		...ownProps,
		requestEntitySelection: () => {
			dispatch(requestOwnPlatformSelection());
		}
	};
};

/**
 * Container component that handles Redux state for OwnPlatformPickerFieldComponent
 */
export const OwnPlatformPickerFieldContainer = connect(
	null,
	mapDispatchToProps
)(OwnPlatformPickerFieldComponent);

/**
 * OwnPlatformPickerFieldContainer's input props
 */
export type OwnPlatformPickerFieldContainerInput = OwnPlatformPickerFieldComponentInput;

/**
 * OwnPlatformPickerFieldContainer's props
 */
export type OwnPlatformPickerFieldContainerProps = OwnPlatformPickerFieldContainerInput;
