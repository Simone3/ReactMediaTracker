import { VideogameDefinitionsController } from 'app/data/controllers/core/entities/media-items/videogame';
import { VideogameFilterInternal, VideogameInternal, VideogameSortByInternal } from 'app/data/models/internal/media-items/videogame';

/**
 * Production implementation of the VideogameDefinitionsController
 * @see VideogameDefinitionsController
 */
export class VideogameDefinitionsControllerImpl implements VideogameDefinitionsController {

	/**
	 * @override
	 */
	public getDefaultFilter(): VideogameFilterInternal {
		
		return {};
	}

	/**
	 * @override
	 */
	public getDefaultSortBy(): VideogameSortByInternal {
		
		return {
			field: 'NAME',
			ascending: true
		};
	}

	/**
	 * @override
	 */
	public getCreatorNames(mediaItem: VideogameInternal): string[] | undefined {

		return mediaItem.developers;
	}

	/**
	 * @override
	 */
	public getDurationValue(mediaItem: VideogameInternal): number | undefined {

		return mediaItem.averageLengthHours;
	}
}
