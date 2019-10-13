
import { GroupPickerFieldComponent, GroupPickerFieldComponentInput, GroupPickerFieldComponentOutput } from 'app/components/presentational/form/fields/group-picker';
import { deleteGroup, fetchGroups, loadGroupDetails, loadNewGroupDetails } from 'app/redux/actions/group/generators';
import { State } from 'app/redux/state/state';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

const mapStateToProps = (state: State, ownProps: GroupPickerFieldContainerProps): GroupPickerFieldComponentInput => {
	
	return {
		...ownProps,
		requiresFetch: state.groupsList.status === 'REQUIRES_FETCH',
		groups: state.groupsList.groups
	};
};

const mapDispatchToProps = (dispatch: Dispatch, ownProps: GroupPickerFieldContainerProps): GroupPickerFieldComponentOutput => {

	return {
		...ownProps,
		fetchGroups: () => {
			dispatch(fetchGroups());
		},
		addNewGroup: () => {
			dispatch(loadNewGroupDetails());
		},
		editGroup: (group) => {
			dispatch(loadGroupDetails(group));
		},
		deleteGroup: (group) => {
			dispatch(deleteGroup(group));
		}
	};
};

/**
 * Container component that handles Redux state for GroupPickerFieldComponent
 */
export const GroupPickerFieldContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(GroupPickerFieldComponent);

/**
 * GroupPickerFieldContainer's input props
 */
export type GroupPickerFieldContainerInput = Omit<GroupPickerFieldComponentInput, 'groups' | 'requiresFetch'>;

/**
 * GroupPickerFieldContainer's props
 */
export type GroupPickerFieldContainerProps = GroupPickerFieldContainerInput;
