import { MediaTypeInternal } from 'app/data/models/internal/category';
import { AppError } from 'app/data/models/internal/error';
import { MediaFactory } from 'app/factories/abstract-factory';
import { ImageRequireSource } from 'react-native';

/**
 * Factory for a media type icon
 */
export const mediaIconFactory = new class MediaIconFactory extends MediaFactory<ImageRequireSource> {

	/**
	 * @override
	 */
	protected getInternal(mediaType: MediaTypeInternal): ImageRequireSource {

		switch(mediaType) {

			case 'BOOK': {
				return require('app/resources/images/ic_book.png');
			}
			
			case 'MOVIE': {
				return require('app/resources/images/ic_movie.png');
			}
			
			case 'TV_SHOW': {
				return require('app/resources/images/ic_tvshow.png');
			}
			
			case 'VIDEOGAME': {
				return require('app/resources/images/ic_videogame.png');
			}
			
			default: {
				throw AppError.GENERIC.withDetails(`Category icon not mapped for media type ${mediaType}`);
			}
		}
	}
}();
