import { MediaTypeInternal } from 'app/data/models/internal/category';
import { AppError } from 'app/data/models/internal/error';
import { MediaFactory } from 'app/factories/abstract-factories';

/**
 * Factory for the media items lang prefix
 */
export const mediaItemLangPrefixFactory = new class MediaItemLangPrefixFactory extends MediaFactory<string> {

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
