import React, { Component, ReactNode } from 'react';
import { View } from 'react-native';
import { AppScreens } from 'app/utilities/screens';
import { MediaItemsListContainer } from 'app/components/containers/media-item/list/list';
import { MediaItemInternal } from 'app/data/models/internal/media-items/media-item';
import { navigationService } from 'app/utilities/navigation-service';
import { styles } from 'app/components/presentational/media-item/list/screen/styles';
import { FABComponent } from 'app/components/presentational/generic/floating-action-button';
import { LoadingIndicatorComponent } from 'app/components/presentational/generic/loading-indicator';
import { MediaItemsListHeaderTitleContainer } from 'app/components/containers/media-item/list/header-title';

/**
 * Presentational component that contains the whole "media items list" screen, that lists all media items of the current category
 */
export class MediaItemsListScreenComponent extends Component<MediaItemsListScreenComponentInput & MediaItemsListScreenComponentOutput> {
	
	/**
	 * @override
	 */
	public static readonly navigationOptions = () => {
		return {
			headerTitle: <MediaItemsListHeaderTitleContainer/>
		};
	};

	/**
	 * @override
	 */
	public componentWillMount(): void {

		// Load first list of media items
		this.props.fetchMediaItems();
	}

	/**
	 * @override
	 */
	public componentDidUpdate(): void {

		if(this.props.requiresReload) {

			// Reload media items if the current list was marked as invalid
			this.props.fetchMediaItems();
		}
	}

	/**
	 * @override
	 */
	public render(): ReactNode {

		return (
			<View style={styles.container}>
				<MediaItemsListContainer/>
				<FABComponent
					text={'+'}
					onPress={() => {
						this.props.loadNewMediaItemDetails();
						navigationService.navigate(AppScreens.MediaItemDetails);
					}}
				/>
				<LoadingIndicatorComponent
					visible={this.props.isLoading}
					fullScreen={false}
				/>
			</View>
		);
	}
}

/**
 * MediaItemsListScreenComponent's input props
 */
export type MediaItemsListScreenComponentInput = {
	
	/**
	 * Flag to tell if the component is currently waiting on an async operation. If true, shows the loading screen.
	 */
	isLoading: boolean;

	/**
	 * Flag to tell if the media items list was invalidated. If true, requests a new reload.
	 */
	requiresReload: boolean;
}

/**
 * MediaItemsListScreenComponent's output props
 */
export type MediaItemsListScreenComponentOutput = {

	/**
	 * Callback to request the media items list (re)load
	 */
	fetchMediaItems: () => void;

	/**
	 * Callback to load the details of a new media item
	 */
	loadNewMediaItemDetails: () => void;

	/**
	 * Callback to load the details of an existing media item
	 * @param mediaItem the existing media item
	 */
	loadMediaItemDetails: (mediaItem: MediaItemInternal) => void;
}
