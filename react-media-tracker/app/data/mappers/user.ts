import { ModelMapper } from 'app/data/mappers/common';
import { IdentifiedUser } from 'app/data/models/api/user';
import { UserInternal } from 'app/data/models/internal/user';

/**
 * Mapper for users
 */
class UserMapper extends ModelMapper<UserInternal, IdentifiedUser, {}> {
	
	/**
	 * @override
	 */
	protected convertToExternal(source: UserInternal): IdentifiedUser {
		
		return {
			uid: source.id,
			name: source.name
		};
	}
	
	/**
	 * @override
	 */
	protected convertToInternal(source: IdentifiedUser): UserInternal {
		
		return {
			id: source.uid,
			name: source.name
		};
	}
}

/**
 * Singleton instance of the users mapper
 */
export const userMapper = new UserMapper();
