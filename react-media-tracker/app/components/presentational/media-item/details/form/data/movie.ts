import { MovieInternal } from 'app/data/models/internal/media-items/movie';
import { array, number, object, ObjectSchema, ObjectSchemaDefinition, string } from 'yup';
import { mediaItemFormValidationShape } from './media-item';

/**
 * The movie form validation schema shape
 */
const movieFormValidationShape: ObjectSchemaDefinition<MovieInternal> = {
	...mediaItemFormValidationShape,
	directors: array().of(string()),
	durationMinutes: number()
};

/**
 * The movie form validation schema
 */
export const movieFormValidationSchema: ObjectSchema<MovieInternal> = object().shape(movieFormValidationShape);
