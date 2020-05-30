
import { GroupPickerFieldComponent, GroupPickerFieldComponentInput, GroupPickerFieldComponentOutput } from 'app/components/presentational/form/fields/group-picker';
import { requestGroupSelection } from 'app/redux/actions/group/generators';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

const mapDispatchToProps = (dispatch: Dispatch, ownProps: GroupPickerFieldContainerProps): GroupPickerFieldComponentOutput => {

	return {
		...ownProps,
		requestGroupSelection: () => {
			dispatch(requestGroupSelection());
		}
	};
};

/**
 * Container component that handles Redux state for GroupPickerFieldComponent
 */
export const GroupPickerFieldContainer = connect(
	null,
	mapDispatchToProps
)(GroupPickerFieldComponent);

/**
 * GroupPickerFieldContainer's input props
 */
export type GroupPickerFieldContainerInput = GroupPickerFieldComponentInput;

/**
 * GroupPickerFieldContainer's props
 */
export type GroupPickerFieldContainerProps = GroupPickerFieldContainerInput;
