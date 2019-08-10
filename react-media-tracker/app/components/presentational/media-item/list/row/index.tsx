import React, { Component, ReactNode } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { MediaItemInternal } from 'app/data/models/internal/media-items/media-item';
import { styles } from 'app/components/presentational/media-item/list/row/styles';

/**
 * Presentational component to display a media item row
 */
export class MediaItemRowComponent extends Component<MediaItemRowComponentInput & MediaItemRowComponentOutput> {
	
	/**
	 * @override
	 */
	public render(): ReactNode {

		const {
			mediaItem
		} = this.props;
		
		return (
			<TouchableWithoutFeedback onLongPress={this.props.showOptionsMenu}>
				<View style={styles.container}>
					<View style={styles.nameContainer}>
						<Text style={styles.name} numberOfLines={1}>
							{mediaItem.name}
						</Text>
					</View>
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

/**
 * MediaItemRowComponent's input props
 */
export type MediaItemRowComponentInput = {

	/**
	 * The mediaItem to be displayed
	 */
	mediaItem: MediaItemInternal;
};

/**
 * MediaItemRowComponent's output props
 */
export type MediaItemRowComponentOutput = {

	/**
	 * Callback to open the options context menu (with e.g. the edit button)
	 */
	showOptionsMenu: () => void;
};

