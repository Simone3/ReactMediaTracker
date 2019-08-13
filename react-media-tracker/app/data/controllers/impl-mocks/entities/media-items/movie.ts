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
			mediaType: 'MOVIE',
			status: 'NEW',
			name: 'My First Movie',
			importance: 'VERY_IMPORTANT',
			durationMinutes: 123,
			directors: [ 'Some One' ],
			genres: [ 'Genre 1', 'Genre 2' ],
			releaseDate: new Date('2010-01-01'),
			group: {
				orderInGroup: 3,
				groupData: {
					id: '1',
					name: 'My Group'
				}
			}
		}, {
			id: '2',
			mediaType: 'MOVIE',
			status: 'ACTIVE',
			name: 'My Second Movie',
			importance: 'UNIMPORTANT',
			durationMinutes: 89,
			ownPlatform: {
				id: '1',
				name: 'Netflix',
				color: 'red'
			},
			active: true
		}, {
			id: '3',
			mediaType: 'MOVIE',
			status: 'UPCOMING',
			name: 'My Third Movie',
			importance: 'IMPORTANT',
			releaseDate: new Date('2050-01-01')
		}, {
			id: '4',
			mediaType: 'MOVIE',
			status: 'COMPLETE',
			name: 'My Fourth Movie',
			importance: 'FAIRLY_IMPORTANT',
			completedAt: [ new Date('2000-01-01'), new Date('2010-01-01') ],
			ownPlatform: {
				id: '2',
				name: 'Hulu',
				color: 'green'
			}
		}, {
			id: '5',
			mediaType: 'MOVIE',
			status: 'REDO',
			name: 'My Fifth Movie',
			importance: 'FAIRLY_IMPORTANT',
			completedAt: [ new Date('2010-01-01') ],
			markedAsRedo: true
		}, {
			id: '6',
			mediaType: 'MOVIE',
			status: 'NEW',
			name: 'My Sixth Movie With a Very Very Very Very Very Very Very Very Very Very Very Very Long Title',
			importance: 'FAIRLY_IMPORTANT',
			genres: [ 'Genre', 'Genre', 'Genre', 'Genre', 'Genre', 'Genre', 'Genre', 'Genre', 'Genre', 'Genre', 'Genre' ],
			directors: [ 'Some One', 'Some One', 'Some One', 'Some One', 'Some One', 'Some One', 'Some One', 'Some One', 'Some One' ]
		}]
	};

	/**
	 * @override
	 */
	protected mockSort(mediaItems: MovieInternal[], sortBy: MovieSortByInternal): MovieInternal[] {
		
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
 * Mocked implementation of the MovieCatalogController that contains an in-memory list of movies
 * @see MovieCatalogController
 */
export class MovieMockedCatalogController extends MediaItemMockedCatalogController<SearchMovieCatalogResultInternal, CatalogMovieInternal> implements MovieCatalogController {

}
