import { MovieInternal } from 'app/data/models/internal/media-items/movie';
import { array, number, object, SchemaOf, string } from 'yup';
import { mediaItemFormValidationShape } from './media-item';

/**
 * The movie form validation schema shape
 */
const movieFormValidationShape = {
	...mediaItemFormValidationShape,
	directors: array().of(string().required()).optional(),
	durationMinutes: number()
};

/**
 * The movie form validation schema
 */
export const movieFormValidationSchema: SchemaOf<MovieInternal> = object().required().shape(movieFormValidationShape);
