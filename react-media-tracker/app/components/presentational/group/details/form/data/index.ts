import { GroupInternal } from 'app/data/models/internal/group';
import { object, ObjectSchema, string } from 'yup';

/**
 * The group form validation schema
 */
export const groupFormValidationSchema: ObjectSchema<GroupInternal> = object().shape({
	id: string(),
	name: string().required()
});
