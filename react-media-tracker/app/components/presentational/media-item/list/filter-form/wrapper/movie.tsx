import React, { Component, ReactNode } from 'react';
import { Formik, FormikProps } from 'formik';
import { MovieFilterFormValues, movieFilterFormMapper, movieFilterFormValidationSchema } from 'app/components/presentational/media-item/list/filter-form/data/movie';
import { MovieFilterFormViewComponent } from 'app/components/presentational/media-item/list/filter-form/view/movie';
import { MovieFilterInternal, MovieSortByInternal } from 'app/data/models/internal/media-items/movie';
import { MediaItemFilterFormComponentInput, MediaItemFilterFormComponentOutput } from 'app/components/presentational/media-item/list/filter-form/wrapper/media-item';

/**
 * Presentational component that handles the Formik wrapper component for the movie filter form
 */
export class MovieFilterFormComponent extends Component<MovieFilterFormComponentProps> {

	/**
	 * @override
	 */
	public render(): ReactNode {

		const {
			initialFilter,
			initialSortBy,
			submitFilter
		} = this.props;

		const initialValues: MovieFilterFormValues = movieFilterFormMapper.toFormValues(initialFilter, initialSortBy);

		return (
			<Formik<MovieFilterFormValues>
				onSubmit={(result) => {
					
					const filter = movieFilterFormMapper.toFilterModel(result);
					const sortBy = movieFilterFormMapper.toSortByModel(result);
					submitFilter(filter, sortBy);
				}}
				initialValues={initialValues}
				isInitialValid={true}
				validationSchema={movieFilterFormValidationSchema}>
				{(formikProps: FormikProps<MovieFilterFormValues>) => {
					
					return (
						<MovieFilterFormViewComponent {...formikProps} />
					);
				}}
			</Formik>
		);
	}
}

/**
 * MovieFilterFormComponent's input props
 */
export type MovieFilterFormComponentInput = MediaItemFilterFormComponentInput<MovieFilterInternal, MovieSortByInternal>;

/**
 * MovieFilterFormComponent's output props
 */
export type MovieFilterFormComponentOutput = MediaItemFilterFormComponentOutput;

/**
 * MovieFilterFormComponent's props
 */
export type MovieFilterFormComponentProps = MovieFilterFormComponentInput & MovieFilterFormComponentOutput;
