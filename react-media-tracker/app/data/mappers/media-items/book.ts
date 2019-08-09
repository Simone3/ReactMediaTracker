import { MediaItemFilterMapper, MediaItemMapper, MediaItemSortMapper } from 'app/data/mappers/media-items/media-item';
import { BookFilter, BookSortBy, BookSortField, IdentifiedBook } from 'app/data/models/api/media-items/book';
import { BookFilterInternal, BookInternal, BookSortByInternal, BookSortFieldInternal } from 'app/data/models/internal/entities/media-items/book';

/**
 * Mapper for books
 */
class BookMapper extends MediaItemMapper<BookInternal, IdentifiedBook> {
		
	/**
	 * @override
	 */
	protected convertToExternal(source: BookInternal): IdentifiedBook {

		return {
			...this.commonToExternal(source),
			uid: source.id,
			authors: source.authors,
			pagesNumber: source.pagesNumber
		};
	}
		
	/**
	 * @override
	 */
	protected convertToInternal(source: IdentifiedBook): BookInternal {
		
		return {
			...this.commonToInternal(source),
			id: source.uid,
			authors: source.authors,
			pagesNumber: source.pagesNumber
		};
	}
}

/**
 * Mapper for book filters
 */
class BookFilterMapper extends MediaItemFilterMapper<BookFilterInternal, BookFilter> {
	
	/**
	 * @override
	 */
	protected convertToExternal(source: BookFilterInternal): BookFilter {
		
		return this.commonToExternal(source);
	}
		
	/**
	 * @override
	 */
	protected convertToInternal(source: BookFilter): BookFilterInternal {
		
		return this.commonToInternal(source);
	}
}

/**
 * Mapper for book sort options
 */
class BookSortMapper extends MediaItemSortMapper<BookSortByInternal, BookSortBy> {
	
	/**
	 * @override
	 */
	protected convertToExternal(source: BookSortByInternal): BookSortBy {
		
		return {
			...this.commonToExternal(source),
			field: this.toExternalField(source.field)
		};
	}
		
	/**
	 * @override
	 */
	protected convertToInternal(source: BookSortBy): BookSortByInternal {
		
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
	protected toExternalField(source: BookSortFieldInternal): string {

		switch(source) {
			
			case 'AUTHOR': return BookSortField.AUTHOR;
			default: return this.commonToExternalField(source);
		}
	}
	
	/**
	 * Helper to translate the sort field enumeration
	 * @param source the mapping source
	 * @returns the mapping target
	 */
	protected toInternalField(source: string): BookSortFieldInternal {

		switch(source) {
			
			case BookSortField.AUTHOR: return 'AUTHOR';
			default: return this.commonToInternalField(source);
		}
	}
}

/**
 * Singleton instance of the books mapper
 */
export const bookMapper = new BookMapper();

/**
 * Singleton instance of the books filter mapper
 */
export const bookFilterMapper = new BookFilterMapper();

/**
 * Singleton instance of the books sort mapper
 */
export const bookSortMapper = new BookSortMapper();
