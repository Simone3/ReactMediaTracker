import { OwnPlatformInternal } from 'app/data/models/internal/own-platform';
import { object, ObjectSchema, string } from 'yup';

/**
 * The own platform form validation schema
 */
export const ownPlatformFormValidationSchema: ObjectSchema<OwnPlatformInternal> = object().shape({
	id: string(),
	name: string().required(),
	color: string().required()
});
