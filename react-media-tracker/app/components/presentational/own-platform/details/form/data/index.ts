import { OwnPlatformIconInternal, OwnPlatformInternal, OWN_PLATFORM_ICON_INTERNAL_VALUES } from 'app/data/models/internal/own-platform';
import { object, ObjectSchema, string, StringSchema } from 'yup';

/**
 * The own platform form validation schema
 */
export const ownPlatformFormValidationSchema: ObjectSchema<OwnPlatformInternal> = object().shape({
	id: string(),
	name: string().required(),
	color: string().required(),
	icon: string().oneOf(OWN_PLATFORM_ICON_INTERNAL_VALUES).required() as StringSchema<OwnPlatformIconInternal>
});
