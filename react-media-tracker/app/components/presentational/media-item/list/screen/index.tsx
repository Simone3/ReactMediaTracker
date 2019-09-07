import React, { Component, ReactNode } from 'react';
import { View } from 'react-native';
import { AppScreens } from 'app/utilities/screens';
import { MediaItemsListContainer } from 'app/components/containers/media-item/list/list';
import { MediaItemInternal } from 'app/data/models/internal/media-items/media-item';
import { navigationService } from 'app/utilities/navigation-service';
import { styles } from 'app/components/presentational/media-item/list/screen/styles';
import { FABComponent } from 'app/components/presentational/generic/floating-action-button';
import { LoadingIndicatorComponent } from 'app/components/presentational/generic/loading-indicator';
import { MediaItemsListHeaderContainer } from 'app/components/containers/media-item/list/header';
import { MediaItemsListHeaderSearchIconContainer } from 'app/components/containers/media-item/list/header-search-icon';
import { MediaItemsListHeaderFilterIconContainer } from 'app/components/containers/media-item/list/header-filter-icon';
import { MediaItemFilterModalContainer } from 'app/components/containers/media-item/list/filter-modal';
import { images } from 'app/utilities/images';

/**
 * Presentational component that contains the whole "media items list" screen, that lists all media items of the current category
 */
export class MediaItemsListScreenComponent extends Component<MediaItemsListScreenComponentInput & MediaItemsListScreenComponentOutput> {
	
	/**
	 * @override
	 */
	public static readonly navigationOptions = () => {
		return {
			headerTitle: <MediaItemsListHeaderContainer
				componentsRight={[
					<MediaItemsListHeaderFilterIconContainer
						key='herader-filter-icon'
						source={images.filterButton()}
						clickStatus='ENABLED'
					/>,
					<MediaItemsListHeaderSearchIconContainer
						key='herader-search-icon'
						source={images.searchButton()}
						clickStatus='ENABLED'
					/>
				]}
			/>,
			headerLeft: null
		};
	};

	/**
	 * @override
	 */
	public componentWillMount(): void {

		this.requestFetchIfRequired();
	}

	/**
	 * @override
	 */
	public componentDidUpdate(): void {

		this.requestFetchIfRequired();
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
				<MediaItemFilterModalContainer />
				<LoadingIndicatorComponent
					visible={this.props.isLoading}
					fullScreen={false}
				/>
			</View>
		);
	}

	/**
	 * Helper to invoke the fetch callback if the input fetch flag is true
	 */
	private requestFetchIfRequired(): void {
		
		if(this.props.requiresFetch) {

			this.props.fetchMediaItems();
		}
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
	 * Flag to tell if the categories list requires a fetch. If so, on startup or on update the component will invoke the fetch callback.
	 */
	requiresFetch: boolean;
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
