import React, { Component, ReactNode } from 'react';
import { View } from 'react-native';
import { MediaItemInternal } from 'app/data/models/internal/media-items/media-item';
import { styles } from 'app/components/presentational/media-item/list/row-icons/styles';
import { ColoredImage } from 'app/components/presentational/generic/colored-image';
import { images } from 'app/utilities/images';

/**
 * Presentational component to display the set of secondary icons portion of the list row
 */
export class MediaItemRowIconsComponent extends Component<MediaItemRowIconsComponentInput> {
	
	/**
	 * @override
	 */
	public render(): ReactNode {

		const {
			mediaItem
		} = this.props;

		return (
			<View style={styles.secondaryIconsContainer}>
				<ColoredImage
					style={styles.statusIcon}
					{...images.mediaItemStatus(mediaItem.status, mediaItem.mediaType)}
				/>
				<ColoredImage
					style={styles.importanceIcon}
					{...images.mediaItemImportance(mediaItem.importance)}
				/>
			</View>
		);
	}
}

/**
 * MediaItemRowIconsComponent's input props
 */
export type MediaItemRowIconsComponentInput = {
	
	/**
	 * The media item to be displayed
	 */
	mediaItem: MediaItemInternal;
};

