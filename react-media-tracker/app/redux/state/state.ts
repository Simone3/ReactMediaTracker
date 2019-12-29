import { CategoriesListState, CategoryDetailsState, CategoryGlobalState } from 'app/redux/state/category';
import { ErrorState } from 'app/redux/state/error';
import { GroupDetailsState, GroupsListState } from 'app/redux/state/group';
import { ImportExportState } from 'app/redux/state/import-export';
import { MediaItemDetailsState, MediaItemsListState } from 'app/redux/state/media-item';
import { OwnPlatformDetailsState, OwnPlatformsListState } from 'app/redux/state/own-platform';
import { UserGlobalState, UserOperationsState } from 'app/redux/state/user';

/**
 * The global application state (handled by Redux)
 */
export class State {

	/**
	 * Portion of the state with the global error data
	 */
	public readonly error!: ErrorState;

	/**
	 * Portion of the state with the global user information
	 */
	public readonly userGlobal!: UserGlobalState;

	/**
	 * Portion of the state with the user operations progress state
	 */
	public readonly userOperations!: UserOperationsState;

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
	 * Portion of the state with the media item details information
	 */
	public readonly mediaItemDetails!: MediaItemDetailsState;

	/**
	 * Portion of the state with the groups list information
	 */
	public readonly groupsList!: GroupsListState;

	/**
	 * Portion of the state with the group details information
	 */
	public readonly groupDetails!: GroupDetailsState;

	/**
	 * Portion of the state with the own platforms list information
	 */
	public readonly ownPlatformsList!: OwnPlatformsListState;

	/**
	 * Portion of the state with the own platform details information
	 */
	public readonly ownPlatformDetails!: OwnPlatformDetailsState;

	/**
	 * Portion of the state with the bulk import-export information
	 */
	public readonly importExport!: ImportExportState;
}
