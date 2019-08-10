import { ErrorState } from 'app/data/models/internal/error';
import { CategoriesListState, CategoryDetailsState } from 'app/redux/state/category';
import { MediaItemsListState } from './media-item';

/**
 * The global application state (handled by Redux)
 */
export class State {

	/**
	 * Portion of the state with the global error data
	 */
	public readonly error!: ErrorState;

	/**
	 * Portion of the state with the categories list information
	 */
	public readonly categoriesList!: CategoriesListState;

	/**
	 * Portion of the state with the category details information
	 */
	public readonly categoryDetails!: CategoryDetailsState;

	/**
	 * Portion of the state with the media items list information
	 */
	public readonly mediaItemsList!: MediaItemsListState;
}
