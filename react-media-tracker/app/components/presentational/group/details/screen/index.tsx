import React, { Component, ReactNode } from 'react';
import { View } from 'react-native';
import { GroupFormContainer } from 'app/components/containers/group/details/form';
import { navigationService } from 'app/utilities/navigation-service';
import { styles } from 'app/components/presentational/group/details/screen/styles';
import { GroupDetailsHeaderContainer } from 'app/components/containers/group/details/header';
import { LoadingIndicatorComponent } from 'app/components/presentational/generic/loading-indicator';
import { GroupDetailsHeaderBackButtonContainer } from 'app/components/containers/group/details/header-back-button';
import { GroupDetailsHeaderSaveIconContainer } from 'app/components/containers/group/details/header-save-icon';
import { ScreenConfig, ScreenProps } from 'app/components/containers/generic/navigation';

/**
 * Presentational component that contains the whole "group details" screen, that works as the "add new group", "update group" and
 * "view group data" sections
 */
export class GroupDetailsScreenComponent extends Component<GroupDetailsScreenComponentInput & GroupDetailsScreenComponentOutput> {
	
	/**
	 * @override
	 */
	public static readonly navigationOptions = (navigationScreenProps: ScreenProps): ScreenConfig => {
		return {
			headerTitle: <GroupDetailsHeaderContainer
				componentsLeft={<GroupDetailsHeaderBackButtonContainer navigation={navigationScreenProps.navigation} />}
				componentsRight={<GroupDetailsHeaderSaveIconContainer />}
			/>
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
					<GroupFormContainer/>
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
 * GroupDetailsScreenComponent's input props
 */
export type GroupDetailsScreenComponentInput = {

	/**
	 * Flag to tell if the component is currently waiting on an async operation. If true, shows the loading screen.
	 */
	isLoading: boolean;

	/**
	 * Flag to tell if the group was successfully saved. If true, navigates back the stack.
	 */
	wasSaved: boolean;
}

/**
 * GroupDetailsScreenComponent's output props
 */
export type GroupDetailsScreenComponentOutput = {

}
