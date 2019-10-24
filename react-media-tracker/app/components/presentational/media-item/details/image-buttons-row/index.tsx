import React, { Component, ReactNode } from 'react';
import { View, Image, TouchableOpacity, ImageRequireSource, Linking } from 'react-native';
import { styles } from 'app/components/presentational/media-item/details/image-buttons-row/styles';
import { MediaItemInternal } from 'app/data/models/internal/media-items/media-item';
import { images } from 'app/utilities/images';
import { config } from 'app/config/config';
import { i18n } from 'app/utilities/i18n';
import { ConfirmAlert } from 'app/components/presentational/generic/confirm-alert';

/**
 * Presentational component to diaplay the media item image with the search/download/etc. buttons
 */
export class MediaItemImageButtonsRowComponent extends Component<MediaItemImageButtonsRowComponentProps> {
	
	/**
	 * @override
	 */
	public render(): ReactNode {
	
		const {
			mediaItem
		} = this.props;

		// Show the component when editing (media item has an ID) or when adding and we a catalog ID
		const visible = mediaItem.id || mediaItem.catalogId;
		if(visible) {

			return (
				<View style={styles.container}>
					<View style={styles.imageContainer}>
						{this.renderImage(mediaItem.imageUrl)}
					</View>
					{this.renderButtons(mediaItem)}
				</View>
			);
		}
		else {

			return null;
		}
	}

	/**
	 * Helper to render the image
	 * @param url the image URL, if any
	 * @returns the component
	 */
	private renderImage(url: string | undefined): ReactNode {
		
		if(url) {

			return (
				<Image
					style={styles.image}
					source={{
						uri: url
					}}
					defaultSource={images.defaultMediaItemImage()}
				/>
			);
		}
		else {

			return (
				<Image
					style={styles.image}
					source={images.defaultMediaItemImage()}
				/>
			);
		}
	}

	/**
	 * Helper to render the buttons
	 * @param mediaItem the media item
	 * @returns the component
	 */
	private renderButtons(mediaItem: MediaItemInternal): ReactNode {
		
		return (
			<View style={styles.buttonsContainer}>
				{this.renderButton(images.googleIcon(), Boolean(mediaItem.name), this.onGoogleClick.bind(this))}
				{this.renderButton(images.wikipediaIcon(), Boolean(mediaItem.name), this.onWikipediaClick.bind(this))}
				{this.renderButton(images.downloadIcon(), Boolean(mediaItem.catalogId), this.onDownloadClick.bind(this))}
			</View>
		);
	}

	/**
	 * Helper to render a button
	 * @param icon the icon
	 * @param enabled the enabled status
	 * @param onClick the click callback
	 * @returns the component
	 */
	private renderButton(icon: ImageRequireSource, enabled: boolean, onClick: () => void): ReactNode {
		
		return (
			<TouchableOpacity
				onPress={onClick}
				disabled={!enabled}>
				<Image
					style={enabled ? styles.buttonIcon : [ styles.buttonIcon, styles.buttonIconDisabled ]}
					source={icon}
				/>
			</TouchableOpacity>
		);
	}

	/**
	 * Callback for Google icon click
	 */
	private onGoogleClick(): void {

		Linking.openURL(config.external.googleSearch(this.props.mediaItem.name));
	}

	/**
	 * Callback for Wikipedia icon click
	 */
	private onWikipediaClick(): void {

		Linking.openURL(config.external.wikipediaSearch(this.props.mediaItem.name));
	}

	/**
	 * Callback for download icon click
	 */
	private onDownloadClick(): void {
		
		const {
			onReloadCatalog,
			mediaItem
		} = this.props;

		const catalogId = mediaItem.catalogId;
		if(catalogId) {

			const title = i18n.t(`mediaItem.common.alert.reloadCatalog.title`);
			const message = i18n.t('mediaItem.common.alert.reloadCatalog.message');
			
			ConfirmAlert.alert(title, message, () => {
				
				onReloadCatalog(catalogId);
			});
		}
	}
}

/**
 * MediaItemImageButtonsRowComponent's input props
 */
export type MediaItemImageButtonsRowComponentInput = {

	/**
	 * The source media item image URL
	 */
	mediaItem: MediaItemInternal;
}

/**
 * MediaItemImageButtonsRowComponent's output props
 */
export type MediaItemImageButtonsRowComponentOutput = {

	/**
	 * The callback to reload the catalog details
	 */
	onReloadCatalog: (catalogId: string) => void;
}

/**
 * MediaItemImageButtonsRowComponent's props
 */
export type MediaItemImageButtonsRowComponentProps = MediaItemImageButtonsRowComponentInput & MediaItemImageButtonsRowComponentOutput;
