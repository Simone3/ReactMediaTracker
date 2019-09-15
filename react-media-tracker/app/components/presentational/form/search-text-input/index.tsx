import { styles } from 'app/components/presentational/form/search-text-input/styles';
import React, { ReactNode, Component } from 'react';
import { View, FlatList, TouchableOpacity, Text } from 'react-native';
import { FieldComponent } from 'app/components/presentational/form/field';
import { ColoredImage } from 'app/components/presentational/generic/colored-image';
import { config } from 'app/config/config';
import { TextInputComponentInput } from 'app/components/presentational/form/text-input';
import { SearchBarComponent, SearchBarComponentInput, SearchBarComponentOutput } from 'app/components/presentational/generic/search-bar';

/**
 * Presentational component to display a text input with Formik that also works as a search bar with suggestions
 */
export class SearchTextInputComponent extends Component<SearchTextInputComponentProps> {
	
	/**
	 * @override
	 */
	public render(): ReactNode {

		const {
			name,
			icon
		} = this.props;

		return (
			<FieldComponent name={name}>
				{(field) => {
					return (
						<View>
							<View style={styles.container}>
								<ColoredImage
									source={icon}
									tintColor={config.ui.colors.colorFormInputs}
									style={styles.icon}
								/>
								<SearchBarComponent
									{...this.props}
									onChangeText={field.onChange}
									onFocus={field.onFocus}
									onBlur={field.onBlur}
									value={field.value}
									style={styles.input}
								/>
							</View>
							{this.displaySuggestions()}
						</View>
					);
				}}
			</FieldComponent>
		);
	}

	/**
	 * Helper to display the suggestions modal
	 * @returns the component
	 */
	private displaySuggestions(): ReactNode {
		
		const {
			suggestions,
			onSelectSuggestion
		} = this.props;

		if(suggestions && suggestions.length > 0) {

			return (
				<FlatList
					data={suggestions}
					renderItem={({ item }) => {
						return (
							<View key={item.key}>
								<TouchableOpacity
									onPress={() => {
										onSelectSuggestion(item.key);
									}}>
									<Text>{item.value}</Text>
								</TouchableOpacity>
							</View>
						);
					}}
				/>
			);
		}
		else {

			return null;
		}
	}
}

/**
 * SearchTextInputComponent's input props
 */
export type SearchTextInputComponentInput = TextInputComponentInput & SearchBarComponentInput & {

	/**
	 * The currently displayed suggestions, if any
	 */
	suggestions?: SearchTextInputComponentSuggestion[];
}

/**
 * SearchTextInputComponent's output props
 */
export type SearchTextInputComponentOutput = SearchBarComponentOutput & {

	/**
	 * The suggestion click callback
	 */
	onSelectSuggestion: (suggestionKey: string) => void;
}

/**
 * SearchTextInputComponent's props
 */
export type SearchTextInputComponentProps = SearchTextInputComponentInput & SearchTextInputComponentOutput;

/**
 * SearchTextInputComponent suggestion, to be displayed in a popup under the input
 */
export type SearchTextInputComponentSuggestion = {

	/**
	 * The suggestion ID
	 */
	key: string;

	/**
	 * The suggestion display label
	 */
	value: string;
}
