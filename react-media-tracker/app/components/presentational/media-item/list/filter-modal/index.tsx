import React, { Component, ReactNode } from 'react';
import { Text, Button, View } from 'react-native';
import { CategoryInternal } from 'app/data/models/internal/category';
import { MediaItemFilterInternal, MediaItemSortByInternal } from 'app/data/models/internal/media-items/media-item';
import { MovieFilterInternal, MovieSortByInternal } from 'app/data/models/internal/media-items/movie';
import { ModalComponent } from 'app/components/presentational/generic/modal';

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
			submitFilter,
			visible
		} = this.props;

		return (
			<ModalComponent
				visible={visible}
				onClose={close}
				horizontalPosition='center'
				verticalPosition='center'>
				<View>
					<Text>This is the modal</Text>
					<Button
						title='Test'
						onPress={() => {
							
							const tempMovieFilter: MovieFilterInternal = {
								status: 'COMPLETE',
								importanceLevels: [ 'IMPORTANT' ]
							};

							const tempMovieSort: MovieSortByInternal[] = [{
								field: 'IMPORTANCE',
								ascending: true
							}];

							submitFilter(tempMovieFilter, tempMovieSort);
						}}
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
