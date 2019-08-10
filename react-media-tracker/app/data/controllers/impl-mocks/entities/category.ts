import { CategoryController } from 'app/data/controllers/core/entities/category';
import { MockControllerHelper } from 'app/data/controllers/impl-mocks/mock-helper';
import { CategoryInternal } from 'app/data/models/internal/category';

/**
 * Mocked implementation of the CategoryController that contains an in-memory list of categories
 * @see CategoryController
 */
export class CategoryMockedController extends MockControllerHelper implements CategoryController {

	protected delay = 0;
	protected errorProbability = 0;

	private categories: CategoryInternal[] = [{
		id: '1',
		color: '#FF0000',
		mediaType: 'BOOK',
		name: 'My Books'
	}, {
		id: '2',
		color: '#008000',
		mediaType: 'MOVIE',
		name: 'My Movies'
	}, {
		id: '3',
		color: '#1E90FF',
		mediaType: 'TV_SHOW',
		name: 'My TV Shows'
	}, {
		id: '4',
		color: '#FFA500',
		mediaType: 'VIDEOGAME',
		name: 'My Videogames'
	}];

	/**
	 * @override
	 */
	public async getAllCategories(): Promise<CategoryInternal[]> {
		
		return this.resolveResult(() => {

			this.categories = this.categories.slice();
			return this.categories;
		});
	}

	/**
	 * @override
	 */
	public async saveCategory(category: CategoryInternal): Promise<void> {

		return this.resolveResult(() => {
				
			const categories = this.categories = this.categories.slice();

			if(category.id) {

				const i = categories.findIndex((cat) => {
					return category.id === cat.id;
				});
				categories[i] = category;
			}
			else {
	
				category.id = this.randomId();
				categories.push(category);
			}
		});
	}

	/**
	 * @override
	 */
	public async deleteCategory(categoryId: string): Promise<void> {

		return this.resolveResult(() => {
		
			const categories = this.categories = this.categories.slice();

			const i = categories.findIndex((cat) => {
				return categoryId === cat.id;
			});
			
			categories.splice(i, 1);
		});
	}
}
