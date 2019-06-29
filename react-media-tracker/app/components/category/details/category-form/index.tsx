import React, { Component, ReactNode } from 'react';
import { Formik } from 'formik';
import { string, object } from 'yup';
import { CategoryFormViewComponent } from 'app/components/category/details/category-form-view';
import { MEDIA_TYPES_INTERNAL, CategoryInternal } from 'app/models/internal/category';

/**
 * Presentational component that handles the Formik wrapper component for the category form
 */
export class CategoryFormComponent extends Component<CategoryFormComponentInput & CategoryFormComponentOutput> {

	/**
	 * @override
	 */
	public render(): ReactNode {

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
}

/**
 * CategoryFormComponent's input props
 */
export type CategoryFormComponentInput = {

	/**
	 * The initial category values for the form inputs
	 */
	initialValues: CategoryInternal;
}

/**
 * CategoryFormComponent's output props
 */
export type CategoryFormComponentOutput = {

	/**
	 * Callback to save the category
	 * @param category the category to be saved
	 */
	saveCategory: (category: CategoryInternal) => void;
}
