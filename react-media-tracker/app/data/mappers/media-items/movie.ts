import { MediaItemFilterMapper, MediaItemMapper, MediaItemSortMapper } from 'app/data/mappers/media-items/media-item';
import { IdentifiedMovie, MovieFilter, MovieSortBy, MovieSortField } from 'app/data/models/api/media-items/movie';
import { MovieFilterInternal, MovieInternal, MovieSortByInternal, MovieSortFieldInternal } from 'app/data/models/internal/entities/media-items/movie';

/**
 * Mapper for movies
 */
class MovieMapper extends MediaItemMapper<MovieInternal, IdentifiedMovie> {
		
	/**
	 * @override
	 */
	protected convertToExternal(source: MovieInternal): IdentifiedMovie {

		return {
			...this.commonToExternal(source),
			uid: source.id,
			directors: source.directors,
			durationMinutes: source.durationMinutes
		};
	}
		
	/**
	 * @override
	 */
	protected convertToInternal(source: IdentifiedMovie): MovieInternal {
		
		return {
			...this.commonToInternal(source),
			id: source.uid,
			directors: source.directors,
			durationMinutes: source.durationMinutes
		};
	}
}

/**
 * Mapper for movie filters
 */
class MovieFilterMapper extends MediaItemFilterMapper<MovieFilterInternal, MovieFilter> {
	
	/**
	 * @override
	 */
	protected convertToExternal(source: MovieFilterInternal): MovieFilter {
		
		return this.commonToExternal(source);
	}
		
	/**
	 * @override
	 */
	protected convertToInternal(source: MovieFilter): MovieFilterInternal {
		
		return this.commonToInternal(source);
	}
}

/**
 * Mapper for movie sort options
 */
class MovieSortMapper extends MediaItemSortMapper<MovieSortByInternal, MovieSortBy> {
	
	/**
	 * @override
	 */
	protected convertToExternal(source: MovieSortByInternal): MovieSortBy {
		
		return {
			...this.commonToExternal(source),
			field: this.toExternalField(source.field)
		};
	}
		
	/**
	 * @override
	 */
	protected convertToInternal(source: MovieSortBy): MovieSortByInternal {
		
		return {
			...this.commonToInternal(source),
			field: this.toInternalField(source.field)
		};
	}
	
	/**
	 * Helper to translate the sort field enumeration
	 * @param source the mapping source
	 * @returns the mapping target
	 */
	protected toExternalField(source: MovieSortFieldInternal): string {

		switch(source) {
			
			case 'DIRECTOR': return MovieSortField.DIRECTOR;
			default: return this.commonToExternalField(source);
		}
	}
	
	/**
	 * Helper to translate the sort field enumeration
	 * @param source the mapping source
	 * @returns the mapping target
	 */
	protected toInternalField(source: string): MovieSortFieldInternal {

		switch(source) {
			
			case MovieSortField.DIRECTOR: return 'DIRECTOR';
			default: return this.commonToInternalField(source);
		}
	}
}

/**
 * Singleton instance of the movies mapper
 */
export const movieMapper = new MovieMapper();

/**
 * Singleton instance of the movies filter mapper
 */
export const movieFilterMapper = new MovieFilterMapper();

/**
 * Singleton instance of the movies sort mapper
 */
export const movieSortMapper = new MovieSortMapper();
