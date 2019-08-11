import { VideogameCatalogController, VideogameController } from 'app/data/controllers/core/entities/media-items/videogame';
import { MediaItemMockedCatalogController, MediaItemMockedController } from 'app/data/controllers/impl-mocks/entities/media-items/media-item';
import { CatalogVideogameInternal, SearchVideogameCatalogResultInternal, VideogameFilterInternal, VideogameInternal, VideogameSortByInternal } from 'app/data/models/internal/media-items/videogame';

/**
 * Mocked implementation of the VideogameController that contains an in-memory list of videogames
 * @see VideogameController
 */
export class VideogameMockedController extends MediaItemMockedController<VideogameInternal, VideogameSortByInternal, VideogameFilterInternal> implements VideogameController {

	protected readonly mediaItems: {[category: string]: VideogameInternal[]} = {
		4: [{
			id: '1',
			name: 'My First Videogame',
			importance: 30
		}, {
			id: '2',
			name: 'My Second Videogame',
			importance: 10
		}, {
			id: '3',
			name: 'My Third Videogame',
			importance: 20
		}, {
			id: '4',
			name: 'My Fourth Videogame',
			importance: 10
		}]
	};

	/**
	 * @override
	 */
	protected mockSort(mediaItems: VideogameInternal[], sortBy: VideogameSortByInternal): VideogameInternal[] {
		
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
}

/**
 * Mocked implementation of the VideogameCatalogController that contains an in-memory list of videogames
 * @see VideogameCatalogController
 */
export class VideogameMockedCatalogController extends MediaItemMockedCatalogController<SearchVideogameCatalogResultInternal, CatalogVideogameInternal> implements VideogameCatalogController {

}
