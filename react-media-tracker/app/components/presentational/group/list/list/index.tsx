import React, { Component, ReactNode } from 'react';
import { FlatList, Text, View } from 'react-native';
import { GroupInternal } from 'app/data/models/internal/group';
import { GroupRowComponent } from 'app/components/presentational/group/list/row';
import { i18n } from 'app/utilities/i18n';
import { styles } from 'app/components/presentational/group/list/list/styles';
import { GroupContextMenuContainer } from 'app/components/containers/group/list/context-menu';

/**
 * Presentational component to display the list of user groups
 */
export class GroupsListComponent extends Component<GroupsListComponentInput & GroupsListComponentOutput> {
	
	private static readonly NONE_ID = 'none';

	/**
	 * @override
	 */
	public render(): ReactNode {

		const {
			groups,
			showNone
		} = this.props;

		if(groups.length > 0 || showNone) {

			return this.renderList();
		}
		else {

			return this.renderEmptyList();
		}
	}

	/**
	 * Helper method to render the no groups message
	 * @returns the node portion
	 */
	private renderEmptyList(): ReactNode {

		return <Text style={styles.emptyMessage}>{i18n.t('group.list.empty')}</Text>;
	}

	/**
	 * Helper method to render groups list
	 * @returns the node portion
	 */
	private renderList(): ReactNode {

		const {
			groups,
			currentGroup,
			showNone,
			showRadioButtons,
			selectGroup,
			highlightGroup
		} = this.props;

		let groupsToDisplay = groups;
		if(showNone) {

			groupsToDisplay = [{
				id: GroupsListComponent.NONE_ID,
				name: i18n.t('group.list.none')
			}].concat(groups);
		}

		return (
			<View style={styles.container}>
				<FlatList
					style={styles.list}
					contentContainerStyle={styles.listContentContainer}
					data={groupsToDisplay}
					renderItem={({ item }) => {
						return (
							<GroupRowComponent
								group={item}
								selected={Boolean((currentGroup && item.id === currentGroup.id) || (!currentGroup && item.id === GroupsListComponent.NONE_ID))}
								showRadioButton={showRadioButtons}
								select={() => {
									selectGroup(item.id === GroupsListComponent.NONE_ID ? undefined : item);
								}}
								showOptionsMenu={
									item.id === GroupsListComponent.NONE_ID ?
										undefined :
										() => {
											highlightGroup(item);
										}}
							/>
						);
					}}
					keyExtractor={(item) => {
						return item.id;
					}}
				/>
				<GroupContextMenuContainer/>
			</View>
		);
	}
}

/**
 * GroupsListComponent's input props
 */
export type GroupsListComponentInput = {

	/**
	 * The groups list to be displayed
	 */
	groups: GroupInternal[];

	/**
	 * If true, the list will always have "None" as the first element
	 */
	showNone?: boolean;

	/**
	 * If true, the list will show a radio button for each group
	 */
	showRadioButtons?: boolean;

	/**
	 * To be used together with showRadioButtons to define the currently selected group. Undefined means "None", if present.
	 */
	currentGroup?: GroupInternal;
}

/**
 * GroupsListComponent's output props
 */
export type GroupsListComponentOutput = {

	/**
	 * Callback to select a group (e.g. click on list item). Undefined means "None", if present.
	 */
	selectGroup: (group: GroupInternal | undefined) => void;

	/**
	 * Callback to set a group as highlighted, e.g. to open its dialog menu
	 */
	highlightGroup: (group: GroupInternal) => void;
}
