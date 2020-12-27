import { VideogameInternal } from 'app/data/models/internal/media-items/videogame';
import { array, number, object, SchemaOf, string } from 'yup';
import { mediaItemFormValidationShape } from './media-item';

/**
 * The videogame form validation schema shape
 */
const videogameFormValidationShape = {
	...mediaItemFormValidationShape,
	developers: array().of(string().required()).optional(),
	publishers: array().of(string().required()).optional(),
	platforms: array().of(string().required()).optional(),
	averageLengthHours: number()
};

/**
 * The videogame form validation schema
 */
export const videogameFormValidationSchema: SchemaOf<VideogameInternal> = object().required().shape(videogameFormValidationShape);
