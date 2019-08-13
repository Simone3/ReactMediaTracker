import React, { Component, ReactNode } from 'react';
import { Text, View } from 'react-native';
import { MediaItemInternal } from 'app/data/models/internal/media-items/media-item';
import { styles } from 'app/components/presentational/media-item/list/row-data/styles';
import { MovieInternal } from 'app/data/models/internal/media-items/movie';
import { i18n } from 'app/utilities/i18n';
import { mediaItemDefinitionsControllerFactory, mediaItemLangPrefixFactory } from 'app/factories/media-item';

/**
 * Presentational component to display the textual data portion of the list row
 */
export class MediaItemRowDataComponent extends Component<MediaItemRowDataComponentInput> {
	
	/**
	 * @override
	 */
	public render(): ReactNode {

		const {
			mediaItem
		} = this.props;

		const movie: MovieInternal = mediaItem as MovieInternal;

		return (
			<View style={styles.dataContainer}>
				{this.renderFirstRow(movie)}
				{this.renderSecondRow(movie)}
				{this.renderThirdRow(movie)}
			</View>
		);
	}

	/**
	 * Renders the first row
	 * @param mediaItem the media item
	 * @returns the component
	 */
	private renderFirstRow(mediaItem: MediaItemInternal): ReactNode {

		let groupData = '';
		if(mediaItem.group) {

			const group = mediaItem.group;
			groupData = ` [${i18n.t(`mediaItem.list.group`, { order: group.orderInGroup, groupName: group.groupData.name })}]`;
		}

		return (
			<Text
				style={styles.firstRow}
				numberOfLines={1}>
				{mediaItem.name + groupData}
			</Text>
		);
	}

	/**
	 * Renders the second row
	 * @param mediaItem the media item
	 * @returns the component
	 */
	private renderSecondRow(mediaItem: MediaItemInternal): ReactNode {

		const mediaType = mediaItem.mediaType;

		const definitionsController = mediaItemDefinitionsControllerFactory.get(mediaType);
		const duration = definitionsController.getDurationValue(mediaItem);
		const creators = definitionsController.getCreatorNames(mediaItem);

		const values: string[] = [];

		if(mediaItem.releaseDate) {

			values.push(String(mediaItem.releaseDate.getFullYear()));
		}

		if(duration) {

			const langPrefix = mediaItemLangPrefixFactory.get(mediaType);

			values.push(i18n.t(`${langPrefix}.list.duration`, { duration: duration }));
		}

		if(creators && creators.length > 0) {

			values.push(creators.join(', '));
		}

		if(values.length > 0) {

			return (
				<Text
					style={styles.secondRow}
					numberOfLines={1}>
					{values.join(' • ')}
				</Text>
			);
		}
		else {
			
			return null;
		}
	}

	/**
	 * Renders the third row
	 * @param mediaItem the media item
	 * @returns the component
	 */
	private renderThirdRow(mediaItem: MediaItemInternal): ReactNode {

		const values: string[] = [];

		if(mediaItem.genres && mediaItem.genres.length > 0) {

			values.push(mediaItem.genres.join(', '));
		}

		if(values.length > 0) {

			return (
				<Text
					style={styles.thirdRow}
					numberOfLines={1}>
					{values.join(' • ')}
				</Text>
			);
		}
		else {
			
			return null;
		}
	}
}

/**
 * MediaItemRowDataComponent's input props
 */
export type MediaItemRowDataComponentInput = {
	
	/**
	 * The media item to be displayed
	 */
	mediaItem: MediaItemInternal;
};
