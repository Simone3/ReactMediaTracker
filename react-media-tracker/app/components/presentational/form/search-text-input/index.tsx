import { styles } from 'app/components/presentational/form/search-text-input/styles';
import React, { ReactNode, Component } from 'react';
import { View, FlatList, TouchableOpacity, Text, ViewStyle } from 'react-native';
import { FieldComponent } from 'app/components/presentational/form/field';
import { ColoredImage } from 'app/components/presentational/generic/colored-image';
import { config } from 'app/config/config';
import { TextInputComponentInput } from 'app/components/presentational/form/text-input';
import { SearchBarComponent, SearchBarComponentInput, SearchBarComponentOutput } from 'app/components/presentational/generic/search-bar';
import { ModalComponent } from 'app/components/presentational/generic/modal';
import { AppError } from 'app/data/models/internal/error';

/**
 * Presentational component to display a text input with Formik that also works as a search bar with suggestions
 */
export class SearchTextInputComponent extends Component<SearchTextInputComponentProps, SearchTextInputComponentState> {
	
	public state: SearchTextInputComponentState = { suggestionsModalPosition: undefined, requiresInputPositionMeasure: true };

	private inputContainerRef: View | null = null;

	/**
	 * @override
	 */
	public static getDerivedStateFromProps(props: SearchTextInputComponentProps, state: SearchTextInputComponentState): SearchTextInputComponentState | null {
		
		if(!props.suggestions || props.suggestions.length === 0) {

			return {
				...state,
				requiresInputPositionMeasure: true
			};
		}

		return null;
	}

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
								<View
									style={styles.inputContainer}
									onLayout={() => {
										// This empty callback seems to be required for measure() to work, why?
									}}
									ref={(ref) => {
										
										this.inputContainerRef = ref;
									}}>
									<SearchBarComponent
										{...this.props}
										onChangeText={field.onChange}
										onFocus={field.onFocus}
										onBlur={field.onBlur}
										value={field.value}
										style={styles.input}
									/>
								</View>
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
			onSelectSuggestion,
			onClearSuggestions
		} = this.props;

		const {
			requiresInputPositionMeasure,
			suggestionsModalPosition
		} = this.state;
		
		if(suggestions && suggestions.length > 0) {

			// If we have suggestions and we need to compute the current input position, we use this render() to call the measure()
			if(requiresInputPositionMeasure) {

				if(this.inputContainerRef) {

					this.inputContainerRef.measure((_, __, width, height, pageX, pageY) => {

						if(width === undefined || height === undefined || pageX === undefined || pageY === undefined) {

							throw AppError.GENERIC.withDetails(`Unexpected measure() values: ${width}, ${height}, ${pageX}, ${pageY}. This was solved by adding the empty onLayout() callback!?`);
						}
						
						// When the measure callback arrives, the state is updated to reload the component
						this.setState({
							suggestionsModalPosition: {
								marginTop: pageY + height + 1,
								marginLeft: pageX,
								width: width
							},
							requiresInputPositionMeasure: false
						});
					});
				}

				// Return null, next render() will have the position data and will actually display the modal
				return null;
			}
			else {

				// If we have suggestions and we already computed the input position, we display the modal just below it
				return (
					<ModalComponent
						visible={true}
						transparentBackground={true}
						onClose={onClearSuggestions}
						horizontalPosition='left'
						verticalPosition='top'
						modalContainerStyle={suggestionsModalPosition}>
						<View style={styles.suggestionsContainer}>
							<FlatList
								data={suggestions}
								renderItem={({ item }) => {
									return (
										<View key={item.key}>
											<TouchableOpacity
												onPress={() => {
													onSelectSuggestion(item.key);
												}}>
												<Text style={styles.suggestionText}>{item.value}</Text>
											</TouchableOpacity>
										</View>
									);
								}}
							/>
						</View>
					</ModalComponent>
				);
			}
		}
		else {

			// Display nothing if we have no suggestions
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
	
	/**
	 * Callback for user request to clear the currently visibile suggestions
	 */
	onClearSuggestions: () => void;
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

/**
 * SearchTextInputComponent's state
 */
export type SearchTextInputComponentState = {

	/**
	 * The dynamically computed position of the suggestions modal, to display it just below the text input
	 */
	suggestionsModalPosition: ViewStyle | undefined;
	
	/**
	 * If true and there are suggestions to display, we use one render() to dynamically compute the text input position.
	 * The next render() will actually display the suggestions in the correct position.
	 */
	requiresInputPositionMeasure: boolean;
}
