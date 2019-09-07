import React, { Component, ReactNode } from 'react';
import { Formik, FormikProps } from 'formik';
import { VideogameFilterFormValues, videogameFilterFormMapper, videogameFilterFormValidationSchema } from 'app/components/presentational/media-item/list/filter-form/data/videogame';
import { VideogameFilterFormViewComponent } from 'app/components/presentational/media-item/list/filter-form/view/videogame';
import { VideogameFilterInternal, VideogameSortByInternal } from 'app/data/models/internal/media-items/videogame';
import { MediaItemFilterFormComponentInput, MediaItemFilterFormComponentOutput } from 'app/components/presentational/media-item/list/filter-form/wrapper/media-item';

/**
 * Presentational component that handles the Formik wrapper component for the videogame filter form
 */
export class VideogameFilterFormComponent extends Component<VideogameFilterFormComponentProps> {

	/**
	 * @override
	 */
	public render(): ReactNode {

		const {
			initialFilter,
			initialSortBy,
			submitFilter
		} = this.props;

		const initialValues: VideogameFilterFormValues = videogameFilterFormMapper.toFormValues(initialFilter, initialSortBy);

		return (
			<Formik<VideogameFilterFormValues>
				onSubmit={(result) => {
					
					const filter = videogameFilterFormMapper.toFilterModel(result);
					const sortBy = videogameFilterFormMapper.toSortByModel(result);
					submitFilter(filter, sortBy);
				}}
				initialValues={initialValues}
				isInitialValid={true}
				validationSchema={videogameFilterFormValidationSchema}>
				{(formikProps: FormikProps<VideogameFilterFormValues>) => {
					
					return (
						<VideogameFilterFormViewComponent {...formikProps} />
					);
				}}
			</Formik>
		);
	}
}

/**
 * VideogameFilterFormComponent's input props
 */
export type VideogameFilterFormComponentInput = MediaItemFilterFormComponentInput<VideogameFilterInternal, VideogameSortByInternal>;

/**
 * VideogameFilterFormComponent's output props
 */
export type VideogameFilterFormComponentOutput = MediaItemFilterFormComponentOutput;

/**
 * VideogameFilterFormComponent's props
 */
export type VideogameFilterFormComponentProps = VideogameFilterFormComponentInput & VideogameFilterFormComponentOutput;
