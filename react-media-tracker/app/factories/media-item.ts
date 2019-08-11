import { bookController } from 'app/data/controllers/core/entities/media-items/book';
import { MediaItemController } from 'app/data/controllers/core/entities/media-items/media-item';
import { movieController } from 'app/data/controllers/core/entities/media-items/movie';
import { tvShowController } from 'app/data/controllers/core/entities/media-items/tv-show';
import { videogameController } from 'app/data/controllers/core/entities/media-items/videogame';
import { MediaTypeInternal } from 'app/data/models/internal/category';
import { AppError } from 'app/data/models/internal/error';
import { BookFilterInternal, BookSortByInternal } from 'app/data/models/internal/media-items/book';
import { MediaItemFilterInternal, MediaItemInternal, MediaItemSortByInternal } from 'app/data/models/internal/media-items/media-item';
import { MovieFilterInternal, MovieSortByInternal } from 'app/data/models/internal/media-items/movie';
import { TvShowFilterInternal, TvShowSortByInternal } from 'app/data/models/internal/media-items/tv-show';
import { VideogameFilterInternal, VideogameSortByInternal } from 'app/data/models/internal/media-items/videogame';
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
 * Factory for the default media items filter
 */
export const mediaItemFilterFactory = new class MediaIconFactory extends MediaFactory<MediaItemFilterInternal> {

	/**
	 * @override
	 */
	protected getInternal(mediaType: MediaTypeInternal): MediaItemFilterInternal {

		switch(mediaType) {

			case 'BOOK': {
				const filter: BookFilterInternal = {};
				return filter;
			}

			case 'MOVIE': {
				const filter: MovieFilterInternal = {};
				return filter;
			}

			case 'TV_SHOW': {
				const filter: TvShowFilterInternal = {};
				return filter;
			}

			case 'VIDEOGAME': {
				const filter: VideogameFilterInternal = {};
				return filter;
			}

			default: {
				throw AppError.GENERIC.withDetails(`Media type ${mediaType} not recognized in media items filter factory`);
			}
		}
	}
}();

/**
 * Factory for the default media items sort by
 */
export const mediaItemSortByFactory = new class MediaIconFactory extends MediaFactory<MediaItemSortByInternal> {

	/**
	 * @override
	 */
	protected getInternal(mediaType: MediaTypeInternal): MediaItemSortByInternal {

		switch(mediaType) {

			case 'BOOK': {
				const sortBy: BookSortByInternal = {
					field: 'NAME',
					ascending: true
				};
				return sortBy;
			}

			case 'MOVIE': {
				const sortBy: MovieSortByInternal = {
					field: 'NAME',
					ascending: true
				};
				return sortBy;
			}

			case 'TV_SHOW': {
				const sortBy: TvShowSortByInternal = {
					field: 'NAME',
					ascending: true
				};
				return sortBy;
			}

			case 'VIDEOGAME': {
				const sortBy: VideogameSortByInternal = {
					field: 'NAME',
					ascending: true
				};
				return sortBy;
			}

			default: {
				throw AppError.GENERIC.withDetails(`Media type ${mediaType} not recognized in media items sort factory`);
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
