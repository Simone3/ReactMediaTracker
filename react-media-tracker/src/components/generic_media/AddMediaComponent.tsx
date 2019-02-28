import React, {Component, ReactNode} from 'react';
import { Button } from 'react-native';
import { MediaItem } from '../../model';

/**
 * Presentational component to add a new media item
 */
export class AddMediaComponent extends Component<AddMediaComponentProps> {

	render(): ReactNode {

		return (
			<Button
				onPress={this.onAddPress.bind(this)}
				title="Add Media Item"
			/>
		);
	}

	/**
	 * Callback for the confirm button click
	 */
	private onAddPress(): void {

		let newMediaItem: MediaItem = new MediaItem();
		newMediaItem.name = this.makeName();
		this.props.onSubmit(newMediaItem);
	}

	/**
	 * Temporary method to create a ranom media name
	 */
	private makeName(): string {

		var text: string = '';
		var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

		for(var i = 0; i < 5; i++) {

			text += possible.charAt(Math.floor(Math.random() * possible.length));
		}

		return text;
	}
}

/**
 * AddMediaComponent's props
 */
export type AddMediaComponentProps = {

	/**
	 * The callback for media item creation
	 */
	onSubmit: (newMediaItem: MediaItem) => void;
};
