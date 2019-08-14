import { styles } from 'app/components/presentational/generic/search-bar/styles';
import React, { Component, ReactNode } from 'react';
import { View, TouchableWithoutFeedback, ActivityIndicator } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { ColoredImage } from 'app/components/presentational/generic/colored-image';
import { config } from 'app/config/config';

/**
 * Presentational component to display a search input with icons
 */
export class SearchBarComponent extends Component<SearchBarComponentInput & SearchBarComponentOutput, SearchBarComponentState> {
	
	private timeout: number | undefined = undefined;

	/**
	 * @override
	 */
	public state: SearchBarComponentState = { term: '' };

	/**
	 * @override
	 */
	public render(): ReactNode {

		return (
			<View style={styles.container}>
				{this.renderField()}
				{this.renderLoadingIcon()}
				{this.renderClearButton()}
			</View>
		);
	}

	/**
	 * Helper to render the input field
	 * @returns the component
	 */
	private renderField(): ReactNode {

		const {
			placeholder
		} = this.props;

		return (
			<TextInput
				placeholder={placeholder}
				value={this.state.term}
				style={styles.input}
				onChangeText={(value) => {
					this.setState({ term: value });
					this.onSearchDelayed(value);
				}}
			/>
		);
	}

	/**
	 * Helper to render the clear button
	 * @returns the component
	 */
	private renderClearButton(): ReactNode {
		
		if(this.state.term) {

			return (
				<TouchableWithoutFeedback
					onPress={() => {
						this.setState({ term: '' });
						this.clearTimeout();
					}}>
					<ColoredImage
						source={require('app/resources/images/ic_action_clear.png')}
						tintColor='black'
						style={styles.clearIcon}
					/>
				</TouchableWithoutFeedback>
			);
		}
		else {
			return null;
		}
	}

	/**
	 * Helper to render the loading icon
	 * @returns the component
	 */
	private renderLoadingIcon(): ReactNode {
		
		if(this.props.showLoading) {

			return (
				<ActivityIndicator
					style={styles.loadingIcon}
					size='small'
					color={config.ui.colors.colorAccent}
				/>
			);
		}
	}

	/**
	 * Submits the search, optionally with the configured delay
	 * @param term the search term
	 */
	private onSearchDelayed(term: string): void {

		const {
			onSearch,
			submitDelayMilliseconds
		} = this.props;

		if(submitDelayMilliseconds && submitDelayMilliseconds > 0) {
			
			this.clearTimeout();

			if(term) {

				this.timeout = setTimeout(() => {

					onSearch(term);
				}, submitDelayMilliseconds);
			}
		}
		else if(term) {

			onSearch(term);
		}
	}

	/**
	 * Helper to clear the timeout, if set
	 */
	private clearTimeout(): void {

		if(this.timeout) {

			clearTimeout(this.timeout);
			this.timeout = undefined;
		}
	}
}

/**
 * SearchBarComponent's input props
 */
export type SearchBarComponentInput = {

	/**
	 * Search placeholder
	 */
	placeholder?: string;

	/**
	 * The search submit delay. ```onSearch()``` will be called ```submitDelayMilliseconds``` milliseconds after last typed letter.
	 */
	submitDelayMilliseconds?: number;

	/**
	 * If a small loading icon next to the search input is currently visibile
	 */
	showLoading?: boolean;
}

/**
 * SearchBarComponent's output props
 */
export type SearchBarComponentOutput = {

	/**
	 * The search callback
	 */
	onSearch: (term: string) => void;
}

/**
 * SearchBarComponent's state
 */
type SearchBarComponentState = {

	/**
	 * The current input value
	 */
	term: string;
}
