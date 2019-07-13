import { ModelMapper } from 'app/mappers/common';
import { IdentifiedOwnPlatform } from 'app/models/api/own-platform';
import { OwnPlatformInternal } from 'app/models/internal/entities/own-platform';

/**
 * Mapper for own platforms
 */
class OwnPlatformMapper extends ModelMapper<OwnPlatformInternal, IdentifiedOwnPlatform, {}> {
		
	/**
	 * @override
	 */
	protected convertToExternal(source: OwnPlatformInternal): IdentifiedOwnPlatform {
		
		return {
			uid: source.id,
			name: source.name,
			color: source.color
		};
	}
	
	/**
	 * @override
	 */
	protected convertToInternal(source: IdentifiedOwnPlatform): OwnPlatformInternal {
		
		return {
			id: source.uid,
			name: source.name,
			color: source.color
		};
	}
}

/**
 * Singleton instance of the own platforms mapper
 */
export const ownPlatformMapper = new OwnPlatformMapper();
