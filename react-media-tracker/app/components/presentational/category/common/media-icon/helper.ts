import { CategoryInternal, MediaTypeInternal } from 'app/data/models/internal/category';
import { AppError } from 'app/data/models/internal/error';
import { ImageRequireSource } from 'react-native';

/**
 * Simple helper to build the correct icon based on a media type
 */
export class MediaIconBuilder {

	/**
	 * Gets the correct media icon based on its media type
	 * @param category the category
	 * @returns the image
	 */
	public static getMediaIconFromCategory(category: CategoryInternal): ImageRequireSource {

		return this.getMediaIconFromType(category.mediaType);
	}

	/**
	 * Gets the correct media icon based on the given media type
	 * @param mediaType the media type
	 * @returns the image
	 */
	public static getMediaIconFromType(mediaType: MediaTypeInternal): ImageRequireSource {

		switch(mediaType) {

			case 'BOOK':
				return require('app/resources/images/ic_book.png');

			case 'MOVIE':
				return require('app/resources/images/ic_movie.png');

			case 'TV_SHOW':
				return require('app/resources/images/ic_tvshow.png');

			case 'VIDEOGAME':
				return require('app/resources/images/ic_videogame.png');

			default:
				throw AppError.GENERIC.withDetails(`Category icon not mapped for media type ${mediaType}`);
		}
	}
}
