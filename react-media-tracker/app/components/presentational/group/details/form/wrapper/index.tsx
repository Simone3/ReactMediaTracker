import React, { Component, ReactNode } from 'react';
import { Formik, FormikProps } from 'formik';
import { GroupFormViewComponent } from 'app/components/presentational/group/details/form/view';
import { GroupInternal } from 'app/data/models/internal/group';
import { groupFormValidationSchema } from 'app/components/presentational/group/details/form/data';

/**
 * Presentational component that handles the Formik wrapper component for the group form
 */
export class GroupFormComponent extends Component<GroupFormComponentInput & GroupFormComponentOutput> {

	/**
	 * @override
	 */
	public render(): ReactNode {

		return (
			<Formik<GroupInternal>
				onSubmit={(result) => {
					this.props.saveGroup(result);
				}}
				initialValues={this.props.initialValues}
				validationSchema={groupFormValidationSchema}>
				{(formikProps: FormikProps<GroupInternal>) => {
					
					return (
						<GroupFormViewComponent
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
 * GroupFormComponent's input props
 */
export type GroupFormComponentInput = {

	/**
	 * The initial group values for the form inputs
	 */
	initialValues: GroupInternal;

	/**
	 * If an external component requests the form submission. Triggers form validation and, if OK, its submission.
	 */
	saveRequested: boolean;
}

/**
 * GroupFormComponent's output props
 */
export type GroupFormComponentOutput = {

	/**
	 * Callback to notify the current status of the form
	 * @param valid true if the form is valid, i.e. no validation error occurred
	 * @param dirty true if the form is dirty, i.e. one or more fields are different from initial values
	 */
	notifyFormStatus: (valid: boolean, dirty: boolean) => void;

	/**
	 * Callback to save the group, after form validation is successful
	 * @param group the group to be saved
	 */
	saveGroup: (group: GroupInternal) => void;
}
