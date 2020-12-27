import { GroupInternal } from 'app/data/models/internal/group';
import { object, SchemaOf, string, StringSchema } from 'yup';

/**
 * The group form validation schema
 */
export const groupFormValidationSchema: SchemaOf<GroupInternal> = object().required().shape({
	id: string() as StringSchema<string>,
	name: string().required()
});
