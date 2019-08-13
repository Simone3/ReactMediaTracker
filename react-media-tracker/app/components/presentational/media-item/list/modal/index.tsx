import React, { Component, ReactNode } from 'react';
import { MediaItemInternal } from 'app/data/models/internal/media-items/media-item';
import { ModalComponent } from 'app/components/presentational/generic/modal';
import { i18n } from 'app/utilities/i18n';
import { ButtonsListComponentButton, ButtonsListComponent } from 'app/components/presentational/generic/buttons-list';
import { navigationService } from 'app/utilities/navigation-service';
import { AppScreens } from 'app/utilities/screens';
import { mediaIconFactory, mediaItemStatusIconFactory } from 'app/factories/icon-factories';
import { mediaItemLangPrefixFactory } from 'app/factories/misc-factories';

/**
 * Presentational component to display a modal dialog with the media item options
 */
export class MediaItemModalComponent extends Component<MediaItemModalComponentInput & MediaItemModalComponentOutput> {
	
	/**
	 * @override
	 */
	public render(): ReactNode {

		const {
			mediaItem
		} = this.props;

		if(mediaItem) {

			const {
				close
			} = this.props;

			// All media items have edit and delete button
			const buttons: ButtonsListComponentButton[] = [
				this.getEditButton(mediaItem),
				this.getDeleteButton(mediaItem)
			];

			// Currently completed items have the "could redo this" (e.g. rewatch) button
			if(mediaItem.status === 'COMPLETE') {

				buttons.push(this.getMarkAsRedoButton(mediaItem));
			}
			
			// Currently non-active (either new or redo) items have the "I'm doing this" (e.g. watching) button
			if(mediaItem.status === 'REDO' || mediaItem.status === 'NEW') {

				buttons.push(this.getMarkAsActiveButton(mediaItem));
			}

			// Currently non-completed (active or not) items have the "I've done this" (e.g. watched) button
			if(mediaItem.status === 'REDO' || mediaItem.status === 'NEW' || mediaItem.status === 'ACTIVE') {

				buttons.push(this.getMarkAsCompleteButton(mediaItem));
			}

			return (
				<ModalComponent
					visible={true}
					onClose={close}
					horizontalPosition='center'
					verticalPosition='bottom'>
					<ButtonsListComponent
						title={mediaItem.name}
						titleIcon={mediaIconFactory.get(mediaItem.mediaType)}
						buttons={buttons}
					/>
				</ModalComponent>
			);
		}
		else {

			return null;
		}
	}

	/**
	 * The "Edit" button
	 * @param mediaItem the media item
	 * @returns the button
	 */
	private getEditButton(mediaItem: MediaItemInternal): ButtonsListComponentButton {

		const {
			edit,
			close
		} = this.props;

		const langPrefix = mediaItemLangPrefixFactory.get(mediaItem.mediaType);

		return {
			label: i18n.t(`${langPrefix}.list.edit`),
			icon: require('app/resources/images/ic_action_edit.png'),
			onClick: () => {

				edit(mediaItem);
				close();
				navigationService.navigate(AppScreens.MediaItemDetails);
			}
		};
	}

	/**
	 * The "Delete" button
	 * @param mediaItem the media item
	 * @returns the button
	 */
	private getDeleteButton(mediaItem: MediaItemInternal): ButtonsListComponentButton {

		const {
			delete: deleteCallback,
			close
		} = this.props;

		const langPrefix = mediaItemLangPrefixFactory.get(mediaItem.mediaType);

		return {
			label: i18n.t(`${langPrefix}.list.delete`),
			icon: require('app/resources/images/ic_action_delete.png'),
			onClick: () => {

				deleteCallback(mediaItem);
				close();
			}
		};
	}

	/**
	 * The "I'm watching/reading/... this" button
	 * @param mediaItem the media item
	 * @returns the button
	 */
	private getMarkAsActiveButton(mediaItem: MediaItemInternal): ButtonsListComponentButton {

		const {
			markAsActive,
			close
		} = this.props;

		const langPrefix = mediaItemLangPrefixFactory.get(mediaItem.mediaType);

		return {
			label: i18n.t(`${langPrefix}.list.markActive`),
			icon: mediaItemStatusIconFactory.get('ACTIVE', mediaItem.mediaType).source,
			onClick: () => {

				markAsActive(mediaItem);
				close();
			}
		};
	}

	/**
	 * The "I've read/played/... this" button
	 * @param mediaItem the media item
	 * @returns the button
	 */
	private getMarkAsCompleteButton(mediaItem: MediaItemInternal): ButtonsListComponentButton {

		const {
			markAsComplete,
			close
		} = this.props;

		const langPrefix = mediaItemLangPrefixFactory.get(mediaItem.mediaType);

		return {
			label: i18n.t(`${langPrefix}.list.markComplete`),
			icon: mediaItemStatusIconFactory.get('COMPLETE', mediaItem.mediaType).source,
			onClick: () => {

				markAsComplete(mediaItem);
				close();
			}
		};
	}

	/**
	 * The "I could rewatch/reread/... this" button
	 * @param mediaItem the media item
	 * @returns the button
	 */
	private getMarkAsRedoButton(mediaItem: MediaItemInternal): ButtonsListComponentButton {

		const {
			markAsRedo,
			close
		} = this.props;

		const langPrefix = mediaItemLangPrefixFactory.get(mediaItem.mediaType);

		return {
			label: i18n.t(`${langPrefix}.list.markRedo`),
			icon: mediaItemStatusIconFactory.get('REDO', mediaItem.mediaType).source,
			onClick: () => {

				markAsRedo(mediaItem);
				close();
			}
		};
	}
}

/**
 * MediaItemModalComponent's input props
 */
export type MediaItemModalComponentInput = {

	/**
	 * The media item linked with the modal. Undefined means no modal is displayed.
	 */
	mediaItem: MediaItemInternal | undefined;
};

/**
 * MediaItemModalComponent's output props
 */
export type MediaItemModalComponentOutput = {

	/**
	 * Callback to edit the media item
	 */
	edit: (mediaItem: MediaItemInternal) => void;
	
	/**
	 * Callback to delete the media item
	 */
	delete: (mediaItem: MediaItemInternal) => void;
	
	/**
	 * Callback to mark the media item as active (e.g. currently watching)
	 */
	markAsActive: (mediaItem: MediaItemInternal) => void;
	
	/**
	 * Callback to mark the media item as completed (e.g. played)
	 */
	markAsComplete: (mediaItem: MediaItemInternal) => void;
	
	/**
	 * Callback to mark the media item as redoing (e.g. rereading)
	 */
	markAsRedo: (mediaItem: MediaItemInternal) => void;

	/**
	 * Callback when the component requests to be closed
	 */
	close: () => void;
};

