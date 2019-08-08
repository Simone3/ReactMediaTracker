import React, { Component, ReactNode } from 'react';
import { Formik, FormikProps } from 'formik';
import { string, object, ObjectSchema, StringSchema } from 'yup';
import { CategoryFormViewComponent } from 'app/components/category/details/category-form-view';
import { MEDIA_TYPES_INTERNAL, CategoryInternal, MediaTypeInternal } from 'app/models/internal/entities/category';

/**
 * Presentational component that handles the Formik wrapper component for the category form
 */
export class CategoryFormComponent extends Component<CategoryFormComponentInput & CategoryFormComponentOutput> {

	/**
	 * The Formik validation schema
	 */
	private readonly validationSchema: ObjectSchema<CategoryInternal> = object().shape({
		id: string(),
		name: string().required(),
		mediaType: string().oneOf(MEDIA_TYPES_INTERNAL).required() as StringSchema<MediaTypeInternal>,
		color: string().required()
	});
	
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
				validationSchema={this.validationSchema}>
				{(formikProps: FormikProps<CategoryInternal>) => {
					
					return (
						<CategoryFormViewComponent
							{...formikProps}
							saveRequested={this.props.saveRequested}
							notifyFormValidity={this.props.notifyFormValidity}
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
	 * Callback to notify the current validity status of the form. Invoked at every Formik re-render.
	 * @param valid true if the form is valid, e.g. can be saved
	 */
	notifyFormValidity: (valid: boolean) => void;

	/**
	 * Callback to save the category, after form validation is successful
	 * @param category the category to be saved
	 */
	saveCategory: (category: CategoryInternal) => void;
}
