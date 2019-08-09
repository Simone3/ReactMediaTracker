import { styles } from 'app/components/presentational/generic/modal/styles';
import React, { Component, ReactNode } from 'react';
import { Modal, TouchableOpacity, View, TouchableWithoutFeedback, StyleProp, ViewStyle } from 'react-native';

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
					style={[ styles.container, this.getContainerPositionStyle() ] }
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

	/**
	 * Helper to get the style for the modal position
	 * @returns the view style
	 */
	private getContainerPositionStyle(): StyleProp<ViewStyle> {

		const hp = this.props.horizontalPosition;
		const vp = this.props.verticalPosition;
		
		let alignItems: 'center' | 'flex-start' | 'flex-end';
		if(!hp || hp === 'center') {
			alignItems = 'center';
		}
		else if(hp === 'left') {
			alignItems = 'flex-start';
		}
		else {
			alignItems = 'flex-end';
		}

		let justifyContent: 'center' | 'flex-start' | 'flex-end';
		if(!vp || vp === 'center') {
			justifyContent = 'center';
		}
		else if(vp === 'top') {
			justifyContent = 'flex-start';
		}
		else {
			justifyContent = 'flex-end';
		}

		return {
			alignItems: alignItems,
			justifyContent: justifyContent
		};
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

	/**
	 * Horizontal position of the modal
	 */
	horizontalPosition?: 'center' | 'left' | 'right';

	/**
	 * Vertical position of the modal
	 */
	verticalPosition?: 'center' | 'top' | 'bottom';
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
