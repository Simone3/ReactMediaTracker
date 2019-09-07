import { CategoryInternal, MediaTypeInternal, MEDIA_TYPES_INTERNAL } from 'app/data/models/internal/category';
import { object, ObjectSchema, string, StringSchema } from 'yup';

/**
 * The category form validation schema
 */
export const categoryFormValidationSchema: ObjectSchema<CategoryInternal> = object().shape({
	id: string(),
	name: string().required(),
	mediaType: string().oneOf(MEDIA_TYPES_INTERNAL).required() as StringSchema<MediaTypeInternal>,
	color: string().required()
});
