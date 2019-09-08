import React, { Component, ReactNode } from 'react';
import { FlatList, Text, View, Dimensions } from 'react-native';
import { MediaItemInternal } from 'app/data/models/internal/media-items/media-item';
import { MediaItemRowComponent } from 'app/components/presentational/media-item/list/row';
import { i18n } from 'app/utilities/i18n';
import { styles } from 'app/components/presentational/media-item/list/list/styles';
import { CategoryInternal } from 'app/data/models/internal/category';
import { MediaItemContextMenuContainer } from 'app/components/containers/media-item/list/context-menu';
import { navigationService } from 'app/utilities/navigation-service';
import { AppScreens } from 'app/utilities/screens';

/**
 * Presentational component to display the list of user media items
 */
export class MediaItemsListComponent extends Component<MediaItemsListComponentInput & MediaItemsListComponentOutput> {
	
	/**
	 * @override
	 */
	public render(): ReactNode {

		return (
			<View>
				{this.renderMediaItems()}
			</View>
		);
	}

	/**
	 * Helper method to render the main list
	 * @returns the node portion
	 */
	private renderMediaItems(): ReactNode {

		if(this.props.mediaItems.length > 0) {

			return this.renderList();
		}
		else {

			return this.renderNone();
		}
	}

	/**
	 * Helper method to render the no media items message
	 * @returns the node portion
	 */
	private renderNone(): ReactNode {

		return <Text style={styles.emptyMessage}>{i18n.t(`mediaItem.list.empty.${this.props.category.mediaType}`)}</Text>;
	}

	/**
	 * Helper method to render media items list
	 * @returns the node portion
	 */
	private renderList(): ReactNode {

		const {
			mediaItems,
			highlightMediaItem,
			selectMediaItem
		} = this.props;

		return (
			<View>
				<FlatList
					style={[ styles.list, { width: Dimensions.get('window').width }]}
					data={mediaItems}
					renderItem={({ item }) => {
						return (
							<MediaItemRowComponent
								mediaItem={item}
								open={() => {
									selectMediaItem(item);
									navigationService.navigate(AppScreens.MediaItemDetails);
								}}
								showOptionsMenu={() => {
									highlightMediaItem(item);
								}}>
							</MediaItemRowComponent>
						);
					}}
					keyExtractor={(item) => {
						return item.id;
					}}
				/>
				<MediaItemContextMenuContainer />
			</View>
		);
	}
}

/**
 * MediaItemsListComponent's input props
 */
export type MediaItemsListComponentInput = {

	/**
	 * The linked category
	 */
	category: CategoryInternal;

	/**
	 * The media items list to be displayed
	 */
	mediaItems: MediaItemInternal[];
}

/**
 * MediaItemsListComponent's output props
 */
export type MediaItemsListComponentOutput = {

	/**
	 * Callback to select a media item, e.g. to open its details
	 */
	selectMediaItem: (mediaItem: MediaItemInternal) => void;

	/**
	 * Callback to set a mediaItem as highlighted, e.g. to open its dialog menu
	 */
	highlightMediaItem: (mediaItem: MediaItemInternal) => void;
}
