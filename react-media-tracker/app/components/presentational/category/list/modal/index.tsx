import React, { Component, ReactNode } from 'react';
import { CategoryInternal } from 'app/data/models/internal/category';
import { ModalComponent } from 'app/components/presentational/generic/modal';
import { i18n } from 'app/utilities/i18n';
import { ButtonsListComponentButton, ButtonsListComponent } from 'app/components/presentational/generic/buttons-list';
import { navigationService } from 'app/utilities/navigation-service';
import { AppScreens } from 'app/utilities/screens';
import { mediaIconFactory } from 'app/factories/category';

/**
 * Presentational component to display a modal dialog with the category options
 */
export class CategoryModalComponent extends Component<CategoryModalComponentInput & CategoryModalComponentOutput> {
	
	/**
	 * @override
	 */
	public render(): ReactNode {

		const {
			category
		} = this.props;

		if(category) {

			const {
				edit,
				delete: deleteCallback,
				close
			} = this.props;

			const buttons: ButtonsListComponentButton[] = [{
				label: i18n.t('category.list.edit'),
				icon: require('app/resources/images/ic_edit.png'),
				onClick: () => {
	
					edit(category);
					close();
					navigationService.navigate(AppScreens.CategoryDetails);
				}
			}, {
				label: i18n.t('category.list.delete'),
				icon: require('app/resources/images/ic_delete.png'),
				onClick: () => {
	
					deleteCallback(category);
					close();
				}
			}];

			return (
				<ModalComponent
					visible={true}
					onClose={close}
					horizontalPosition='center'
					verticalPosition='bottom'>
					<ButtonsListComponent
						title={category.name}
						titleIcon={mediaIconFactory.get(category)}
						buttons={buttons}
					/>
				</ModalComponent>
			);
		}
		else {

			return null;
		}
	}
}

/**
 * CategoryModalComponent's input props
 */
export type CategoryModalComponentInput = {

	/**
	 * The category linked with the modal. Undefined means no modal is displayed.
	 */
	category: CategoryInternal | undefined;
};

/**
 * CategoryModalComponent's output props
 */
export type CategoryModalComponentOutput = {

	/**
	 * Callback to edit the category
	 */
	edit: (category: CategoryInternal) => void;
	
	/**
	 * Callback to delete the category
	 */
	delete: (category: CategoryInternal) => void;

	/**
	 * Callback when the component requests to be closed
	 */
	close: () => void;
};

