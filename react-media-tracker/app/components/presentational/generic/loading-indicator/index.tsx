import { styles } from 'app/components/presentational/generic/loading-indicator/styles';
import React, { Component, ReactNode } from 'react';
import { ActivityIndicator, View, Dimensions } from 'react-native';
import { config } from 'app/config/config';
import { ModalComponent } from 'app/components/presentational/generic/modal';

/**
 * Presentational component to display a simple loading icon
 */
export class LoadingIndicatorComponent extends Component<ModalComponentInput> {
	
	/**
	 * @override
	 */
	public render(): ReactNode {

		return (
			<ModalComponent
				visible={this.props.visible}
				onClose={() => {
					// Do nothing here (loading modal cannot be closed by clicking on the grayed-out area)
				}}>
				<View style={[ styles.container, { height: Dimensions.get('window').height }]}>
					<ActivityIndicator style={styles.indicator} size='large' color={config.ui.colors.colorAccent} />
				</View>
			</ModalComponent>
		);
	}
}

/**
 * LoadingIndicatorComponent's input props
 */
export type ModalComponentInput = {

	/**
	 * Loading dialog visibility
	 */
	visible: boolean;
}
