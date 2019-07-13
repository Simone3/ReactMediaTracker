import { ModelMapper } from 'app/mappers/common';
import { IdentifiedGroup } from 'app/models/api/group';
import { GroupInternal } from 'app/models/internal/entities/group';

/**
 * Mapper for groups
 */
class GroupMapper extends ModelMapper<GroupInternal, IdentifiedGroup, {}> {
		
	/**
	 * @override
	 */
	protected convertToExternal(source: GroupInternal): IdentifiedGroup {
		
		return {
			uid: source.id,
			name: source.name
		};
	}
	
	/**
	 * @override
	 */
	protected convertToInternal(source: IdentifiedGroup): GroupInternal {
		
		return {
			id: source.uid,
			name: source.name
		};
	}
}

/**
 * Singleton instance of the groups mapper
 */
export const groupMapper = new GroupMapper();
