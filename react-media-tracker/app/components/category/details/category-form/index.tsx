import React, { Component, ReactNode } from 'react';
import { Formik } from 'formik';
import { string, object } from 'yup';
import { CategoryFormViewComponent } from 'app/components/category/details/category-form-view';
import { MEDIA_TYPES_INTERNAL, CategoryInternal } from 'app/models/internal/entities/category';
import { i18n } from 'app/lang/lang';

/**
 * Presentational component that handles the Formik wrapper component for the category form
 */
export class CategoryFormComponent extends Component<CategoryFormComponentInput & CategoryFormComponentOutput> {

	/**
	 * @override
	 */
	public render(): ReactNode {

		const validationSchema = object().shape({
			name: string()
				.required(i18n.t('category.details.validation.name.required')),
			mediaType: string()
				.oneOf(MEDIA_TYPES_INTERNAL, i18n.t('category.details.validation.mediaType.invalid'))
				.required(i18n.t('category.details.validation.mediaType.required')),
			color: string()
				.required(i18n.t('category.details.validation.color.required'))
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
