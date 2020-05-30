import { GroupsListComponent, GroupsListComponentInput, GroupsListComponentOutput } from 'app/components/presentational/group/list/list';
import { highlightGroup, selectGroup } from 'app/redux/actions/group/generators';
import { State } from 'app/redux/state/state';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

const mapStateToProps = (state: State, ownProps: GroupsListContainerProps): GroupsListComponentInput => {
	
	return {
		...ownProps,
		groups: state.groupsList.groups,
		currentGroup: state.groupGlobal.selectedGroup
	};
};

const mapDispatchToProps = (dispatch: Dispatch): GroupsListComponentOutput => {

	return {
		selectGroup: (group) => {
			dispatch(selectGroup(group));
		},
		highlightGroup: (group) => {
			dispatch(highlightGroup(group));
		}
	};
};

/**
 * Container component that handles Redux state for GroupsListComponent
 */
export const GroupsListContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(GroupsListComponent);

/**
 * GroupsListContainer's props
 */
export type GroupsListContainerProps = {
	
	/**
	 * If true, the list will always have "None" as the first element
	 */
	showNone?: boolean;

	/**
	 * If true, the list will show a radio button for each group
	 */
	showRadioButtons?: boolean;
}

