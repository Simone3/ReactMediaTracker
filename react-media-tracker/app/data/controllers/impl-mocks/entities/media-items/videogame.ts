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
			mediaType: 'VIDEOGAME',
			name: 'My First Videogame',
			importance: 'VERY_IMPORTANT'
		}, {
			id: '2',
			mediaType: 'VIDEOGAME',
			name: 'My Second Videogame',
			importance: 'UNIMPORTANT',
			averageLengthHours: 20
		}, {
			id: '3',
			mediaType: 'VIDEOGAME',
			name: 'My Third Videogame',
			importance: 'IMPORTANT',
			active: true
		}, {
			id: '4',
			mediaType: 'VIDEOGAME',
			name: 'My Fourth Videogame',
			importance: 'FAIRLY_IMPORTANT'
		}]
	};

	/**
	 * @override
	 */
	protected mockSort(mediaItems: VideogameInternal[], sortBy: VideogameSortByInternal): VideogameInternal[] {
		
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
 * Mocked implementation of the VideogameCatalogController that contains an in-memory list of videogames
 * @see VideogameCatalogController
 */
export class VideogameMockedCatalogController extends MediaItemMockedCatalogController<SearchVideogameCatalogResultInternal, CatalogVideogameInternal> implements VideogameCatalogController {

}
