import { VideogameInternal } from 'app/data/models/internal/media-items/videogame';
import { array, number, object, ObjectSchema, ObjectSchemaDefinition, string } from 'yup';
import { mediaItemFormValidationShape } from './media-item';

/**
 * The videogame form validation schema shape
 */
const videogameFormValidationShape: ObjectSchemaDefinition<VideogameInternal> = {
	...mediaItemFormValidationShape,
	developers: array().of(string().required()),
	publishers: array().of(string().required()),
	platforms: array().of(string().required()),
	averageLengthHours: number()
};

/**
 * The videogame form validation schema
 */
export const videogameFormValidationSchema: ObjectSchema<VideogameInternal> = object().required().shape(videogameFormValidationShape);
