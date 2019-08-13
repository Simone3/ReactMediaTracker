import { MediaItemCatalogDetailsMapper, MediaItemCatalogSearchMapper, MediaItemFilterMapper, MediaItemMapper, MediaItemSortMapper } from 'app/data/mappers/media-items/media-item';
import { CatalogTvShow, IdentifiedTvShow, SearchTvShowCatalogResult, TvShowFilter, TvShowSortBy, TvShowSortField } from 'app/data/models/api/media-items/tv-show';
import { CatalogTvShowInternal, SearchTvShowCatalogResultInternal, TvShowFilterInternal, TvShowInternal, TvShowSortByInternal, TvShowSortFieldInternal } from 'app/data/models/internal/media-items/tv-show';
import { dateUtils } from 'app/utilities/date-utils';

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
			nextEpisodeAirDate: dateUtils.toString(source.nextEpisodeAirDate)
		};
	}
		
	/**
	 * @override
	 */
	protected convertToInternal(source: IdentifiedTvShow): TvShowInternal {
		
		return {
			...this.commonToInternal(source),
			id: source.uid,
			mediaType: 'TV_SHOW',
			creators: source.creators,
			averageEpisodeRuntimeMinutes: source.averageEpisodeRuntimeMinutes,
			episodesNumber: source.episodesNumber,
			seasonsNumber: source.seasonsNumber,
			inProduction: source.inProduction,
			nextEpisodeAirDate: dateUtils.toDate(source.nextEpisodeAirDate)
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
 * Mapper for TV show catalog search results
 */
class TvShowCatalogSearchMapper extends MediaItemCatalogSearchMapper<SearchTvShowCatalogResultInternal, SearchTvShowCatalogResult> {
		
	/**
	 * @override
	 */
	protected convertToExternal(source: SearchTvShowCatalogResultInternal): SearchTvShowCatalogResult {

		return this.commonToExternal(source);
	}
	
	/**
	 * @override
	 */
	protected convertToInternal(source: SearchTvShowCatalogResult): SearchTvShowCatalogResultInternal {

		return this.commonToInternal(source);
	}
}

/**
 * Mapper for TV show catalog details
 */
class TvShowCatalogDetailsMapper extends MediaItemCatalogDetailsMapper<CatalogTvShowInternal, CatalogTvShow> {
	
	/**
	 * @override
	 */
	protected convertToExternal(source: CatalogTvShowInternal): CatalogTvShow {

		return {
			...this.commonToExternal(source),
			creators: source.creators,
			averageEpisodeRuntimeMinutes: source.averageEpisodeRuntimeMinutes,
			episodesNumber: source.episodesNumber,
			seasonsNumber: source.seasonsNumber,
			inProduction: source.inProduction,
			nextEpisodeAirDate: dateUtils.toString(source.nextEpisodeAirDate)
		};
	}
	
	/**
	 * @override
	 */
	protected convertToInternal(source: CatalogTvShow): CatalogTvShowInternal {

		return {
			...this.commonToInternal(source),
			creators: source.creators,
			averageEpisodeRuntimeMinutes: source.averageEpisodeRuntimeMinutes,
			episodesNumber: source.episodesNumber,
			seasonsNumber: source.seasonsNumber,
			inProduction: source.inProduction,
			nextEpisodeAirDate: dateUtils.toDate(source.nextEpisodeAirDate)
		};
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

/**
 * Singleton instance of the TV shows catalog search mapper
 */
export const tvShowCatalogSearchMapper = new TvShowCatalogSearchMapper();

/**
 * Singleton instance of the TV shows catalog details mapper
 */
export const tvShowCatalogDetailsMapper = new TvShowCatalogDetailsMapper();

