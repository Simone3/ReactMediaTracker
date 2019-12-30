import React, { Component, ReactNode } from 'react';
import { View } from 'react-native';
import { MediaItemFormContainer } from 'app/components/containers/media-item/details/form';
import { styles } from 'app/components/presentational/media-item/details/screen/styles';
import { MediaItemDetailsHeaderContainer } from 'app/components/containers/media-item/details/header';
import { LoadingIndicatorComponent } from 'app/components/presentational/generic/loading-indicator';
import { MediaItemDetailsHeaderBackButtonContainer } from 'app/components/containers/media-item/details/header-back-button';
import { MediaItemDetailsHeaderSaveIconContainer } from 'app/components/containers/media-item/details/header-save-icon';
import { ScreenProps } from 'app/components/containers/generic/navigation';
import { NavigationStackOptions } from 'react-navigation-stack';

/**
 * Presentational component that contains the whole "media item details" screen, that works as the "add new media item", "update media item" and
 * "view media item data" sections
 */
export class MediaItemDetailsScreenComponent extends Component<MediaItemDetailsScreenComponentInput & MediaItemDetailsScreenComponentOutput> {
	
	/**
	 * @override
	 */
	public static readonly navigationOptions = (navigationScreenProps: ScreenProps): NavigationStackOptions => {
		return {
			headerTitle: <MediaItemDetailsHeaderContainer
				componentsLeft={<MediaItemDetailsHeaderBackButtonContainer navigation={navigationScreenProps.navigation} />}
				componentsRight={<MediaItemDetailsHeaderSaveIconContainer />}
			/>
		};
	};

	/**
	 * @override
	 */
	public render(): ReactNode {
	
		return (
			<View style={styles.container}>
				<MediaItemFormContainer/>
				<LoadingIndicatorComponent
					visible={this.props.isLoading}
					fullScreen={true}
				/>
			</View>
		);
	}
}

/**
 * MediaItemDetailsScreenComponent's input props
 */
export type MediaItemDetailsScreenComponentInput = {

	/**
	 * Flag to tell if the component is currently waiting on an async operation. If true, shows the loading screen.
	 */
	isLoading: boolean;
}

/**
 * MediaItemDetailsScreenComponent's output props
 */
export type MediaItemDetailsScreenComponentOutput = {

}
