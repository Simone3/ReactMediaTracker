import { TvShowInternal } from 'app/data/models/internal/media-items/tv-show';
import { array, boolean, date, number, object, SchemaOf, string } from 'yup';
import { mediaItemFormValidationShape } from './media-item';

/**
 * The TV show form validation schema shape
 */
const tvShowFormValidationShape = {
	...mediaItemFormValidationShape,
	creators: array().of(string().required()).optional(),
	averageEpisodeRuntimeMinutes: number(),
	episodesNumber: number(),
	seasonsNumber: number(),
	inProduction: boolean(),
	nextEpisodeAirDate: date()
};

/**
 * The TV show form validation schema
 */
export const tvShowFormValidationSchema: SchemaOf<TvShowInternal> = object().required().shape(tvShowFormValidationShape);
