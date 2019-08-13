import React, { Component, ReactNode } from 'react';
import { Text, View } from 'react-native';
import { styles } from 'app/components/presentational/media-item/common/own-platform-icon/styles';
import { OwnPlatformInternal } from 'app/data/models/internal/own-platform';

/**
 * Presentational component to display an icon for the media item own platform
 */
export class MediaItemOwnPlatformIconComponent extends Component<MediaItemOwnPlatformIconComponentInput> {
	
	/**
	 * @override
	 */
	public render(): ReactNode {

		const {
			ownPlatform
		} = this.props;

		if(ownPlatform) {
		
			return (
				<View style={[ styles.circle, { backgroundColor: ownPlatform.color }]}>
					<Text style={styles.nameInitial}>
						{ownPlatform.name.charAt(0).toUpperCase()}
					</Text>
				</View>
			);
		}
		else {

			return (
				<View style={[ styles.circle, styles.circleNone ]}>
					<Text style={styles.nameInitial}>
						/
					</Text>
				</View>
			);
		}
	}
}

/**
 * MediaItemOwnPlatformIconComponent's input props
 */
export type MediaItemOwnPlatformIconComponentInput = {

	/**
	 * The platform to be displayed. If undefined, a default platform (none) is displayed
	 */
	ownPlatform?: OwnPlatformInternal;
};

