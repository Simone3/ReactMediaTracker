import { MediaTypeInternal } from 'app/data/models/internal/category';
import { GroupInternal } from 'app/data/models/internal/group';
import { OwnPlatformInternal } from 'app/data/models/internal/own-platform';

/**
 * Common core data for media items, internal type just for display purposes
 */
type CoreMediaItemDataInternal = {

	name: string;
	genres?: string[];
	description?: string;
	releaseDate?: Date;
	imageUrl?: string;
}

/**
 * Data about a media item group, internal type just for display purposes
 */
export type MediaItemGroupInternal = {

	groupData: GroupInternal;
	orderInGroup: number;
}

/**
 * The media item importance levels, internal type just for display purposes
 */
export type MediaItemImportanceInternal = 'VERY_IMPORTANT' | 'IMPORTANT' | 'FAIRLY_IMPORTANT' | 'UNIMPORTANT';

/**
 * The media type "status" (helper label based on other media item data), internal type just for display purposes
 */
export type MediaItemStatusInternal = 'ACTIVE' | 'UPCOMING' | 'REDO' | 'COMPLETE' | 'NEW';

/**
 * A generic media item, internal type just for display purposes
 */
export type MediaItemInternal = CoreMediaItemDataInternal & {

	id: string;
	mediaType: MediaTypeInternal;
	status: MediaItemStatusInternal;
	importance: MediaItemImportanceInternal;
	group?: MediaItemGroupInternal;
	ownPlatform?: OwnPlatformInternal;
	userComment?: string;
	completedAt?: Date[];
	active?: boolean;
	markedAsRedo?: boolean;
	catalogId?: string;
}
/**
 * A filter for generic media items, internal type just for display purposes
 */
export type MediaItemFilterInternal = {

	importance?: MediaItemImportanceInternal;
	groupId?: string;
	ownPlatformId?: string;
}

/**
 * Sort fields for a generic media item, internal type just for display purposes
 */
export type MediaItemSortFieldInternal = 'IMPORTANCE' | 'NAME' | 'GROUP' | 'OWN_PLATFORM';

/**
 * A sort by filter for generic media items, internal type just for display purposes
 */
export type MediaItemSortByInternal = {

	ascending: boolean;
}

/**
 * A generic catalog media item, internal type just for display purposes
 */
export type CatalogMediaItemInternal = CoreMediaItemDataInternal & {

}

/**
 * Media item catalog search result, internal type just for display purposes
 */
export type SearchMediaItemCatalogResultInternal = {

	catalogId: string;
	name: string;
	releaseDate?: Date;
}
