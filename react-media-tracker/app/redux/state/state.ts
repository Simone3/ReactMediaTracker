import { ErrorState } from 'app/data/models/internal/error';
import { CategoriesListState, CategoryDetailsState, CategoryGlobalState } from 'app/redux/state/category';
import { GroupsListState } from 'app/redux/state/group';
import { MediaItemDetailsState, MediaItemsListState } from 'app/redux/state/media-item';

/**
 * The global application state (handled by Redux)
 */
export class State {

	/**
	 * Portion of the state with the global error data
	 */
	public readonly error!: ErrorState;

	/**
	 * Portion of the state with the global category data
	 */
	public readonly categoryGlobal!: CategoryGlobalState;

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

	/**
	 * Portion of the state with the groups list information
	 */
	public readonly groupsList!: GroupsListState;

	/**
	 * Portion of the state with the media item details information
	 */
	public readonly mediaItemDetails!: MediaItemDetailsState;
}
