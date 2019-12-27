import { VideogameDefinitionsController } from 'app/controllers/core/entities/media-items/videogame';
import { DEFAULT_VIDEOGAME, VideogameFilterInternal, VideogameInternal, VideogameSortByInternal } from 'app/data/models/internal/media-items/videogame';

/**
 * Production implementation of the VideogameDefinitionsController
 * @see VideogameDefinitionsController
 */
export class VideogameDefinitionsControllerImpl implements VideogameDefinitionsController {

	/**
	 * @override
	 */
	public getDefaultFilter(): VideogameFilterInternal {
		
		return {
			status: 'CURRENT'
		};
	}

	/**
	 * @override
	 */
	public getDefaultSortBy(): VideogameSortByInternal[] {
		
		return [{
			field: 'ACTIVE',
			ascending: false
		}, {
			field: 'IMPORTANCE',
			ascending: false
		}, {
			field: 'RELEASE_DATE',
			ascending: true
		}];
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

	/**
	 * @override
	 */
	public getDefaultMediaItem(): VideogameInternal {
		
		return DEFAULT_VIDEOGAME;
	}
}
