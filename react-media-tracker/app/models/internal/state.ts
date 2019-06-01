import { CategoriesListState, CategoryInternal } from 'app/models/internal/category';

/**
 * The global application state (handled by Redux)
 */
export class State {

	/**
	 * Portion of the state with the categories list information
	 */
	public readonly categories!: CategoriesListState;

	/**
	 * The currently selected category
	 */
	public readonly selectedCategory?: CategoryInternal;
}
