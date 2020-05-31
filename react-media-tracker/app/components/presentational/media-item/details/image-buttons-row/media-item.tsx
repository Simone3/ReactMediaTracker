import React, { Component, ReactNode } from 'react';
import { View, Image, TouchableOpacity, Linking } from 'react-native';
import { styles } from 'app/components/presentational/media-item/details/image-buttons-row/styles';
import { images } from 'app/utilities/images';
import { config } from 'app/config/config';
import { i18n } from 'app/utilities/i18n';
import { ConfirmAlert } from 'app/components/presentational/generic/confirm-alert';
import { MediaItemImageButtonsRowComponentProps } from 'app/components/presentational/media-item/details/image-buttons-row';
import { ModalComponent } from 'app/components/presentational/generic/modal';
import { ButtonsListComponent, ButtonsListComponentButton } from 'app/components/presentational/generic/buttons-list';

/**
 * Presentational component to display the image with the action buttons for a generic media item
 */
export class CommonMediaItemImageButtonsRowComponent extends Component<CommonMediaItemImageButtonsRowComponentProps, CommonMediaItemImageButtonsRowComponentState> {
	
	public state: CommonMediaItemImageButtonsRowComponentState = {
		showMoreModalOpen: false
	};

	/**
	 * @override
	 */
	public render(): ReactNode {
	
		const {
			mediaItem
		} = this.props;

		// Show the component when editing (= media item has an ID) or when a catalog item has been loaded (= media item has a catalog ID)
		const visible = mediaItem.id || mediaItem.catalogId;
		if(visible) {

			return (
				<View style={styles.container}>
					<View style={styles.imageContainer}>
						{this.renderImage(mediaItem.imageUrl)}
					</View>
					{this.renderButtons()}
					{this.renderShowMoreModal()}
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
					defaultSource={__DEV__ ? undefined : images.defaultMediaItemImage()}
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
	 * @returns the component
	 */
	private renderButtons(): ReactNode {
		
		const buttons = this.getButtons();

		if(buttons.length <= 3) {

			return (
				<View style={styles.buttonsContainer}>
					{buttons.map((button, i) => {
						return this.renderButton(button, i);
					})}
				</View>
			);
		}
		else {

			const firstTwoButtons = buttons.slice(0, 2);

			return (
				<View style={styles.buttonsContainer}>
					{firstTwoButtons.map((button, i) => {
						return this.renderButton(button, i);
					})}
					{this.renderButton(this.getShowMoreButton(), -1)}
				</View>
			);
		}
	}

	/**
	 * Helper to render a button
	 * @param button the button data
	 * @param key the button key
	 * @returns the component
	 */
	private renderButton(button: ButtonsListComponentButton, key: number): ReactNode {
		
		return (
			<TouchableOpacity
				onPress={button.onClick}
				disabled={button.disabled}
				key={`image-button-${key}`}>
				<Image
					style={button.disabled ? [ styles.buttonIcon, styles.buttonIconDisabled ] : styles.buttonIcon }
					source={button.icon}
				/>
			</TouchableOpacity>
		);
	}

	/**
	 * Defines all buttons to be displayed next to the image
	 * @returns the buttons list
	 */
	private getButtons(): ButtonsListComponentButton[] {

		const commonLinkButtons = [
			this.getGoogleButton(),
			this.getWikipediaButton()
		];

		const commonExtraButtons = [
			this.getDownloadCatalogButton()
		];

		const specificButtons = this.props.specificButtons;

		return commonLinkButtons.concat(specificButtons ? specificButtons : []).concat(commonExtraButtons);
	}

	/**
	 * Defines the Google button
	 * @returns the button specification
	 */
	protected getGoogleButton(): ButtonsListComponentButton {

		const {
			mediaItem
		} = this.props;

		return {
			icon: images.googleIcon(),
			label: i18n.t(`mediaItem.details.buttons.google`),
			disabled: !mediaItem.name,
			onClick: this.onGoogleClick.bind(this)
		};
	}

	/**
	 * Defines the Wikipedia button
	 * @returns the button specification
	 */
	protected getWikipediaButton(): ButtonsListComponentButton {

		const {
			mediaItem
		} = this.props;
		
		return {
			icon: images.wikipediaIcon(),
			label: i18n.t(`mediaItem.details.buttons.wikipedia`),
			disabled: !mediaItem.name,
			onClick: this.onWikipediaClick.bind(this)
		};
	}

	/**
	 * Defines the Download Catalog button
	 * @returns the button specification
	 */
	protected getDownloadCatalogButton(): ButtonsListComponentButton {

		const {
			mediaItem
		} = this.props;
		
		return {
			icon: images.downloadIcon(),
			label: i18n.t(`mediaItem.details.buttons.downloadCatalog`),
			disabled: !mediaItem.catalogId,
			onClick: this.onCatalogDownloadClick.bind(this)
		};
	}

	/**
	 * Defines the button to open the full list of buttons
	 * @returns the button specification
	 */
	protected getShowMoreButton(): ButtonsListComponentButton {

		return {
			icon: images.more(),
			label: '',
			disabled: false,
			onClick: this.onShowMoreClick.bind(this)
		};
	}

	/**
	 * Callback for Google icon click
	 */
	private onGoogleClick(): void {

		const search = encodeURIComponent(this.props.mediaItem.name);
		Linking.openURL(config.external.googleSearch(search));
	}

	/**
	 * Callback for Wikipedia icon click
	 */
	private onWikipediaClick(): void {

		const search = encodeURIComponent(this.props.mediaItem.name);
		Linking.openURL(config.external.wikipediaSearch(search));
	}

	/**
	 * Callback for download icon click
	 */
	private onCatalogDownloadClick(): void {
		
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

	/**
	 * Callback for Show More icon click
	 */
	private onShowMoreClick(): void {

		this.setState({ showMoreModalOpen: !this.state.showMoreModalOpen });
	}

	/**
	 * Renders the Show More buttons action
	 * @returns the modal
	 */
	private renderShowMoreModal(): ReactNode {

		// Remap button click callbacks so that the modal is closed after the action
		const buttons = this.getButtons().map((button) => {

			const actualOnClick = button.onClick;
			button.onClick = () => {

				actualOnClick();
				this.onShowMoreClick();
			};
			return button;
		});

		return (
			<ModalComponent
				visible={this.state.showMoreModalOpen}
				onClose={this.onShowMoreClick.bind(this)}
				horizontalPosition='center'
				verticalPosition='bottom'>
				<ButtonsListComponent
					title={i18n.t(`mediaItem.details.buttons.modalTitle`)}
					titleIcon={images.settings()}
					buttons={buttons}
				/>
			</ModalComponent>
		);
	}
}

/**
 * CommonMediaItemImageButtonsRowComponent's props
 */
export type CommonMediaItemImageButtonsRowComponentProps = MediaItemImageButtonsRowComponentProps & {
	
	/**
	 * The additional buttons to be displayed beside the image
	 */
	specificButtons?: ButtonsListComponentButton[];
};

/**
 * CommonMediaItemImageButtonsRowComponent's state
 */
type CommonMediaItemImageButtonsRowComponentState = {

	/**
	 * If the Show More modal is currently open
	 */
	showMoreModalOpen: boolean;
}
