import { BookInternal } from 'app/data/models/internal/media-items/book';
import { array, number, object, SchemaOf, string } from 'yup';
import { mediaItemFormValidationShape } from './media-item';

/**
 * The book form validation schema shape
 */
const bookFormValidationShape = {
	...mediaItemFormValidationShape,
	authors: array().of(string().required()).optional(),
	pagesNumber: number()
};

/**
 * The book form validation schema
 */
export const bookFormValidationSchema: SchemaOf<BookInternal> = object().required().shape(bookFormValidationShape);
