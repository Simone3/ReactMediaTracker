import { CategoriesListState, CategoryDetailsState } from 'app/models/internal/category';

/**
 * The global application state (handled by Redux)
 */
export class State {

	/**
	 * Portion of the state with the categories list information
	 */
	public readonly categoriesList!: CategoriesListState;

	/**
	 * Portion of the state with the category details information
	 */
	public readonly categoryDetails!: CategoryDetailsState;
}
