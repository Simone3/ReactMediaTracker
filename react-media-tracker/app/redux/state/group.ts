import { GroupInternal } from 'app/data/models/internal/group';

/**
 * Portion of the internal state with the groups list information
 */
export type GroupsListState = {

	/**
	 * The list of available groups
	 */
	readonly groups: GroupInternal[];

	/**
	 * The current status of the groups list
	 */
	readonly status: GroupsListStatus;
}

/**
 * The current status of the groups list
 */
export type GroupsListStatus = 'REQUIRES_FETCH' | 'FETCHING' | 'FETCHED' | 'DELETING';
