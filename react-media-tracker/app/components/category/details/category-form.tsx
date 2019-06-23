import React, { Component, ReactNode } from 'react';
import { Text } from 'react-native';
import { Formik } from 'formik';
import { string, object } from 'yup';
import { CategoryFormViewComponent } from 'app/components/category/details/category-form-view';
import { MEDIA_TYPES_INTERNAL, CategoryInternal } from 'app/models/internal/category';
import { withNavigation, NavigationInjectedProps } from 'react-navigation';

/**
 * Presentational component that handles the Formik wrapper component for the category form
 */
export const CategoryFormComponent = withNavigation(class CategoryFormComponentInternal extends Component<NavigationInjectedProps & CategoryFormComponentInput & CategoryFormComponentOutput> {

	/**
	 * @override
	 */
	public componentWillMount(): void {

		this.props.loadInitialValues();
	}

	/**
	 * @override
	 */
	public componentDidUpdate(): void {

		if(this.props.saveCompleted) {

			this.props.navigation.goBack();
		}
	}

	/**
	 * @override
	 */
	public render(): ReactNode {
		
		if(this.props.saveCompleted) {

			return null;
		}
		else if(this.props.isSaving) {

			return this.renderLoading();
		}
		else {

			return this.renderForm();
		}
	}

	/**
	 * Helper method to render the actual form
	 * @returns the node portion
	 */
	private renderForm(): ReactNode {

		const validationSchema = object().shape({
			name: string().required('Name is required'),
			mediaType: string().oneOf(MEDIA_TYPES_INTERNAL, 'Invalid Media Type').required('Media Type is required'),
			color: string().required('Color is required')
		});

		return (
			<Formik<CategoryInternal>
				onSubmit={(result) => {
					this.props.saveCategory(result);
				}}
				component={CategoryFormViewComponent}
				initialValues={this.props.initialValues}
				validationSchema={validationSchema}
			/>
		);
	}

	/**
	 * Helper method to render the loading screen
	 * @returns the node portion
	 */
	private renderLoading(): ReactNode {

		return <Text>Saving...</Text>;
	}
});

/**
 * CategoryFormComponent's input props
 */
export type CategoryFormComponentInput = {

	/**
	 * The initial category values for the form inputs
	 */
	initialValues: CategoryInternal;

	/**
	 * If true, the loading screen is shown
	 */
	isSaving: boolean;

	/**
	 * If true, the component automatically navigates back
	 */
	saveCompleted: boolean;
}

/**
 * CategoryFormComponent's output props
 */
export type CategoryFormComponentOutput = {

	/**
	 * Triggered when the component requests the category initial values load operation
	 */
	loadInitialValues: () => void;

	/**
	 * Triggered when the component requests the category save operation
	 */
	saveCategory: (category: CategoryInternal) => void;
}
