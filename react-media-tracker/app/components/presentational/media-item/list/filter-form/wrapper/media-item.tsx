import { MediaItemFilterInternal, MediaItemSortByInternal } from 'app/data/models/internal/media-items/media-item';
import { CategoryInternal } from 'app/data/models/internal/category';

/**
 * MediaItemFilterFormComponent's input props
 */
export type MediaItemFilterFormComponentInput<TMediaItemFilterInternal extends MediaItemFilterInternal, TMediaItemSortByInternal extends MediaItemSortByInternal> = {

	/**
	 * The initial filter values for the form inputs
	 */
	initialFilter: TMediaItemFilterInternal;

	/**
	 * The initial sort values for the form inputs
	 */
	initialSortBy: TMediaItemSortByInternal[];

	/**
	 * The linked category
	 */
	category: CategoryInternal;
}

/**
 * MediaItemFilterFormComponent's output props
 */
export type MediaItemFilterFormComponentOutput = {

	/**
	 * Callback to submit the filter options
	 */
	submitFilter: (filter: MediaItemFilterInternal, sortBy: MediaItemSortByInternal[]) => void;
}
