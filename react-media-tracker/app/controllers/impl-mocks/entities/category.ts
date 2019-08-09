import { CategoryController } from 'app/controllers/core/entities/category';
import { CategoryInternal } from 'app/models/internal/entities/category';

/**
 * Mocked implementation of the CategoryController that contains an in-memory list of categories
 * @see CategoryController
 */
export class CategoryMockedController implements CategoryController {

	private delay = 0;

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
		
		const categories = this.categories = this.categories.slice();

		return new Promise((resolve) => {
			setTimeout(() => {
				
				resolve(categories);
				
			}, this.delay);
		});
	}

	/**
	 * @override
	 */
	public async saveCategory(category: CategoryInternal): Promise<void> {

		const categories = this.categories = this.categories.slice();

		return new Promise((resolve) => {
			setTimeout(() => {
				
				if(category.id) {

					const i = categories.findIndex((cat) => {
						return category.id === cat.id;
					});
					categories[i] = category;
				}
				else {
		
					category.id = String(5 + Math.floor(Math.random() * 10000000001));
					categories.push(category);
				}

				resolve();

			}, this.delay);
		});
	}

	/**
	 * @override
	 */
	public async deleteCategory(categoryId: string): Promise<void> {

		const categories = this.categories = this.categories.slice();

		return new Promise((resolve) => {
			setTimeout(() => {
				
				const i = categories.findIndex((cat) => {
					return categoryId === cat.id;
				});
				categories.splice(i, 1);

				resolve();
				
			}, this.delay);
		});
	}
}
