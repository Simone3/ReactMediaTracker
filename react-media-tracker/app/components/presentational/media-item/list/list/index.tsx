import React, { Component, ReactNode } from 'react';
import { FlatList, Text, View, Dimensions } from 'react-native';
import { MediaItemInternal } from 'app/data/models/internal/media-items/media-item';
import { MediaItemRowComponent } from 'app/components/presentational/media-item/list/row';
import { i18n } from 'app/utilities/i18n';
import { styles } from 'app/components/presentational/media-item/list/list/styles';
import { mediaItemLangPrefixFactory } from 'app/factories/misc-factories';
import { CategoryInternal } from 'app/data/models/internal/category';
import { MediaItemContextMenuContainer } from 'app/components/containers/media-item/list/context-menu';

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

		const prefix = mediaItemLangPrefixFactory.get(this.props.category);
		return <Text style={styles.emptyMessage}>{i18n.t(`${prefix}.list.empty`)}</Text>;
	}

	/**
	 * Helper method to render media items list
	 * @returns the node portion
	 */
	private renderList(): ReactNode {

		const {
			mediaItems,
			highlightMediaItem
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
	 * Callback to set a mediaItem as highlighted, e.g. to open its dialog menu
	 */
	highlightMediaItem: (mediaItem: MediaItemInternal) => void;
}
