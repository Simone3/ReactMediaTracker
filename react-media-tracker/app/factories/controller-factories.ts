import { bookController, bookDefinitionsController } from 'app/data/controllers/core/entities/media-items/book';
import { MediaItemController, MediaItemDefinitionsController } from 'app/data/controllers/core/entities/media-items/media-item';
import { movieController, movieDefinitionsController } from 'app/data/controllers/core/entities/media-items/movie';
import { tvShowController, tvShowDefinitionsController } from 'app/data/controllers/core/entities/media-items/tv-show';
import { videogameController, videogameDefinitionsController } from 'app/data/controllers/core/entities/media-items/videogame';
import { MediaTypeInternal } from 'app/data/models/internal/category';
import { AppError } from 'app/data/models/internal/error';
import { MediaItemFilterInternal, MediaItemInternal, MediaItemSortByInternal } from 'app/data/models/internal/media-items/media-item';
import { MediaFactory } from 'app/factories/abstract-factories';

/**
 * Factory for the media item controller
 */
export const mediaItemControllerFactory = new class MediaItemControllerFactory extends MediaFactory<MediaItemController<MediaItemInternal, MediaItemSortByInternal, MediaItemFilterInternal>> {

	/**
	 * @override
	 */
	protected getInternal(mediaType: MediaTypeInternal): MediaItemController<MediaItemInternal, MediaItemSortByInternal, MediaItemFilterInternal> {

		switch(mediaType) {

			case 'BOOK': {
				return bookController;
			}

			case 'MOVIE': {
				return movieController;
			}

			case 'TV_SHOW': {
				return tvShowController;
			}

			case 'VIDEOGAME': {
				return videogameController;
			}

			default: {
				throw AppError.GENERIC.withDetails(`Media type ${mediaType} not recognized in media items controller factory`);
			}
		}
	}
}();

/**
 * Factory for the media item definitions controller
 */
export const mediaItemDefinitionsControllerFactory = new class MediaItemDefinitionsControllerFactory extends MediaFactory<MediaItemDefinitionsController<MediaItemInternal, MediaItemSortByInternal, MediaItemFilterInternal>> {

	/**
	 * @override
	 */
	protected getInternal(mediaType: MediaTypeInternal): MediaItemDefinitionsController<MediaItemInternal, MediaItemSortByInternal, MediaItemFilterInternal> {

		switch(mediaType) {

			case 'BOOK': {
				return bookDefinitionsController;
			}

			case 'MOVIE': {
				return movieDefinitionsController;
			}

			case 'TV_SHOW': {
				return tvShowDefinitionsController;
			}

			case 'VIDEOGAME': {
				return videogameDefinitionsController;
			}

			default: {
				throw AppError.GENERIC.withDetails(`Media type ${mediaType} not recognized in media items definitions controller factory`);
			}
		}
	}
}();
