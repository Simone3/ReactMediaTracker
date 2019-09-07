import { ColoredImageDescriptor } from 'app/components/presentational/generic/colored-image';
import { config } from 'app/config/config';
import { MediaTypeInternal } from 'app/data/models/internal/category';
import { AppError } from 'app/data/models/internal/error';
import { MediaItemImportanceInternal, MediaItemStatusInternal } from 'app/data/models/internal/media-items/media-item';
import { ImageRequireSource } from 'react-native';

/**
 * Centralized component to get images
 */
class ImagesHelper {

	/**
	 * Image getter
	 * @param mediaType a media type
	 * @returns the media type icon
	 */
	public mediaType(mediaType: MediaTypeInternal): ImageRequireSource {

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
				throw AppError.GENERIC.withDetails(`Media icon not mapped for media type ${mediaType}`);
			}
		}
	}

	/**
	 * Image getter
	 * @param importance the importance level
	 * @returns the media item importance icon
	 */
	public mediaItemImportance(importance: MediaItemImportanceInternal): ColoredImageDescriptor {

		switch(importance) {

			case 'VERY_IMPORTANT':
				return {
					source: require('app/resources/images/ic_importance_1.png'),
					tintColor: config.ui.colors.colorDefaultIcon
				};
			
			case 'IMPORTANT':
				return {
					source: require('app/resources/images/ic_importance_2.png'),
					tintColor: config.ui.colors.colorDefaultIcon
				};

			case 'FAIRLY_IMPORTANT':
				return {
					source: require('app/resources/images/ic_importance_3.png'),
					tintColor: config.ui.colors.colorDefaultIcon
				};

			case 'UNIMPORTANT':
				return {
					source: require('app/resources/images/ic_importance_4.png'),
					tintColor: config.ui.colors.colorDefaultIcon
				};
				
			default:
				throw AppError.GENERIC.withDetails(`Importance level ${importance} not mapped for icon`);
		}
	}

	/**
	 * Image getter
	 * @param status the media item "status"
	 * @param mediaType the media item type
	 * @returns the media item status icon
	 */
	public mediaItemStatus(status: MediaItemStatusInternal, mediaType: MediaTypeInternal): ColoredImageDescriptor {

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
						throw AppError.GENERIC.withDetails(`Media type ${mediaType} not recognized for media item status icon`);
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
					tintColor: config.ui.colors.colorDefaultIcon
				};
			
			default:
				
				throw AppError.GENERIC.withDetails(`Status ${status} not recognized for media item status icon`);
		}
	}

	/**
	 * Image getter
	 * @returns a generic "null" image icon
	 */
	public none(): ImageRequireSource {
		
		return require('app/resources/images/ic_none.png');
	}

	/**
	 * Image getter
	 * @returns the save icon
	 */
	public saveButton(): ImageRequireSource {
		
		return require('app/resources/images/ic_action_save.png');
	}

	/**
	 * Image getter
	 * @returns the delete icon
	 */
	public deleteButton(): ImageRequireSource {
		
		return require('app/resources/images/ic_action_delete.png');
	}

	/**
	 * Image getter
	 * @returns the edit icon
	 */
	public editButton(): ImageRequireSource {
		
		return require('app/resources/images/ic_action_edit.png');
	}

	/**
	 * Image getter
	 * @returns the clear icon
	 */
	public clearButton(): ImageRequireSource {
		
		return require('app/resources/images/ic_action_clear.png');
	}

	/**
	 * Image getter
	 * @returns the search icon
	 */
	public searchButton(): ImageRequireSource {
		
		return require('app/resources/images/ic_action_search.png');
	}

	/**
	 * Image getter
	 * @returns the filter icon
	 */
	public filterButton(): ImageRequireSource {
		
		return require('app/resources/images/ic_action_filter.png');
	}

	/**
	 * Image getter
	 * @returns name input field icon
	 */
	public nameField(): ImageRequireSource {
		
		return require('app/resources/images/ic_input_name.png');
	}

	/**
	 * Image getter
	 * @returns color input field icon
	 */
	public colorField(): ImageRequireSource {
		
		return require('app/resources/images/ic_input_color.png');
	}

	/**
	 * Image getter
	 * @returns status input field icon
	 */
	public statusField(): ImageRequireSource {
		
		return require('app/resources/images/ic_input_status.png');
	}

	/**
	 * Image getter
	 * @returns group input field icon
	 */
	public groupField(): ImageRequireSource {
		
		return require('app/resources/images/ic_input_group.png');
	}

	/**
	 * Image getter
	 * @returns own platform input field icon
	 */
	public ownPlatformField(): ImageRequireSource {
		
		return require('app/resources/images/ic_input_own_platform.png');
	}

	/**
	 * Image getter
	 * @returns sort by input field icon
	 */
	public sortField(): ImageRequireSource {
		
		return require('app/resources/images/ic_input_sort.png');
	}
}

/**
 * Centralized component to get images
 */
export const images = new ImagesHelper();
