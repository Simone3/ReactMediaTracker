import { GroupController } from 'app/data/controllers/core/entities/group';
import { MockControllerHelper } from 'app/data/controllers/impl-mocks/mock-helper';
import { GroupInternal } from 'app/data/models/internal/group';

/**
 * Mocked implementation of the GroupController that contains an in-memory list of groups
 * @see GroupController
 */
export class GroupMockedController extends MockControllerHelper implements GroupController {

	protected delay = 0;
	protected errorProbability = 0;

	protected readonly groups: {[category: string]: GroupInternal[]} = {
		2: [{
			id: '1',
			name: 'Group 1'
		}, {
			id: '2',
			name: 'Group 2'
		}]
	};

	/**
	 * @override
	 */
	public async getAllGroups(categoryId: string): Promise<GroupInternal[]> {
		
		return this.resolveResult(() => {

			return this.getCategoryGroups(categoryId).slice();
		});
	}

	/**
	 * @override
	 */
	public async saveGroup(categoryId: string, group: GroupInternal): Promise<void> {

		return this.resolveResult(() => {
			
			const categoryGroups = this.getCategoryGroups(categoryId);
			
			if(group.id) {

				const i = categoryGroups.findIndex((item) => {
					return item.id === group.id;
				});

				categoryGroups[i] = group;
			}
			else {

				group.id = this.randomId();
				categoryGroups.push(group);
			}
			
			this.groups[categoryId] = categoryGroups;
		});
	}

	/**
	 * @override
	 */
	public async deleteGroup(categoryId: string, groupId: string): Promise<void> {

		return this.resolveResult(() => {
			
			const categoryGroups = this.getCategoryGroups(categoryId);
			
			const i = categoryGroups.findIndex((item) => {
				return item.id === groupId;
			});
			
			categoryGroups.splice(i, 1);

			this.groups[categoryId] = categoryGroups;
		});
	}

	/**
	 * Helper to get all groups in the category
	 * @param categoryId the category ID
	 * @returns the groups
	 */
	private getCategoryGroups(categoryId: string): GroupInternal[] {

		let categoryGroups: GroupInternal[];
		if(categoryId in this.groups) {

			categoryGroups = this.groups[categoryId];
		}
		else {
			
			categoryGroups = [];
		}
		return categoryGroups;
	}
}
