import { MovieCatalogController, MovieController } from 'app/data/controllers/core/entities/media-items/movie';
import { MediaItemMockedCatalogController, MediaItemMockedController } from 'app/data/controllers/impl-mocks/entities/media-items/media-item';
import { CatalogMovieInternal, MovieFilterInternal, MovieInternal, MovieSortByInternal, SearchMovieCatalogResultInternal } from 'app/data/models/internal/media-items/movie';

/**
 * Mocked implementation of the MovieController that contains an in-memory list of movies
 * @see MovieController
 */
export class MovieMockedController extends MediaItemMockedController<MovieInternal, MovieSortByInternal, MovieFilterInternal> implements MovieController {

	protected readonly mediaItems: {[category: string]: MovieInternal[]} = {
		2: [{
			id: '1',
			name: 'My First Movie',
			importance: 30
		}, {
			id: '2',
			name: 'My Second Movie',
			importance: 10
		}, {
			id: '3',
			name: 'My Third Movie',
			importance: 20
		}, {
			id: '4',
			name: 'My Fourth Movie',
			importance: 10
		}]
	};

	/**
	 * @override
	 */
	protected mockSort(mediaItems: MovieInternal[], sortBy: MovieSortByInternal): MovieInternal[] {
		
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
}

/**
 * Mocked implementation of the MovieCatalogController that contains an in-memory list of movies
 * @see MovieCatalogController
 */
export class MovieMockedCatalogController extends MediaItemMockedCatalogController<SearchMovieCatalogResultInternal, CatalogMovieInternal> implements MovieCatalogController {

}