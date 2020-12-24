import { MEDIA_TYPES_INTERNAL } from 'app/data/models/internal/category';
import { GroupInternal } from 'app/data/models/internal/group';
import { MediaItemInternal, MEDIA_ITEM_IMPORTANCE_INTERNAL_VALUES, MEDIA_ITEM_STATUS_INTERNAL_VALUES } from 'app/data/models/internal/media-items/media-item';
import { OwnPlatformInternal, OWN_PLATFORM_ICON_INTERNAL_VALUES } from 'app/data/models/internal/own-platform';
import { array, boolean, date, number, NumberSchema, object, ObjectSchema, ObjectSchemaDefinition, string, StringSchema } from 'yup';

/**
 * The generic media item form validation schema shape
 */
export const mediaItemFormValidationShape: ObjectSchemaDefinition<MediaItemInternal> = {
	id: string() as StringSchema<string>,
	name: string().required(),
	genres: array().of(string().required()),
	description: string(),
	releaseDate: date(),
	imageUrl: string(),
	mediaType: string().oneOf(MEDIA_TYPES_INTERNAL).required(),
	status: string().oneOf(MEDIA_ITEM_STATUS_INTERNAL_VALUES).required(),
	importance: string().oneOf(MEDIA_ITEM_IMPORTANCE_INTERNAL_VALUES).required(),
	group: object({
		id: string(),
		name: string()
	}) as ObjectSchema<GroupInternal>,
	orderInGroup: number().when('group', (value: GroupInternal | undefined, schema: NumberSchema<number>) => {
		
		return value && value.id ? schema.required() : schema;
	}),
	ownPlatform: object({
		id: string(),
		name: string(),
		color: string(),
		icon: string().oneOf(OWN_PLATFORM_ICON_INTERNAL_VALUES)
	}) as ObjectSchema<OwnPlatformInternal>,
	userComment: string(),
	completedOn: array().of(date().required()),
	active: boolean(),
	markedAsRedo: boolean(),
	catalogId: string()
};
