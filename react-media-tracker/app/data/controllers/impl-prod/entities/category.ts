import { config } from 'app/config/config';
import { restJsonInvoker } from 'app/data/controllers/core/common/rest-json-invoker';
import { CategoryController } from 'app/data/controllers/core/entities/category';
import { categoryFilterMapper, categoryMapper } from 'app/data/mappers/category';
import { AddCategoryRequest, AddCategoryResponse, DeleteCategoryResponse, FilterCategoriesRequest, FilterCategoriesResponse, GetAllCategoriesResponse, UpdateCategoryRequest, UpdateCategoryResponse } from 'app/data/models/api/category';
import { CategoryFilterInternal, CategoryInternal } from 'app/data/models/internal/category';
import { miscUtils } from 'app/utilities/misc-utils';

/**
 * Implementation of the CategoryController that queries the back-end APIs
 * @see CategoryController
 */
export class CategoryBackEndController implements CategoryController {

	/**
	 * @override
	 */
	public async getAllCategories(userId: string): Promise<CategoryInternal[]> {
		
		const response = await restJsonInvoker.invoke({
			method: 'GET',
			url: miscUtils.buildUrl([ config.backEnd.baseUrl, '/users/:userId/categories' ], {
				userId: userId
			}),
			responseBodyClass: GetAllCategoriesResponse
		});
		
		return categoryMapper.toInternalList(response.categories);
	}

	/**
	 * @override
	 */
	public async filter(userId: string, filter?: CategoryFilterInternal): Promise<CategoryInternal[]> {
		
		const request: FilterCategoriesRequest = {
			filter: filter ? categoryFilterMapper.toExternal(filter) : undefined
		};

		const response = await restJsonInvoker.invoke({
			method: 'POST',
			url: miscUtils.buildUrl([ config.backEnd.baseUrl, '/users/:userId/categories/filter' ], {
				userId: userId
			}),
			requestBody: request,
			responseBodyClass: FilterCategoriesResponse
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
				url: miscUtils.buildUrl([ config.backEnd.baseUrl, '/users/:userId/categories/:id' ], {
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
				url: miscUtils.buildUrl([ config.backEnd.baseUrl, '/users/:userId/categories' ], {
					userId: userId
				}),
				requestBody: request,
				responseBodyClass: AddCategoryResponse
			});
		}
	}

	/**
	 * @override
	 */
	public async deleteCategory(userId: string, categoryId: string): Promise<void> {

		await restJsonInvoker.invoke({
			method: 'DELETE',
			url: miscUtils.buildUrl([ config.backEnd.baseUrl, '/users/:userId/categories/:id' ], {
				userId: userId,
				id: categoryId
			}),
			responseBodyClass: DeleteCategoryResponse
		});
	}
}
