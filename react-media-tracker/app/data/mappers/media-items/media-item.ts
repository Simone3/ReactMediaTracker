import { ModelMapper } from 'app/data/mappers/common';
import { groupMapper } from 'app/data/mappers/group';
import { ownPlatformMapper } from 'app/data/mappers/own-platform';
import { MediaItem, MediaItemFilter, MediaItemSortBy, MediaItemSortField } from 'app/data/models/api/media-items/media-item';
import { MediaItemFilterInternal, MediaItemInternal, MediaItemSortByInternal, MediaItemSortFieldInternal } from 'app/data/models/internal/entities/media-items/media-item';
import { AppError } from 'app/data/models/internal/error';

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
			importance: source.importance,
			genres: source.genres,
			description: source.description,
			userComment: source.userComment,
			completedAt: source.completedAt,
			releaseDate: source.releaseDate,
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
			name: source.name,
			importance: source.importance,
			genres: source.genres,
			description: source.description,
			userComment: source.userComment,
			completedAt: source.completedAt,
			releaseDate: source.releaseDate,
			active: source.active,
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
			importance: source.importance,
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
			importance: source.importance,
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
