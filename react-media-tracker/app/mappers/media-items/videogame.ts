import { MediaItemFilterMapper, MediaItemMapper, MediaItemSortMapper } from 'app/mappers/media-items/media-item';
import { IdentifiedVideogame, VideogameFilter, VideogameSortBy, VideogameSortField } from 'app/models/api/media-items/videogame';
import { VideogameFilterInternal, VideogameInternal, VideogameSortByInternal, VideogameSortFieldInternal } from 'app/models/internal/entities/media-items/videogame';

/**
 * Mapper for videogames
 */
class VideogameMapper extends MediaItemMapper<VideogameInternal, IdentifiedVideogame> {
		
	/**
	 * @override
	 */
	protected convertToExternal(source: VideogameInternal): IdentifiedVideogame {

		return {
			...this.commonToExternal(source),
			uid: source.id,
			developers: source.developers,
			publishers: source.publishers,
			platforms: source.platforms,
			averageLengthHours: source.averageLengthHours
		};
	}
		
	/**
	 * @override
	 */
	protected convertToInternal(source: IdentifiedVideogame): VideogameInternal {
		
		return {
			...this.commonToInternal(source),
			id: source.uid,
			developers: source.developers,
			publishers: source.publishers,
			platforms: source.platforms,
			averageLengthHours: source.averageLengthHours
		};
	}
}

/**
 * Mapper for videogame filters
 */
class VideogameFilterMapper extends MediaItemFilterMapper<VideogameFilterInternal, VideogameFilter> {
	
	/**
	 * @override
	 */
	protected convertToExternal(source: VideogameFilterInternal): VideogameFilter {
		
		return this.commonToExternal(source);
	}
		
	/**
	 * @override
	 */
	protected convertToInternal(source: VideogameFilter): VideogameFilterInternal {
		
		return this.commonToInternal(source);
	}
}

/**
 * Mapper for videogame sort options
 */
class VideogameSortMapper extends MediaItemSortMapper<VideogameSortByInternal, VideogameSortBy> {
	
	/**
	 * @override
	 */
	protected convertToExternal(source: VideogameSortByInternal): VideogameSortBy {
		
		return {
			...this.commonToExternal(source),
			field: this.toExternalField(source.field)
		};
	}
		
	/**
	 * @override
	 */
	protected convertToInternal(source: VideogameSortBy): VideogameSortByInternal {
		
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
	protected toExternalField(source: VideogameSortFieldInternal): string {

		switch(source) {
			
			case 'DEVELOPER': return VideogameSortField.DEVELOPER;
			default: return this.commonToExternalField(source);
		}
	}
	
	/**
	 * Helper to translate the sort field enumeration
	 * @param source the mapping source
	 * @returns the mapping target
	 */
	protected toInternalField(source: string): VideogameSortFieldInternal {

		switch(source) {
			
			case VideogameSortField.DEVELOPER: return 'DEVELOPER';
			default: return this.commonToInternalField(source);
		}
	}
}

/**
 * Singleton instance of the videogames mapper
 */
export const videogameMapper = new VideogameMapper();

/**
 * Singleton instance of the videogames filter mapper
 */
export const videogameFilterMapper = new VideogameFilterMapper();

/**
 * Singleton instance of the videogames sort mapper
 */
export const videogameSortMapper = new VideogameSortMapper();
