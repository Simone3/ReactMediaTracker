import { config } from 'app/config/config';
import { CategoryMockedController } from 'app/data/controllers/impl-mocks/entities/category';
import { CategoryBackEndController } from 'app/data/controllers/impl-prod/entities/category';
import { CategoryInternal } from 'app/data/models/internal/category';

/**
 * The data controller for the category entities
 */
export interface CategoryController {

	/**
	 * Gets all saved categories for the given user
	 * @returns the list of categories, as a promise
	 */
	getAllCategories(): Promise<CategoryInternal[]>;

	/**
	 * Saves a category, adding it if the ID is not specified or updating it otherwise
	 * @param category the category
	 */
	saveCategory(category: CategoryInternal): Promise<void>;

	/**
	 * Deletes a category
	 * @param categoryId the category ID
	 */
	deleteCategory(categoryId: string): Promise<void>;
}

/**
 * Singleton implementation of the category controller
 */
export const categoryController: CategoryController = config.mocks.categories ? new CategoryMockedController() : new CategoryBackEndController();

