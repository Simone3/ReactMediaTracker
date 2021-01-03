import { TvShowSeasonInternal } from 'app/data/models/internal/media-items/tv-show';
import { number, object, SchemaOf } from 'yup';

/**
 * The TV show season form validation schema
 */
export const tvShowSeasonValidationSchema: SchemaOf<TvShowSeasonInternal> = object().required().shape({
	number: number().required(),
	episodesNumber: number().optional(),
	watchedEpisodesNumber: number().optional()
});
