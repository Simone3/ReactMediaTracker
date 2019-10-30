import { TvShowInternal } from 'app/data/models/internal/media-items/tv-show';
import { array, boolean, date, number, object, ObjectSchema, ObjectSchemaDefinition, string } from 'yup';
import { mediaItemFormValidationShape } from './media-item';

/**
 * The TV show form validation schema shape
 */
const tvShowFormValidationShape: ObjectSchemaDefinition<TvShowInternal> = {
	...mediaItemFormValidationShape,
	creators: array().of(string()),
	averageEpisodeRuntimeMinutes: number(),
	episodesNumber: number(),
	seasonsNumber: number(),
	inProduction: boolean(),
	nextEpisodeAirDate: date()
};

/**
 * The TV show form validation schema
 */
export const tvShowFormValidationSchema: ObjectSchema<TvShowInternal> = object().shape(tvShowFormValidationShape);
