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
			name: 'My First TV Show',
			importance: 30
		}, {
			id: '2',
			name: 'My Second TV Show',
			importance: 10
		}, {
			id: '3',
			name: 'My Third TV Show',
			importance: 20
		}, {
			id: '4',
			name: 'My Fourth TV Show',
			importance: 10
		}]
	};

	/**
	 * @override
	 */
	protected mockSort(mediaItems: TvShowInternal[], sortBy: TvShowSortByInternal): TvShowInternal[] {
		
		if(sortBy.field === 'IMPORTANCE') {

			return mediaItems.sort((first, second) => {
				return first.importance - second.importance;
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
