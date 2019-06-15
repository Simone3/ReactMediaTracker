import React, { Component, ReactNode } from 'react';
import { Formik } from 'formik';
import { CategoryFormViewComponent } from './category-form-view';

/**
 * Presentational component that handles the Formik wrapper component for the category form
 */
export class CategoryFormComponent extends Component {

	/**
	 * @override
	 */
	public render(): ReactNode {
		
		return (
			<Formik
				onSubmit={(result) => {
					console.log(result);
				}}
				component={CategoryFormViewComponent}
				initialValues={{}}
			/>
		);
	}
}
