import { MovieDefinitionsController } from 'app/data/controllers/core/entities/media-items/movie';
import { MovieFilterInternal, MovieInternal, MovieSortByInternal } from 'app/data/models/internal/media-items/movie';

/**
 * Production implementation of the MovieDefinitionsController
 * @see MovieDefinitionsController
 */
export class MovieDefinitionsControllerImpl implements MovieDefinitionsController {

	/**
	 * @override
	 */
	public getDefaultFilter(): MovieFilterInternal {
		
		return {};
	}

	/**
	 * @override
	 */
	public getDefaultSortBy(): MovieSortByInternal {
		
		return {
			field: 'NAME',
			ascending: true
		};
	}

	/**
	 * @override
	 */
	public getCreatorNames(mediaItem: MovieInternal): string[] | undefined {

		return mediaItem.directors;
	}

	/**
	 * @override
	 */
	public getDurationValue(mediaItem: MovieInternal): number | undefined {

		return mediaItem.durationMinutes;
	}
}

