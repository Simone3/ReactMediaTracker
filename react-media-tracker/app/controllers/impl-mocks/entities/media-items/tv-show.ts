import { TvShowCatalogController, TvShowController } from 'app/controllers/core/entities/media-items/tv-show';
import { MediaItemMockedCatalogController, MediaItemMockedController } from 'app/controllers/impl-mocks/entities/media-items/media-item';
import { CatalogTvShowInternal, SearchTvShowCatalogResultInternal, TvShowFilterInternal, TvShowInternal, TvShowSortByInternal } from 'app/data/models/internal/media-items/tv-show';

/**
 * Mocked implementation of the TvShowController that contains an in-memory list of TV shows
 * @see TvShowController
 */
export class TvShowMockedController extends MediaItemMockedController<TvShowInternal, TvShowSortByInternal, TvShowFilterInternal> implements TvShowController {

	protected readonly mediaItems: {[user: string]: {[category: string]: TvShowInternal[]}} = {
		test: {
			3: [{
				id: '1',
				mediaType: 'TV_SHOW',
				status: 'NEW',
				name: 'My First TV Show',
				importance: '400'
			}, {
				id: '2',
				mediaType: 'TV_SHOW',
				status: 'NEW',
				name: 'My Second TV Show',
				importance: '100',
				averageEpisodeRuntimeMinutes: 50
			}, {
				id: '3',
				mediaType: 'TV_SHOW',
				status: 'ACTIVE',
				name: 'My Third TV Show',
				importance: '300',
				active: true
			}, {
				id: '4',
				mediaType: 'TV_SHOW',
				status: 'NEW',
				name: 'My Fourth TV Show',
				importance: '200'
			}]
		}
	};
}

/**
 * Mocked implementation of the TvShowCatalogController that contains an in-memory list of TV shows
 * @see TvShowCatalogController
 */
export class TvShowMockedCatalogController extends MediaItemMockedCatalogController<SearchTvShowCatalogResultInternal, CatalogTvShowInternal> implements TvShowCatalogController {

}
