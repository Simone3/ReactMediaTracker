import { OwnPlatformController } from 'app/data/controllers/core/entities/own-platform';
import { MockControllerHelper } from 'app/data/controllers/impl-mocks/mock-helper';
import { OwnPlatformFilterInternal, OwnPlatformInternal } from 'app/data/models/internal/own-platform';

/**
 * Mocked implementation of the OwnPlatformController that contains an in-memory list of own platforms
 * @see Own platformController
 */
export class OwnPlatformMockedController extends MockControllerHelper implements OwnPlatformController {

	protected delay = 0;
	protected errorProbability = 0;

	protected readonly ownPlatforms: {[category: string]: OwnPlatformInternal[]} = {
		2: [{
			id: '1',
			name: 'Netflix',
			color: '#f25a5a',
			icon: 'netflix'
		}, {
			id: '2',
			name: 'Hulu',
			color: '#74eb74',
			icon: 'hulu'
		}, {
			id: '3',
			name: 'Disc',
			color: '#4bead7',
			icon: 'disc'
		}]
	};

	/**
	 * @override
	 */
	public async getAllOwnPlatforms(categoryId: string): Promise<OwnPlatformInternal[]> {
		
		return this.resolveResult(() => {

			return this.getCategoryOwnPlatforms(categoryId).slice();
		});
	}

	/**
	 * @override
	 */
	public async filter(categoryId: string, filter?: OwnPlatformFilterInternal): Promise<OwnPlatformInternal[]> {

		return this.resolveResult(() => {

			const categoryOwnPlatforms = this.getCategoryOwnPlatforms(categoryId);

			if(filter && filter.name) {

				return categoryOwnPlatforms.filter((platform) => {
	
					return filter.name && filter.name.toUpperCase() === platform.name.toUpperCase();
				});
			}
			else {

				return categoryOwnPlatforms.slice();
			}
		});
	}

	/**
	 * @override
	 */
	public async saveOwnPlatform(categoryId: string, ownPlatform: OwnPlatformInternal): Promise<void> {

		return this.resolveResult(() => {
			
			const categoryOwnPlatforms = this.getCategoryOwnPlatforms(categoryId);
			
			if(ownPlatform.id) {

				const i = categoryOwnPlatforms.findIndex((item) => {
					return item.id === ownPlatform.id;
				});

				categoryOwnPlatforms[i] = ownPlatform;
			}
			else {

				ownPlatform.id = this.randomId();
				categoryOwnPlatforms.push(ownPlatform);
			}
			
			this.ownPlatforms[categoryId] = categoryOwnPlatforms;
		});
	}

	/**
	 * @override
	 */
	public async deleteOwnPlatform(categoryId: string, ownPlatformId: string): Promise<void> {

		return this.resolveResult(() => {
			
			const categoryOwnPlatforms = this.getCategoryOwnPlatforms(categoryId);
			
			const i = categoryOwnPlatforms.findIndex((item) => {
				return item.id === ownPlatformId;
			});
			
			categoryOwnPlatforms.splice(i, 1);

			this.ownPlatforms[categoryId] = categoryOwnPlatforms;
		});
	}

	/**
	 * Helper to get all own platforms in the category
	 * @param categoryId the category ID
	 * @returns the own platforms
	 */
	private getCategoryOwnPlatforms(categoryId: string): OwnPlatformInternal[] {

		let categoryOwnPlatforms: OwnPlatformInternal[];
		if(categoryId in this.ownPlatforms) {

			categoryOwnPlatforms = this.ownPlatforms[categoryId];
		}
		else {
			
			categoryOwnPlatforms = [];
		}
		return categoryOwnPlatforms;
	}
}
