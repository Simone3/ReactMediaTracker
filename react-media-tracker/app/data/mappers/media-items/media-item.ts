import { ModelMapper } from 'app/data/mappers/common';
import { groupMapper } from 'app/data/mappers/group';
import { ownPlatformMapper } from 'app/data/mappers/own-platform';
import { CatalogMediaItem, MediaItem, MediaItemFilter, MediaItemSortBy, MediaItemSortField, SearchMediaItemCatalogResult } from 'app/data/models/api/media-items/media-item';
import { AppError } from 'app/data/models/internal/error';
import { CatalogMediaItemInternal, MediaItemFilterInternal, MediaItemImportanceInternal, MediaItemInternal, MediaItemSortByInternal, MediaItemSortFieldInternal, MediaItemStatusInternal, SearchMediaItemCatalogResultInternal } from 'app/data/models/internal/media-items/media-item';
import { dateUtils } from 'app/utilities/date-utils';

/**
 * Helper for importance mapping
 * @param internal internal value
 * @returns API value
 */
const toExternalImportance = (internal: MediaItemImportanceInternal): number => {

	switch(internal) {

		case 'VERY_IMPORTANT': return 350;
		case 'IMPORTANT': return 250;
		case 'FAIRLY_IMPORTANT': return 150;
		case 'UNIMPORTANT': return 50;
		default: throw AppError.GENERIC.withDetails(`Importance level ${internal} not mapped`);
	}
};

/**
 * Helper for importance mapping (exact match instead of numeric intervals to avoid inconsistencies with back-end filtering)
 * @param api API value
 * @returns internal value
 */
const toInternalImportance = (api: number): MediaItemImportanceInternal => {
	
	switch(api) {

		case 350: return 'VERY_IMPORTANT';
		case 250: return 'IMPORTANT';
		case 150: return 'FAIRLY_IMPORTANT';
		case 50: return 'UNIMPORTANT';
		default: throw AppError.GENERIC.withDetails(`Importance level ${api} not mapped`);
	}
};

/**
 * Abstract mapper for media items
 * @template TMediaItemInternal the class of the internal media item entity
 * @template TMediaItem the class of the API media item entity
 */
export abstract class MediaItemMapper<TMediaItemInternal extends MediaItemInternal, TMediaItem extends MediaItem> extends ModelMapper<TMediaItemInternal, TMediaItem, {}> {
	
	/**
	 * Common mapping helper for implementations
	 * @param source the mapping source
	 * @returns the mapping target
	 */
	protected commonToExternal(source: MediaItemInternal): MediaItem {
		
		const target: MediaItem = {
			name: source.name,
			importance: toExternalImportance(source.importance),
			genres: source.genres,
			description: source.description,
			userComment: source.userComment,
			completedAt: dateUtils.toStringList(source.completedAt),
			releaseDate: dateUtils.toString(source.releaseDate),
			active: source.active,
			catalogId: source.catalogId,
			imageUrl: source.imageUrl
		};

		if(source.group) {

			target.group = {
				groupId: source.group.groupData.id,
				groupData: groupMapper.toExternal(source.group.groupData),
				orderInGroup: source.group.orderInGroup
			};
		}

		if(source.ownPlatform) {

			target.ownPlatform = {
				ownPlatformId: source.ownPlatform.id,
				ownPlatformData: ownPlatformMapper.toExternal(source.ownPlatform)
			};
		}

		return target;
	}
	
	/**
	 * Common mapping helper for implementations
	 * @param source the mapping source
	 * @returns the mapping target
	 */
	protected commonToInternal(source: MediaItem): MediaItemInternal {

		const target: MediaItemInternal = {
			
			// These two will be overridden by the specific mappers. Done like this to avoid setting the fields as optional (= useless undefined checks throughout the app)
			id: '',
			mediaType: 'BOOK',
			
			name: source.name,
			status: this.buildStatusLabel(source),
			importance: toInternalImportance(source.importance),
			genres: source.genres,
			description: source.description,
			userComment: source.userComment,
			completedAt: dateUtils.toDateList(source.completedAt),
			releaseDate: dateUtils.toDate(source.releaseDate),
			active: source.active,
			markedAsRedo: source.markedAsRedo,
			catalogId: source.catalogId,
			imageUrl: source.imageUrl
		};

		if(source.group && source.group.groupData) {

			target.group = {
				groupData: groupMapper.toInternal({
					...source.group.groupData,
					uid: source.group.groupId
				}),
				orderInGroup: source.group.orderInGroup
			};
		}

		if(source.ownPlatform && source.ownPlatform.ownPlatformData) {

			target.ownPlatform = ownPlatformMapper.toInternal({
				...source.ownPlatform.ownPlatformData,
				uid: source.ownPlatform.ownPlatformId
			});
		}

		return target;
	}

	/**
	 * Helper to build the internal "status" label based on other media item data
	 * @param source the source data
	 * @returns the internal "status"
	 */
	private buildStatusLabel(source: MediaItem): MediaItemStatusInternal {
		
		if(source.active) {

			// Items marked as currently active (e.g. currently reading)
			return 'ACTIVE';
		}
		else if(source.releaseDate && new Date(source.releaseDate) > new Date()) {
		
			// Items with a future release date
			return 'UPCOMING';
		}
		else if(source.completedAt && source.completedAt.length > 0) {

			if(source.markedAsRedo) {

				// Items that have been completed but have been marked for redo (e.g. rewatch)
				return 'REDO';
			}
			else {

				// Items that have been completed
				return 'COMPLETE';
			}
		}
		else {

			// All other items
			return 'NEW';
		}
	}
}

/**
 * Abstract mapper for media item filters
 * @template TMediaItemFilterInternal the class of the internal media item entity
 * @template TMediaItemFilter the class of the API media item entity
 */
export abstract class MediaItemFilterMapper<TMediaItemFilterInternal extends MediaItemFilterInternal, TMediaItemFilter extends MediaItemFilter> extends ModelMapper<TMediaItemFilterInternal, TMediaItemFilter, never> {
	
	/**
	 * Common mapping helper for implementations
	 * @param source the mapping source
	 * @returns the mapping target
	 */
	protected commonToExternal(source: MediaItemFilterInternal): MediaItemFilter {

		return {
			importance: source.importance ? toExternalImportance(source.importance) : undefined,
			groupId: source.groupId,
			ownPlatformId: source.ownPlatformId
		};
	}
	
	/**
	 * Common mapping helper for implementations
	 * @param source the mapping source
	 * @returns the mapping target
	 */
	protected commonToInternal(source: MediaItemFilter): MediaItemFilterInternal {

		return {
			importance: source.importance ? toInternalImportance(source.importance) : undefined,
			groupId: source.groupId,
			ownPlatformId: source.ownPlatformId
		};
	}
}

/**
 * Abstract mapper for media item sort options
 * @template TMediaItemSortByInternal the class of the internal media item entity
 * @template TMediaItemSortBy the class of the API media item entity
 */
export abstract class MediaItemSortMapper<TMediaItemSortByInternal extends MediaItemSortByInternal, TMediaItemSortBy extends MediaItemSortBy> extends ModelMapper<TMediaItemSortByInternal, TMediaItemSortBy, never> {
	
	/**
	 * Common mapping helper for implementations
	 * @param source the mapping source
	 * @returns the mapping target
	 */
	protected commonToExternal(source: MediaItemSortByInternal): MediaItemSortBy {

		return {
			ascending: source.ascending
		};
	}
	
	/**
	 * Common mapping helper for implementations
	 * @param source the mapping source
	 * @returns the mapping target
	 */
	protected commonToInternal(source: MediaItemSortBy): MediaItemSortByInternal {
		
		return {
			ascending: source.ascending
		};
	}
	
	/**
	 * Common mapping helper for implementations
	 * @param source the mapping source
	 * @returns the mapping target
	 */
	protected commonToExternalField(source: MediaItemSortFieldInternal): string {

		switch(source) {

			case 'IMPORTANCE': return MediaItemSortField.IMPORTANCE;
			case 'NAME': return MediaItemSortField.NAME;
			case 'GROUP': return MediaItemSortField.GROUP;
			case 'OWN_PLATFORM': return MediaItemSortField.OWN_PLATFORM;
			default: throw AppError.GENERIC.withDetails(`Cannot map ${source}`);
		}
	}
	
	/**
	 * Common mapping helper for implementations
	 * @param source the mapping source
	 * @returns the mapping target
	 */
	protected commonToInternalField(source: MediaItemSortField): MediaItemSortFieldInternal {

		switch(source) {

			case MediaItemSortField.IMPORTANCE: return 'IMPORTANCE';
			case MediaItemSortField.NAME: return 'NAME';
			case MediaItemSortField.GROUP: return 'GROUP';
			case MediaItemSortField.OWN_PLATFORM: return 'OWN_PLATFORM';
			default: throw AppError.GENERIC.withDetails(`Cannot map ${source}`);
		}
	}
}

/**
 * Abstract mapper for media item catalog search results
 * @template TSearchMediaItemCatalogResultInternal the class of the internal media item entity
 * @template TSearchMediaItemCatalogResult the class of the API media item entity
 */
export abstract class MediaItemCatalogSearchMapper<TSearchMediaItemCatalogResultInternal extends SearchMediaItemCatalogResultInternal, TSearchMediaItemCatalogResult extends SearchMediaItemCatalogResult> extends ModelMapper<TSearchMediaItemCatalogResultInternal, TSearchMediaItemCatalogResult, never> {
	
	/**
	 * Common mapping helper for implementations
	 * @param source the mapping source
	 * @returns the mapping target
	 */
	protected commonToExternal(source: SearchMediaItemCatalogResultInternal): SearchMediaItemCatalogResult {

		return {
			catalogId: source.catalogId,
			name: source.name,
			releaseDate: dateUtils.toString(source.releaseDate)
		};
	}
	
	/**
	 * Common mapping helper for implementations
	 * @param source the mapping source
	 * @returns the mapping target
	 */
	protected commonToInternal(source: SearchMediaItemCatalogResult): SearchMediaItemCatalogResultInternal {
		
		return {
			catalogId: source.catalogId,
			name: source.name,
			releaseDate: dateUtils.toDate(source.releaseDate)
		};
	}
}

/**
 * Abstract mapper for media item catalog details
 * @template TCatalogMediaItemInternal the class of the internal media item entity
 * @template TCatalogMediaItem the class of the API media item entity
 */
export abstract class MediaItemCatalogDetailsMapper<TCatalogMediaItemInternal extends CatalogMediaItemInternal, TCatalogMediaItem extends CatalogMediaItem> extends ModelMapper<TCatalogMediaItemInternal, TCatalogMediaItem, never> {
	
	/**
	 * Common mapping helper for implementations
	 * @param source the mapping source
	 * @returns the mapping target
	 */
	protected commonToExternal(source: CatalogMediaItemInternal): CatalogMediaItem {

		return {
			name: source.name,
			genres: source.genres,
			description: source.description,
			releaseDate: dateUtils.toString(source.releaseDate),
			imageUrl: source.imageUrl
		};
	}
	
	/**
	 * Common mapping helper for implementations
	 * @param source the mapping source
	 * @returns the mapping target
	 */
	protected commonToInternal(source: CatalogMediaItem): CatalogMediaItemInternal {
		
		return {
			name: source.name,
			genres: source.genres,
			description: source.description,
			releaseDate: dateUtils.toDate(source.releaseDate),
			imageUrl: source.imageUrl
		};
	}
}

