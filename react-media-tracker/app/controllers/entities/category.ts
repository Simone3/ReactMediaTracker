import { config } from 'app/config/config';
import { restJsonInvoker } from 'app/controllers/common/rest-json-invoker';
import { categoryMapper } from 'app/mappers/category';
import { AddCategoryRequest, AddCategoryResponse, GetAllCategoriesResponse, UpdateCategoryRequest, UpdateCategoryResponse } from 'app/models/api/category';
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

	/**
	 * Saves a category, adding it if the ID is not specified or updating it otherwise
	 * @param userId user ID
	 * @param category the category
	 */
	saveCategory(userId: string, category: CategoryInternal): Promise<void>;
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

	/**
	 * @override
	 */
	public async saveCategory(userId: string, category: CategoryInternal): Promise<void> {

		if(category.id) {

			const request: UpdateCategoryRequest = {
				category: categoryMapper.toExternal(category)
			};
	
			await restJsonInvoker.invoke({
				method: 'PUT',
				url: miscUtils.buildUrl([ config.backEnd.baseUrl, config.backEnd.categories.update ], {
					userId: userId,
					id: category.id
				}),
				requestBody: request,
				responseBodyClass: UpdateCategoryResponse
			});
		}
		else {

			const request: AddCategoryRequest = {
				newCategory: categoryMapper.toExternal(category)
			};
	
			await restJsonInvoker.invoke({
				method: 'POST',
				url: miscUtils.buildUrl([ config.backEnd.baseUrl, config.backEnd.categories.add ], {
					userId: userId
				}),
				requestBody: request,
				responseBodyClass: AddCategoryResponse
			});
		}
	}
}

/**
 * Singleton implementation of the category controller
 */
export const categoryController: CategoryController = new CategoryBackEndController();

