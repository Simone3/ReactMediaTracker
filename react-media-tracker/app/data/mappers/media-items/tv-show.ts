import { MediaItemFilterMapper, MediaItemMapper, MediaItemSortMapper } from 'app/data/mappers/media-items/media-item';
import { IdentifiedTvShow, TvShowFilter, TvShowSortBy, TvShowSortField } from 'app/data/models/api/media-items/tv-show';
import { TvShowFilterInternal, TvShowInternal, TvShowSortByInternal, TvShowSortFieldInternal } from 'app/data/models/internal/entities/media-items/tv-show';

/**
 * Mapper for TV shows
 */
class TvShowMapper extends MediaItemMapper<TvShowInternal, IdentifiedTvShow> {
		
	/**
	 * @override
	 */
	protected convertToExternal(source: TvShowInternal): IdentifiedTvShow {

		return {
			...this.commonToExternal(source),
			uid: source.id,
			creators: source.creators,
			averageEpisodeRuntimeMinutes: source.averageEpisodeRuntimeMinutes,
			episodesNumber: source.episodesNumber,
			seasonsNumber: source.seasonsNumber,
			inProduction: source.inProduction,
			nextEpisodeAirDate: source.nextEpisodeAirDate
		};
	}
		
	/**
	 * @override
	 */
	protected convertToInternal(source: IdentifiedTvShow): TvShowInternal {
		
		return {
			...this.commonToInternal(source),
			id: source.uid,
			creators: source.creators,
			averageEpisodeRuntimeMinutes: source.averageEpisodeRuntimeMinutes,
			episodesNumber: source.episodesNumber,
			seasonsNumber: source.seasonsNumber,
			inProduction: source.inProduction,
			nextEpisodeAirDate: source.nextEpisodeAirDate
		};
	}
}

/**
 * Mapper for TV show filters
 */
class TvShowFilterMapper extends MediaItemFilterMapper<TvShowFilterInternal, TvShowFilter> {
	
	/**
	 * @override
	 */
	protected convertToExternal(source: TvShowFilterInternal): TvShowFilter {
		
		return this.commonToExternal(source);
	}
		
	/**
	 * @override
	 */
	protected convertToInternal(source: TvShowFilter): TvShowFilterInternal {
		
		return this.commonToInternal(source);
	}
}

/**
 * Mapper for TV show sort options
 */
class TvShowSortMapper extends MediaItemSortMapper<TvShowSortByInternal, TvShowSortBy> {
	
	/**
	 * @override
	 */
	protected convertToExternal(source: TvShowSortByInternal): TvShowSortBy {
		
		return {
			...this.commonToExternal(source),
			field: this.toExternalField(source.field)
		};
	}
		
	/**
	 * @override
	 */
	protected convertToInternal(source: TvShowSortBy): TvShowSortByInternal {
		
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
	protected toExternalField(source: TvShowSortFieldInternal): string {

		switch(source) {
			
			case 'CREATOR': return TvShowSortField.CREATOR;
			default: return this.commonToExternalField(source);
		}
	}
	
	/**
	 * Helper to translate the sort field enumeration
	 * @param source the mapping source
	 * @returns the mapping target
	 */
	protected toInternalField(source: string): TvShowSortFieldInternal {

		switch(source) {
			
			case TvShowSortField.CREATOR: return 'CREATOR';
			default: return this.commonToInternalField(source);
		}
	}
}

/**
 * Singleton instance of the TV shows mapper
 */
export const tvShowMapper = new TvShowMapper();

/**
 * Singleton instance of the TV shows filter mapper
 */
export const tvShowFilterMapper = new TvShowFilterMapper();

/**
 * Singleton instance of the TV shows sort mapper
 */
export const tvShowSortMapper = new TvShowSortMapper();

