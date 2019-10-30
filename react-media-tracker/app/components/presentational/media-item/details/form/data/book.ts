import { BookInternal } from 'app/data/models/internal/media-items/book';
import { array, number, object, ObjectSchema, ObjectSchemaDefinition, string } from 'yup';
import { mediaItemFormValidationShape } from './media-item';

/**
 * The book form validation schema shape
 */
const bookFormValidationShape: ObjectSchemaDefinition<BookInternal> = {
	...mediaItemFormValidationShape,
	authors: array().of(string()),
	pagesNumber: number()
};

/**
 * The book form validation schema
 */
export const bookFormValidationSchema: ObjectSchema<BookInternal> = object().shape(bookFormValidationShape);
