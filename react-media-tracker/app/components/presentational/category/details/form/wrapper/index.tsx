import React, { Component, ReactNode } from 'react';
import { Formik, FormikProps } from 'formik';
import { CategoryFormViewComponent } from 'app/components/presentational/category/details/form/view';
import { CategoryInternal } from 'app/data/models/internal/category';
import { categoryFormValidationSchema } from 'app/components/presentational/category/details/form/data';

/**
 * Presentational component that handles the Formik wrapper component for the category form
 */
export class CategoryFormComponent extends Component<CategoryFormComponentInput & CategoryFormComponentOutput> {

	/**
	 * @override
	 */
	public render(): ReactNode {

		return (
			<Formik<CategoryInternal>
				onSubmit={(result) => {
					this.props.saveCategory(result);
				}}
				initialValues={this.props.initialValues}
				validationSchema={categoryFormValidationSchema}>
				{(formikProps: FormikProps<CategoryInternal>) => {
					
					return (
						<CategoryFormViewComponent
							{...formikProps}
							saveRequested={this.props.saveRequested}
							notifyFormStatus={this.props.notifyFormStatus}
						/>
					);
				}}
			</Formik>
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

	/**
	 * If an external component requests the form submission. Triggers form validation and, if OK, its submission.
	 */
	saveRequested: boolean;
}

/**
 * CategoryFormComponent's output props
 */
export type CategoryFormComponentOutput = {

	/**
	 * Callback to notify the current status of the form
	 * @param valid true if the form is valid, i.e. no validation error occurred
	 * @param dirty true if the form is dirty, i.e. one or more fields are different from initial values
	 */
	notifyFormStatus: (valid: boolean, dirty: boolean) => void;

	/**
	 * Callback to save the category, after form validation is successful
	 * @param category the category to be saved
	 */
	saveCategory: (category: CategoryInternal) => void;
}
