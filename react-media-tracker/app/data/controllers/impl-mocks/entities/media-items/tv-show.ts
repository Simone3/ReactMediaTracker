import { TvShowCatalogController, TvShowController } from 'app/data/controllers/core/entities/media-items/tv-show';
import { MediaItemMockedCatalogController, MediaItemMockedController } from 'app/data/controllers/impl-mocks/entities/media-items/media-item';
import { CatalogTvShowInternal, SearchTvShowCatalogResultInternal, TvShowFilterInternal, TvShowInternal, TvShowSortByInternal } from 'app/data/models/internal/media-items/tv-show';

/**
 * Mocked implementation of the TvShowController that contains an in-memory list of TV shows
 * @see TvShowController
 */
export class TvShowMockedController extends MediaItemMockedController<TvShowInternal, TvShowSortByInternal, TvShowFilterInternal> implements TvShowController {

	protected readonly mediaItems: {[category: string]: TvShowInternal[]} = {
		3: [{
			id: '1',
			mediaType: 'TV_SHOW',
			status: 'NEW',
			name: 'My First TV Show',
			importance: 'VERY_IMPORTANT'
		}, {
			id: '2',
			mediaType: 'TV_SHOW',
			status: 'NEW',
			name: 'My Second TV Show',
			importance: 'UNIMPORTANT',
			averageEpisodeRuntimeMinutes: 50
		}, {
			id: '3',
			mediaType: 'TV_SHOW',
			status: 'ACTIVE',
			name: 'My Third TV Show',
			importance: 'IMPORTANT',
			active: true
		}, {
			id: '4',
			mediaType: 'TV_SHOW',
			status: 'NEW',
			name: 'My Fourth TV Show',
			importance: 'FAIRLY_IMPORTANT'
		}]
	};

	/**
	 * @override
	 */
	protected mockSort(mediaItems: TvShowInternal[], sortBy: TvShowSortByInternal): TvShowInternal[] {
		
		if(sortBy.field === 'NAME') {

			return mediaItems.sort((first, second) => {
				if(first.name < second.name) {
					return -1;
				}
				if(first.name > second.name) {
					return 1;
				}
				return 0;
			});
		}
		else {
			
			console.log('Sort option not currently mocked!');
			return mediaItems;
		}
	}
}

/**
 * Mocked implementation of the TvShowCatalogController that contains an in-memory list of TV shows
 * @see TvShowCatalogController
 */
export class TvShowMockedCatalogController extends MediaItemMockedCatalogController<SearchTvShowCatalogResultInternal, CatalogTvShowInternal> implements TvShowCatalogController {

}
