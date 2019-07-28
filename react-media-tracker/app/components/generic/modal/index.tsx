import { styles } from 'app/components/generic/modal/styles';
import React, { Component, ReactNode } from 'react';
import { Modal, TouchableOpacity, View, TouchableWithoutFeedback } from 'react-native';

/**
 * Presentational component to display a modal dialog
 */
export class ModalComponent extends Component<ModalComponentInput & ModalComponentOutput> {
	
	/**
	 * @override
	 */
	public render(): ReactNode {

		return (
			<Modal
				animationType='fade'
				transparent={true}
				visible={this.props.visible}
				onRequestClose={() => {
					this.props.onClose();
				}}>
				<TouchableOpacity
					style={styles.container}
					activeOpacity={1}
					onPressOut={() => {
						this.props.onClose();
					}}>
					<TouchableWithoutFeedback>
						<View style={styles.contentContainer}>
							{this.props.children}
						</View>
					</TouchableWithoutFeedback>
				</TouchableOpacity>
			</Modal>
		);
	}
}

/**
 * ModalComponent's input props
 */
export type ModalComponentInput = {

	/**
	 * Modal dialog visibility
	 */
	visible: boolean;
}

/**
 * ModalComponent's output props
 */
export type ModalComponentOutput = {

	/**
	 * Called when the modal requests itself to be closed, e.g. when the user clicks outside the content.
	 * It's up to the parents to decide whether to trigger the visibility change or not (via "visible" prop).
	 */
	onClose: () => void;
}
