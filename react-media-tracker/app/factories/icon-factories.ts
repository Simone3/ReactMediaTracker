import { ColoredImageDescriptor } from 'app/components/presentational/generic/colored-image';
import { config } from 'app/config/config';
import { MediaTypeInternal } from 'app/data/models/internal/category';
import { AppError } from 'app/data/models/internal/error';
import { MediaItemImportanceInternal, MediaItemStatusInternal } from 'app/data/models/internal/media-items/media-item';
import { MediaFactory } from 'app/factories/abstract-factories';
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
				return require('app/resources/images/ic_media_book.png');
			}
			
			case 'MOVIE': {
				return require('app/resources/images/ic_media_movie.png');
			}
			
			case 'TV_SHOW': {
				return require('app/resources/images/ic_media_tvshow.png');
			}
			
			case 'VIDEOGAME': {
				return require('app/resources/images/ic_media_videogame.png');
			}
			
			default: {
				throw AppError.GENERIC.withDetails(`Category icon not mapped for media type ${mediaType}`);
			}
		}
	}
}();

/**
 * Factory for the media item importance icon
 */
export const mediaItemImportanceIconFactory = new class MediaItemImportanceIconFactory {

	/**
	 * Gets the value based on the given importance level
	 * @param importance the importance level
	 * @returns the linked value
	 */
	public get(importance: MediaItemImportanceInternal): ColoredImageDescriptor {

		switch(importance) {

			case 'VERY_IMPORTANT':
				return {
					source: require('app/resources/images/ic_importance_1.png'),
					tintColor: 'black'
				};
			
			case 'IMPORTANT':
				return {
					source: require('app/resources/images/ic_importance_2.png'),
					tintColor: 'black'
				};

			case 'FAIRLY_IMPORTANT':
				return {
					source: require('app/resources/images/ic_importance_3.png'),
					tintColor: 'black'
				};

			case 'UNIMPORTANT':
				return {
					source: require('app/resources/images/ic_importance_4.png'),
					tintColor: 'black'
				};
				
			default:
				throw AppError.GENERIC.withDetails(`Importance level ${importance} not mapped for icon`);
		}
	}
}();

/**
 * Factory for the media item status icon
 */
export const mediaItemStatusIconFactory = new class MediaItemStatusIconFactory {

	/**
	 * Gets the value based on the given "status"
	 * @param status the media item "status"
	 * @param mediaType the media item type
	 * @returns the linked value
	 */
	public get(status: MediaItemStatusInternal, mediaType: MediaTypeInternal): ColoredImageDescriptor {

		switch(status) {

			case 'ACTIVE':

				switch(mediaType) {
					
					case 'BOOK':
						return {
							source: require('app/resources/images/ic_status_reading.png'),
							tintColor: config.ui.colors.green
						};
		
					case 'MOVIE':
					case 'TV_SHOW':
						return {
							source: require('app/resources/images/ic_status_watching.png'),
							tintColor: config.ui.colors.green
						};
		
					case 'VIDEOGAME':
						return {
							source: require('app/resources/images/ic_status_playing.png'),
							tintColor: config.ui.colors.green
						};
		
					default: {
						throw AppError.GENERIC.withDetails(`Media type ${mediaType} not recognized in media item status icon factory`);
					}
				}

			case 'UPCOMING':
			
				return {
					source: require('app/resources/images/ic_status_upcoming.png'),
					tintColor: config.ui.colors.orange
				};
			
			case 'REDO':

				return {
					source: require('app/resources/images/ic_status_redoing.png'),
					tintColor: config.ui.colors.cyan
				};
			
			case 'COMPLETE':

				return {
					source: require('app/resources/images/ic_status_complete.png'),
					tintColor: config.ui.colors.purple
				};

			case 'NEW':

				return {
					source: require('app/resources/images/ic_status_new.png'),
					tintColor: 'black'
				};
			
			default:
				
				throw AppError.GENERIC.withDetails(`Status ${status} not recognized in media item status icon factory`);
		}
	}
}();
