import { TvShowDefinitionsController } from 'app/data/controllers/core/entities/media-items/tv-show';
import { DEFAULT_TV_SHOW, TvShowFilterInternal, TvShowInternal, TvShowSortByInternal } from 'app/data/models/internal/media-items/tv-show';

/**
 * Production implementation of the TvShowDefinitionsController
 * @see TvShowDefinitionsController
 */
export class TvShowDefinitionsControllerImpl implements TvShowDefinitionsController {

	/**
	 * @override
	 */
	public getDefaultFilter(): TvShowFilterInternal {
		
		return {
			status: 'CURRENT'
		};
	}

	/**
	 * @override
	 */
	public getDefaultSortBy(): TvShowSortByInternal[] {
		
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
	public getCreatorNames(mediaItem: TvShowInternal): string[] | undefined {

		return mediaItem.creators;
	}

	/**
	 * @override
	 */
	public getDurationValue(mediaItem: TvShowInternal): number | undefined {

		return mediaItem.averageEpisodeRuntimeMinutes;
	}

	/**
	 * @override
	 */
	public getDefaultMediaItem(): TvShowInternal {
		
		return DEFAULT_TV_SHOW;
	}
}

