import { CategoryInternal, MediaTypeInternal, MEDIA_TYPES_INTERNAL } from 'app/data/models/internal/category';
import { mixed, object, SchemaOf, string, StringSchema } from 'yup';

/**
 * The category form validation schema
 */
export const categoryFormValidationSchema: SchemaOf<CategoryInternal> = object().required().shape({
	id: string() as StringSchema<string>,
	name: string().required(),
	mediaType: mixed<MediaTypeInternal>().oneOf(MEDIA_TYPES_INTERNAL).required(),
	color: string().required()
});
