import { CategoryInternal, MEDIA_TYPES_INTERNAL } from 'app/data/models/internal/category';
import { object, ObjectSchema, string, StringSchema } from 'yup';

/**
 * The category form validation schema
 */
export const categoryFormValidationSchema: ObjectSchema<CategoryInternal> = object().required().shape({
	id: string() as StringSchema<string>,
	name: string().required(),
	mediaType: string().oneOf(MEDIA_TYPES_INTERNAL).required(),
	color: string().required()
});
