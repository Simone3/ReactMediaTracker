import { VideogameInternal } from 'app/data/models/internal/media-items/videogame';
import { array, number, object, ObjectSchema, ObjectSchemaDefinition, string } from 'yup';
import { mediaItemFormValidationShape } from './media-item';

/**
 * The videogame form validation schema shape
 */
const videogameFormValidationShape: ObjectSchemaDefinition<VideogameInternal> = {
	...mediaItemFormValidationShape,
	developers: array().of(string()),
	publishers: array().of(string()),
	platforms: array().of(string()),
	averageLengthHours: number()
};

/**
 * The videogame form validation schema
 */
export const videogameFormValidationSchema: ObjectSchema<VideogameInternal> = object().shape(videogameFormValidationShape);
