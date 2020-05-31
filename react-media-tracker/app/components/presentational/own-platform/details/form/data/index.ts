import { OwnPlatformInternal, OWN_PLATFORM_ICON_INTERNAL_VALUES } from 'app/data/models/internal/own-platform';
import { object, ObjectSchema, string, StringSchema } from 'yup';

/**
 * The own platform form validation schema
 */
export const ownPlatformFormValidationSchema: ObjectSchema<OwnPlatformInternal> = object().required().shape({
	id: string() as StringSchema<string>,
	name: string().required(),
	color: string().required(),
	icon: string().oneOf(OWN_PLATFORM_ICON_INTERNAL_VALUES).required()
});
