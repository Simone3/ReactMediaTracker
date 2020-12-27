import { OwnPlatformIconInternal, OwnPlatformInternal, OWN_PLATFORM_ICON_INTERNAL_VALUES } from 'app/data/models/internal/own-platform';
import { mixed, object, SchemaOf, string, StringSchema } from 'yup';

/**
 * The own platform form validation schema
 */
export const ownPlatformFormValidationSchema: SchemaOf<OwnPlatformInternal> = object().required().shape({
	id: string() as StringSchema<string>,
	name: string().required(),
	color: string().required(),
	icon: mixed<OwnPlatformIconInternal>().oneOf(OWN_PLATFORM_ICON_INTERNAL_VALUES).required()
});
