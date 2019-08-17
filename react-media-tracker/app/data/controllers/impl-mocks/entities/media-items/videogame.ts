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
			status: 'NEW',
			name: 'My First Videogame',
			importance: 'VERY_IMPORTANT'
		}, {
			id: '2',
			mediaType: 'VIDEOGAME',
			status: 'NEW',
			name: 'My Second Videogame',
			importance: 'UNIMPORTANT',
			averageLengthHours: 20
		}, {
			id: '3',
			mediaType: 'VIDEOGAME',
			status: 'ACTIVE',
			name: 'My Third Videogame',
			importance: 'IMPORTANT',
			active: true
		}, {
			id: '4',
			mediaType: 'VIDEOGAME',
			status: 'NEW',
			name: 'My Fourth Videogame',
			importance: 'FAIRLY_IMPORTANT'
		}]
	};
}

/**
 * Mocked implementation of the VideogameCatalogController that contains an in-memory list of videogames
 * @see VideogameCatalogController
 */
export class VideogameMockedCatalogController extends MediaItemMockedCatalogController<SearchVideogameCatalogResultInternal, CatalogVideogameInternal> implements VideogameCatalogController {

}
