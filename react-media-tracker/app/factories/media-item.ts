import { MediaItemController } from 'app/data/controllers/core/entities/media-items/media-item';
import { movieController } from 'app/data/controllers/core/entities/media-items/movie';
import { CategoryInternal } from 'app/data/models/internal/category';
import { AppError } from 'app/data/models/internal/error';
import { MediaItemFilterInternal, MediaItemInternal, MediaItemSortByInternal } from 'app/data/models/internal/media-items/media-item';
import { MovieFilterInternal, MovieSortByInternal } from 'app/data/models/internal/media-items/movie';

/**
 * A factory for media items
 */
class MediaItemFactory {

	/**
	 * Factory for the media items controller based on a category
	 * @param category the category
	 * @returns the linked controller
	 */
	public getMediaItemsController(category: CategoryInternal): MediaItemController<MediaItemInternal, MediaItemSortByInternal, MediaItemFilterInternal> {

		switch(category.mediaType) {

			case 'MOVIE': {
				return movieController;
			}

			default: {
				throw AppError.GENERIC.withDetails(`Media type ${category.mediaType} not recognized in media items controller factory`);
			}
		}
	}

	/**
	 * Factory for the default media items filter based on a category
	 * @param category the category
	 * @returns the default filter
	 */
	public getDefaultMediaItemFilter(category: CategoryInternal): MediaItemFilterInternal {

		switch(category.mediaType) {

			case 'MOVIE': {
				const filter: MovieFilterInternal = {};
				return filter;
			}

			default: {
				throw AppError.GENERIC.withDetails(`Media type ${category.mediaType} not recognized in media items filter factory`);
			}
		}
	}

	/**
	 * Factory for the default media items sort based on a category
	 * @param category the category
	 * @returns the default sort
	 */
	public getDefaultMediaItemSortBy(category: CategoryInternal): MediaItemSortByInternal {

		switch(category.mediaType) {

			case 'MOVIE': {
				const sortBy: MovieSortByInternal = {
					field: 'NAME',
					ascending: true
				};
				return sortBy;
			}

			default: {
				throw AppError.GENERIC.withDetails(`Media type ${category.mediaType} not recognized in media items sort factory`);
			}
		}
	}
}

/**
 * Singleton instance of the media items factory
 */
export const mediaItemFactory = new MediaItemFactory();
