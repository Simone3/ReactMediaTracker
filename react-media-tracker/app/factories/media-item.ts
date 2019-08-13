import { ColoredImageDescriptor } from 'app/components/presentational/generic/colored-image';
import { config } from 'app/config/config-sample';
import { bookController, bookDefinitionsController } from 'app/data/controllers/core/entities/media-items/book';
import { MediaItemController, MediaItemDefinitionsController } from 'app/data/controllers/core/entities/media-items/media-item';
import { movieController, movieDefinitionsController } from 'app/data/controllers/core/entities/media-items/movie';
import { tvShowController, tvShowDefinitionsController } from 'app/data/controllers/core/entities/media-items/tv-show';
import { videogameController, videogameDefinitionsController } from 'app/data/controllers/core/entities/media-items/videogame';
import { MediaTypeInternal } from 'app/data/models/internal/category';
import { AppError } from 'app/data/models/internal/error';
import { MediaItemFilterInternal, MediaItemImportanceInternal, MediaItemInternal, MediaItemSortByInternal } from 'app/data/models/internal/media-items/media-item';
import { MediaFactory } from 'app/factories/abstract-factory';

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
					tintColor: config.ui.colors.blue
				};
			
			case 'IMPORTANT':
				return {
					source: require('app/resources/images/ic_importance_2.png'),
					tintColor: config.ui.colors.green
				};

			case 'FAIRLY_IMPORTANT':
				return {
					source: require('app/resources/images/ic_importance_3.png'),
					tintColor: config.ui.colors.orange
				};

			case 'UNIMPORTANT':
				return {
					source: require('app/resources/images/ic_importance_4.png'),
					tintColor: config.ui.colors.red
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
	 * Gets the value based on the given media item
	 * @param mediaItem the media item
	 * @returns the linked value
	 */
	public get(mediaItem: MediaItemInternal): ColoredImageDescriptor {

		if(mediaItem.active) {

			// Items marked as currenctly active (e.g. currently reading)
			switch(mediaItem.mediaType) {
				
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
					throw AppError.GENERIC.withDetails(`Media type ${mediaItem.mediaType} not recognized in media item status icon factory`);
				}
			}
		}
		else if(mediaItem.releaseDate && mediaItem.releaseDate > new Date()) {
		
			// Items with a future release date
			return {
				source: require('app/resources/images/ic_status_upcoming.png'),
				tintColor: config.ui.colors.orange
			};
		}
		else if(mediaItem.completedAt && mediaItem.completedAt.length > 0) {

			if(mediaItem.markedAsRedo) {

				// Items that have been completed but have been marked for redo (e.g. rewatch)
				return {
					source: require('app/resources/images/ic_status_redoing.png'),
					tintColor: config.ui.colors.cyan
				};
			}
			else {

				// Items that have been completed
				return {
					source: require('app/resources/images/ic_status_complete.png'),
					tintColor: config.ui.colors.purple
				};
			}
		}
		else {

			// All other items
			return {
				source: require('app/resources/images/ic_status_new.png'),
				tintColor: 'black'
			};
		}
	}
}();

