import { ModelMapper } from 'app/data/mappers/common';
import { IdentifiedCategory } from 'app/data/models/api/category';
import { CategoryInternal } from 'app/data/models/internal/category';

/**
 * Mapper for categories
 */
class CategoryMapper extends ModelMapper<CategoryInternal, IdentifiedCategory, {}> {
		
	/**
	 * @override
	 */
	protected convertToExternal(source: CategoryInternal): IdentifiedCategory {
		
		return {
			uid: source.id,
			name: source.name,
			mediaType: source.mediaType,
			color: source.color
		};
	}
	
	/**
	 * @override
	 */
	protected convertToInternal(source: IdentifiedCategory): CategoryInternal {
		
		return {
			id: source.uid,
			name: source.name,
			mediaType: source.mediaType,
			color: source.color
		};
	}
}

/**
 * Singleton instance of the categories mapper
 */
export const categoryMapper = new CategoryMapper();

