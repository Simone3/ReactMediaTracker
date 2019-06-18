import React, { Component, ReactNode } from 'react';
import { Formik } from 'formik';
import { string, object } from 'yup';
import { CategoryFormViewComponent } from 'app/components/category/details/category-form-view';
import { MEDIA_TYPES_INTERNAL } from 'app/models/internal/category';

/**
 * Presentational component that handles the Formik wrapper component for the category form
 */
export class CategoryFormComponent extends Component {

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
			<Formik
				onSubmit={(result) => {
					console.log(result);
				}}
				component={CategoryFormViewComponent}
				initialValues={{}}
				validationSchema={validationSchema}
			/>
		);
	}
}
