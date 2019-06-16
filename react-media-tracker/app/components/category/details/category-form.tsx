import React, { Component, ReactNode } from 'react';
import { Formik } from 'formik';
import { string, object } from 'yup';
import { CategoryFormViewComponent } from './category-form-view';

/**
 * Presentational component that handles the Formik wrapper component for the category form
 */
export class CategoryFormComponent extends Component {

	/**
	 * @override
	 */
	public render(): ReactNode {
		
		const validationSchema = object().shape({
			name: string().required('Name is required')
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
