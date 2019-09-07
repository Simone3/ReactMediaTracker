import React, { Component, ReactNode } from 'react';
import { CategoryInternal } from 'app/data/models/internal/category';
import { MediaItemFilterInternal, MediaItemSortByInternal } from 'app/data/models/internal/media-items/media-item';
import { ModalComponent } from 'app/components/presentational/generic/modal';
import { MediaTypeSwitcherComponent } from 'app/components/presentational/generic/media-switcher';
import { MovieFilterFormComponent } from 'app/components/presentational/media-item/list/filter-form/wrapper/movie';
import { MovieFilterInternal, MovieSortByInternal } from 'app/data/models/internal/media-items/movie';
import { BookFilterFormComponent } from 'app/components/presentational/media-item/list/filter-form/wrapper/book';
import { BookFilterInternal, BookSortByInternal } from 'app/data/models/internal/media-items/book';
import { TvShowFilterFormComponent } from 'app/components/presentational/media-item/list/filter-form/wrapper/tv-show';
import { TvShowFilterInternal, TvShowSortByInternal } from 'app/data/models/internal/media-items/tv-show';
import { VideogameFilterFormComponent } from 'app/components/presentational/media-item/list/filter-form/wrapper/videogame';
import { VideogameFilterInternal, VideogameSortByInternal } from 'app/data/models/internal/media-items/videogame';
import { Text, View, Dimensions } from 'react-native';
import { i18n } from 'app/utilities/i18n';
import { styles } from 'app/components/presentational/media-item/list/filter-modal/styles';

/**
 * Presentational component to display a modal dialog with the media item filter options
 */
export class MediaItemFilterModalComponent extends Component<MediaItemFilterModalComponentProps> {
	
	/**
	 * @override
	 */
	public render(): ReactNode {

		const {
			close,
			visible,
			category,
			initialFilter,
			initialSortBy,
			submitFilter
		} = this.props;

		const switchCommonProps = {
			category: category,
			submitFilter: submitFilter
		};

		return (
			<ModalComponent
				visible={visible}
				onClose={close}
				horizontalPosition='center'
				verticalPosition='center'>
				<View style={[ styles.container, { width: 0.8 * Dimensions.get('screen').width }]}>
					<View style={styles.titleContainer}>
						<Text style={styles.title}>
							{i18n.t('mediaItem.list.filter.title')}
						</Text>
					</View>
					<MediaTypeSwitcherComponent
						discriminator={category}
						book={<BookFilterFormComponent {...switchCommonProps} initialFilter={initialFilter as BookFilterInternal} initialSortBy={initialSortBy as BookSortByInternal[]}/>}
						movie={<MovieFilterFormComponent {...switchCommonProps} initialFilter={initialFilter as MovieFilterInternal} initialSortBy={initialSortBy as MovieSortByInternal[]}/>}
						tvShow={<TvShowFilterFormComponent {...switchCommonProps} initialFilter={initialFilter as TvShowFilterInternal} initialSortBy={initialSortBy as TvShowSortByInternal[]}/>}
						videogame={<VideogameFilterFormComponent {...switchCommonProps} initialFilter={initialFilter as VideogameFilterInternal} initialSortBy={initialSortBy as VideogameSortByInternal[]}/>}
					/>
				</View>
			</ModalComponent>
		);
	}
}

/**
 * MediaItemFilterModalComponent's input props
 */
export type MediaItemFilterModalComponentInput = {

	/**
	 * The linked category
	 */
	category: CategoryInternal;

	/**
	 * The initial filter values for the form inputs
	 */
	initialFilter: MediaItemFilterInternal;

	/**
	 * The initial sort values for the form inputs
	 */
	initialSortBy: MediaItemSortByInternal[];

	/**
	 * If the component should be displayed at this moment
	 */
	visible: boolean;
};

/**
 * MediaItemFilterModalComponent's output props
 */
export type MediaItemFilterModalComponentOutput = {

	/**
	 * Callback to submit the filter options
	 */
	submitFilter: (filter: MediaItemFilterInternal, sortBy: MediaItemSortByInternal[]) => void;
	
	/**
	 * Callback when the component requests to be closed
	 */
	close: () => void;
};

/**
 * MediaItemFilterModalComponent's props
 */
export type MediaItemFilterModalComponentProps = MediaItemFilterModalComponentInput & MediaItemFilterModalComponentOutput;
