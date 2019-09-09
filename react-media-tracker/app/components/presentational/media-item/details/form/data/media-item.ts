import { MediaTypeInternal, MEDIA_TYPES_INTERNAL } from 'app/data/models/internal/category';
import { MediaItemImportanceInternal, MediaItemInternal, MediaItemStatusInternal, MEDIA_ITEM_IMPORTANCE_INTERNAL_VALUES, MEDIA_ITEM_STATUS_INTERNAL_VALUES } from 'app/data/models/internal/media-items/media-item';
import { array, boolean, date, number, object, ObjectSchemaDefinition, string, StringSchema } from 'yup';

/**
 * The generic media item form validation schema shape
 */
export const mediaItemFormValidationShape: ObjectSchemaDefinition<MediaItemInternal> = {
	id: string(),
	name: string().required(),
	genres: array().of(string()),
	description: string(),
	releaseDate: date(),
	imageUrl: string(),
	mediaType: string().oneOf(MEDIA_TYPES_INTERNAL).required() as StringSchema<MediaTypeInternal>,
	status: string().oneOf(MEDIA_ITEM_STATUS_INTERNAL_VALUES).required() as StringSchema<MediaItemStatusInternal>,
	importance: string().oneOf(MEDIA_ITEM_IMPORTANCE_INTERNAL_VALUES).required() as StringSchema<MediaItemImportanceInternal>,
	group: object({
		groupData: object({
			id: string(),
			name: string()
		}),
		orderInGroup: number()
	}),
	ownPlatform: object({
		id: string(),
		name: string(),
		color: string()
	}),
	userComment: string(),
	completedAt: array().of(date()),
	active: boolean(),
	markedAsRedo: boolean(),
	catalogId: string()
};
