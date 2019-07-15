import { OwnPlatformInternal } from 'app/models/internal/entities//own-platform';
import { GroupInternal } from 'app/models/internal/entities/group';

/**
 * Common core data for media items, internal type just for display purposes
 */
type CoreMediaItemDataInternal = {

	name: string;
	genres?: string[];
	description?: string;
	releaseDate?: string;
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
 * A generic media item, internal type just for display purposes
 */
export type MediaItemInternal = CoreMediaItemDataInternal & {

	importance: number;
	group?: MediaItemGroupInternal;
	ownPlatform?: OwnPlatformInternal;
	userComment?: string;
	completedAt?: string[];
	active?: boolean;
	catalogId?: string;
}
/**
 * A filter for generic media items, internal type just for display purposes
 */
export type MediaItemFilterInternal = {

	importance?: number;
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