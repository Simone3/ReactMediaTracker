import React, { Component, ReactNode } from 'react';
import { Formik, FormikProps } from 'formik';
import { OwnPlatformFormViewComponent } from 'app/components/presentational/own-platform/details/form/view';
import { OwnPlatformInternal } from 'app/data/models/internal/own-platform';
import { ownPlatformFormValidationSchema } from 'app/components/presentational/own-platform/details/form/data';

/**
 * Presentational component that handles the Formik wrapper component for the own platform form
 */
export class OwnPlatformFormComponent extends Component<OwnPlatformFormComponentInput & OwnPlatformFormComponentOutput> {

	/**
	 * @override
	 */
	public render(): ReactNode {

		return (
			<Formik<OwnPlatformInternal>
				onSubmit={(result) => {
					this.props.saveOwnPlatform(result);
				}}
				initialValues={this.props.initialValues}
				validationSchema={ownPlatformFormValidationSchema}>
				{(formikProps: FormikProps<OwnPlatformInternal>) => {
					
					return (
						<OwnPlatformFormViewComponent
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
 * OwnPlatformFormComponent's input props
 */
export type OwnPlatformFormComponentInput = {

	/**
	 * The initial own platform values for the form inputs
	 */
	initialValues: OwnPlatformInternal;

	/**
	 * If an external component requests the form submission. Triggers form validation and, if OK, its submission.
	 */
	saveRequested: boolean;
}

/**
 * OwnPlatformFormComponent's output props
 */
export type OwnPlatformFormComponentOutput = {

	/**
	 * Callback to notify the current status of the form
	 * @param valid true if the form is valid, i.e. no validation error occurred
	 * @param dirty true if the form is dirty, i.e. one or more fields are different from initial values
	 */
	notifyFormStatus: (valid: boolean, dirty: boolean) => void;

	/**
	 * Callback to save the own platform, after form validation is successful
	 * @param ownPlatform the own platform to be saved
	 */
	saveOwnPlatform: (ownPlatform: OwnPlatformInternal) => void;
}
