import { config } from 'app/config/config';
import { restJsonInvoker } from 'app/controllers/common/rest-json-invoker';
import { categoryMapper } from 'app/mappers/category';
import { GetAllCategoriesResponse } from 'app/models/api/category';
import { CategoryInternal } from 'app/models/internal/category';
import { miscUtils } from 'app/utilities/misc-utils';

/**
 * The data controller for the category entities
 */
interface CategoryController {

	/**
	 * Gets all saved categories for the given user
	 * @param userId user ID
	 * @returns the list of categories, as a promise
	 */
	getAllCategories(userId: string): Promise<CategoryInternal[]>;
}

/**
 * Implementation that queries the back-end APIs
 */
class CategoryBackEndController implements CategoryController {

	/**
	 * @override
	 */
	public async getAllCategories(userId: string): Promise<CategoryInternal[]> {
		
		const response = await restJsonInvoker.invoke({
			method: 'GET',
			url: miscUtils.buildUrl([ config.backEnd.baseUrl, config.backEnd.categories.getAll ], {
				userId: userId
			}),
			responseBodyClass: GetAllCategoriesResponse
		});
		
		return categoryMapper.toInternalList(response.categories);
	}
}

/**
 * Singleton implementation of the category controller
 */
export const categoryController: CategoryController = new CategoryBackEndController();

