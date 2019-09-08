import React, { Component, ReactNode } from 'react';
import { View } from 'react-native';
import { MediaItemFormContainer } from 'app/components/containers/media-item/details/form';
import { navigationService } from 'app/utilities/navigation-service';
import { styles } from 'app/components/presentational/media-item/details/screen/styles';
import { MediaItemDetailsHeaderContainer } from 'app/components/containers/media-item/details/header';
import { LoadingIndicatorComponent } from 'app/components/presentational/generic/loading-indicator';
import { NavigationScreenProps } from 'react-navigation';
import { MediaItemDetailsHeaderBackButtonContainer } from 'app/components/containers/media-item/details/header-back-button';
import { MediaItemDetailsHeaderSaveIconContainer } from 'app/components/containers/media-item/details/header-save-icon';

/**
 * Presentational component that contains the whole "media item details" screen, that works as the "add new media item", "update media item" and
 * "view media item data" sections
 */
export class MediaItemDetailsScreenComponent extends Component<MediaItemDetailsScreenComponentInput & MediaItemDetailsScreenComponentOutput> {
	
	/**
	 * @override
	 */
	public static readonly navigationOptions = (navigationScreenProps: NavigationScreenProps) => {
		return {
			headerTitle: <MediaItemDetailsHeaderContainer
				componentsLeft={<MediaItemDetailsHeaderBackButtonContainer navigation={navigationScreenProps.navigation} />}
				componentsRight={<MediaItemDetailsHeaderSaveIconContainer />}
			/>,
			headerLeft: null
		};
	};

	/**
	 * @override
	 */
	public componentDidUpdate(): void {

		if(this.props.wasSaved) {

			// When save is completed, go back to the list
			navigationService.back();
		}
	}

	/**
	 * @override
	 */
	public render(): ReactNode {
	
		if(this.props.wasSaved) {

			return null;
		}
		else {

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
}

/**
 * MediaItemDetailsScreenComponent's input props
 */
export type MediaItemDetailsScreenComponentInput = {

	/**
	 * Flag to tell if the component is currently waiting on an async operation. If true, shows the loading screen.
	 */
	isLoading: boolean;

	/**
	 * Flag to tell if the media item was successfully saved. If true, navigates back the stack.
	 */
	wasSaved: boolean;
}

/**
 * MediaItemDetailsScreenComponent's output props
 */
export type MediaItemDetailsScreenComponentOutput = {

}
