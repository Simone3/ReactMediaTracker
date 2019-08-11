import { bookController } from 'app/data/controllers/core/entities/media-items/book';
import { MediaItemController } from 'app/data/controllers/core/entities/media-items/media-item';
import { movieController } from 'app/data/controllers/core/entities/media-items/movie';
import { tvShowController } from 'app/data/controllers/core/entities/media-items/tv-show';
import { videogameController } from 'app/data/controllers/core/entities/media-items/videogame';
import { MediaTypeInternal } from 'app/data/models/internal/category';
import { AppError } from 'app/data/models/internal/error';
import { MediaItemFilterInternal, MediaItemInternal, MediaItemSortByInternal } from 'app/data/models/internal/media-items/media-item';
import { MediaFactory } from 'app/factories/abstract-factory';

/**
 * Factory for the media item controller
 */
export const mediaItemControllerFactory = new class MediaIconFactory extends MediaFactory<MediaItemController<MediaItemInternal, MediaItemSortByInternal, MediaItemFilterInternal>> {

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
 * Factory for the media items lang prefix
 */
export const mediaItemLangPrefixFactory = new class MediaIconFactory extends MediaFactory<string> {

	/**
	 * @override
	 */
	protected getInternal(mediaType: MediaTypeInternal): string {

		switch(mediaType) {

			case 'BOOK': {
				return 'book';
			}

			case 'MOVIE': {
				return 'movie';
			}

			case 'TV_SHOW': {
				return 'tvShow';
			}

			case 'VIDEOGAME': {
				return 'videogame';
			}

			default: {
				throw AppError.GENERIC.withDetails(`Media type ${mediaType} not recognized in media items lang prefix factory`);
			}
		}
	}
}();
