import { OwnPlatformInternal } from 'app/data/models/internal/own-platform';

/**
 * Portion of the internal state with the own platforms list information
 */
export type OwnPlatformsListState = {

	/**
	 * The list of available ownPlatforms
	 */
	readonly ownPlatforms: OwnPlatformInternal[];

	/**
	 * The current status of the ownPlatforms list
	 */
	readonly status: OwnPlatformsListStatus;
}

/**
 * Portion of the internal state with the own platform details information
 */
export type OwnPlatformDetailsState = {

	/**
	 * The ownPlatform data
	 */
	readonly ownPlatform?: OwnPlatformInternal;

	/**
	 * If the currently loaded ownPlatform is valid (no validation error occurred)
	 */
	readonly valid: boolean;

	/**
	 * If the currently loaded ownPlatform is dirty (one or more fields are different from initial values)
	 */
	readonly dirty: boolean;

	/**
	 * The current status of the ownPlatform saving process
	 */
	readonly saveStatus: OwnPlatformSaveStatus;
}

/**
 * The current status of the own platforms list
 */
export type OwnPlatformsListStatus = 'REQUIRES_FETCH' | 'FETCHING' | 'FETCHED' | 'DELETING';

/**
 * The current status of the own platform saving process
 */
export type OwnPlatformSaveStatus = 'IDLE' | 'REQUESTED' | 'SAVING' | 'SAVED';
