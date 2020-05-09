import React, { Component, ReactNode } from 'react';
import { CommonMediaItemImageButtonsRowComponent } from 'app/components/presentational/media-item/details/image-buttons-row/media-item';
import { MediaItemImageButtonsRowComponentProps } from 'app/components/presentational/media-item/details/image-buttons-row';
import { ButtonsListComponentButton } from 'app/components/presentational/generic/buttons-list';
import { images } from 'app/utilities/images';
import { i18n } from 'app/utilities/i18n';
import { Linking } from 'react-native';
import { config } from 'app/config/config';

/**
 * Presentational component to display the image with the action buttons for a book
 */
export class TvShowImageButtonsRowComponent extends Component<MediaItemImageButtonsRowComponentProps> {
	
	/**
	 * @override
	 */
	public render(): ReactNode {
	
		return (
			<CommonMediaItemImageButtonsRowComponent
				{...this.props}
				specificButtons = {[
					this.getJustWatchButton()
				]}
			/>
		);
	}

	/**
	 * Defines the Just Watch button
	 * @returns the button specification
	 */
	private getJustWatchButton(): ButtonsListComponentButton {

		const {
			mediaItem
		} = this.props;

		return {
			icon: images.justWatchIcon(),
			label: i18n.t(`mediaItem.details.buttons.justWatch`),
			disabled: !mediaItem.name,
			onClick: this.onJustWatchClick.bind(this)
		};
	}

	/**
	 * Callback for Just Watch icon click
	 */
	private onJustWatchClick(): void {

		const search = encodeURIComponent(this.props.mediaItem.name);
		Linking.openURL(config.external.justWatchSearch(search));
	}
}
