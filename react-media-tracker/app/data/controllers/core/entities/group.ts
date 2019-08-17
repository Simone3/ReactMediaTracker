import { GroupMockedController } from 'app/data/controllers/impl-mocks/entities/group';
import { GroupInternal } from 'app/data/models/internal/group';

/**
 * The data controller for the group entities
 */
export interface GroupController {

	/**
	 * Gets all saved groups for the given category
	 * @param categoryId the category
	 * @returns the list of groups, as a promise
	 */
	getAllGroups(categoryId: string): Promise<GroupInternal[]>;

	/**
	 * Saves a group, adding it if the ID is not specified or updating it otherwise
	 * @param categoryId the category
	 * @param group the group
	 */
	saveGroup(categoryId: string, group: GroupInternal): Promise<void>;

	/**
	 * Deletes a group
	 * @param categoryId the category
	 * @param groupId the group ID
	 */
	deleteGroup(categoryId: string, groupId: string): Promise<void>;
}

/**
 * Singleton implementation of the group controller
 */
export const groupController: GroupController = new GroupMockedController();

