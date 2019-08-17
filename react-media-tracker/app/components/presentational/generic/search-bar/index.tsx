import { styles } from 'app/components/presentational/generic/search-bar/styles';
import React, { Component, ReactNode } from 'react';
import { View, TouchableWithoutFeedback, ActivityIndicator } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { ColoredImage } from 'app/components/presentational/generic/colored-image';
import { config } from 'app/config/config';

/**
 * Presentational component to display a search input with icons
 */
export class SearchBarComponent extends Component<SearchBarComponentProps, SearchBarComponentState> {
	
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
			placeholder,
			autoFocus
		} = this.props;

		return (
			<TextInput
				autoFocus={autoFocus}
				placeholder={placeholder}
				placeholderTextColor={config.ui.colors.colorContrastText}
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
						tintColor={config.ui.colors.colorContrastText}
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

		const searchTerm = this.getSearchTerm(term);

		if(submitDelayMilliseconds && submitDelayMilliseconds > 0) {
			
			this.clearTimeout();

			if(searchTerm) {

				this.timeout = setTimeout(() => {

					onSearch(searchTerm);
				}, submitDelayMilliseconds);
			}
		}
		else if(searchTerm) {

			onSearch(searchTerm);
		}
	}

	/**
	 * Gets the modified search term
	 * @param term the term
	 * @returns a valid search term or undefined if search should not be submitted
	 */
	private getSearchTerm(term: string): string | undefined {

		if(!term) {

			return undefined;
		}

		const trimmed = term.trim();

		if(!trimmed) {

			return undefined;
		}

		const {
			submitMinLength
		} = this.props;

		if(submitMinLength !== undefined && trimmed.length < submitMinLength) {

			return undefined;
		}

		return trimmed;
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
	 * Whether to autofocus on startup
	 */
	autoFocus?: boolean;

	/**
	 * Search placeholder
	 */
	placeholder?: string;

	/**
	 * The search submit delay. ```onSearch()``` will be called ```submitDelayMilliseconds``` milliseconds after last typed letter.
	 */
	submitDelayMilliseconds?: number;

	/**
	 * If defined, only inputs with ```submitMinLength``` characters or more will trigger a submit
	 */
	submitMinLength?: number;

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
 * SearchBarComponent's props
 */
export type SearchBarComponentProps = SearchBarComponentInput & SearchBarComponentOutput;

/**
 * SearchBarComponent's state
 */
type SearchBarComponentState = {

	/**
	 * The current input value
	 */
	term: string;
}
