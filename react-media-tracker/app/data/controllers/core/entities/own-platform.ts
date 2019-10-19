import { OwnPlatformMockedController } from 'app/data/controllers/impl-mocks/entities/own-platform';
import { OwnPlatformInternal } from 'app/data/models/internal/own-platform';

/**
 * The data controller for the own platform entities
 */
export interface OwnPlatformController {

	/**
	 * Gets all saved own platforms for the given category
	 * @param categoryId the category
	 * @returns the list of own platforms, as a promise
	 */
	getAllOwnPlatforms(categoryId: string): Promise<OwnPlatformInternal[]>;

	/**
	 * Saves a own platform, adding it if the ID is not specified or updating it otherwise
	 * @param categoryId the category
	 * @param ownPlatform the own platform
	 */
	saveOwnPlatform(categoryId: string, ownPlatform: OwnPlatformInternal): Promise<void>;

	/**
	 * Deletes a own platform
	 * @param categoryId the category
	 * @param ownPlatformId the own platform ID
	 */
	deleteOwnPlatform(categoryId: string, ownPlatformId: string): Promise<void>;
}

/**
 * Singleton implementation of the own platform controller
 */
export const ownPlatformController: OwnPlatformController = new OwnPlatformMockedController();
