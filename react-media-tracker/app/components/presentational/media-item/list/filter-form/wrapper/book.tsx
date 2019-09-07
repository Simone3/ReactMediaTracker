import React, { Component, ReactNode } from 'react';
import { Formik, FormikProps } from 'formik';
import { BookFilterFormValues, bookFilterFormMapper, bookFilterFormValidationSchema } from 'app/components/presentational/media-item/list/filter-form/data/book';
import { BookFilterFormViewComponent } from 'app/components/presentational/media-item/list/filter-form/view/book';
import { BookFilterInternal, BookSortByInternal } from 'app/data/models/internal/media-items/book';
import { MediaItemFilterFormComponentInput, MediaItemFilterFormComponentOutput } from 'app/components/presentational/media-item/list/filter-form/wrapper/media-item';

/**
 * Presentational component that handles the Formik wrapper component for the book filter form
 */
export class BookFilterFormComponent extends Component<BookFilterFormComponentProps> {

	/**
	 * @override
	 */
	public render(): ReactNode {

		const {
			initialFilter,
			initialSortBy,
			submitFilter
		} = this.props;

		const initialValues: BookFilterFormValues = bookFilterFormMapper.toFormValues(initialFilter, initialSortBy);

		return (
			<Formik<BookFilterFormValues>
				onSubmit={(result) => {
					
					const filter = bookFilterFormMapper.toFilterModel(result);
					const sortBy = bookFilterFormMapper.toSortByModel(result);
					submitFilter(filter, sortBy);
				}}
				initialValues={initialValues}
				isInitialValid={true}
				validationSchema={bookFilterFormValidationSchema}>
				{(formikProps: FormikProps<BookFilterFormValues>) => {
					
					return (
						<BookFilterFormViewComponent {...formikProps} />
					);
				}}
			</Formik>
		);
	}
}

/**
 * BookFilterFormComponent's input props
 */
export type BookFilterFormComponentInput = MediaItemFilterFormComponentInput<BookFilterInternal, BookSortByInternal>;

/**
 * BookFilterFormComponent's output props
 */
export type BookFilterFormComponentOutput = MediaItemFilterFormComponentOutput;

/**
 * BookFilterFormComponent's props
 */
export type BookFilterFormComponentProps = BookFilterFormComponentInput & BookFilterFormComponentOutput;
