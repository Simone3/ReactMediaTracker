import React, { Component, ReactNode } from 'react';
import { View } from 'react-native';
import { AppScreens } from 'app/utilities/screens';
import { CategoriesListContainer } from 'app/components/containers/category/list/list';
import { CategoryInternal } from 'app/data/models/internal/category';
import { navigationService } from 'app/utilities/navigation-service';
import { styles } from 'app/components/presentational/category/list/screen/styles';
import { i18n } from 'app/utilities/i18n';
import { FABComponent } from 'app/components/presentational/generic/floating-action-button';
import { LoadingIndicatorComponent } from 'app/components/presentational/generic/loading-indicator';
import { HeaderComponent } from 'app/components/presentational/generic/header';

/**
 * Presentational component that contains the whole "categories list" screen, that lists all user categories
 */
export class CategoriesListScreenComponent extends Component<CategoriesListScreenComponentInput & CategoriesListScreenComponentOutput> {
	
	/**
	 * @override
	 */
	public static readonly navigationOptions = {
		headerTitle: <HeaderComponent
			title={i18n.t('category.list.title')}
		/>,
		headerLeft: null
	};

	/**
	 * @override
	 */
	public componentWillMount(): void {

		// Load first list of categories
		this.props.fetchCategories();
	}

	/**
	 * @override
	 */
	public componentDidUpdate(): void {

		if(this.props.requiresReload) {

			// Reload categories if the current list was marked as invalid
			this.props.fetchCategories();
		}
	}

	/**
	 * @override
	 */
	public render(): ReactNode {
		
		return (
			<View style={styles.container}>
				<CategoriesListContainer/>
				<FABComponent
					text={'+'}
					onPress={() => {
						this.props.loadNewCategoryDetails();
						navigationService.navigate(AppScreens.CategoryDetails);
					}}
				/>
				<LoadingIndicatorComponent
					visible={this.props.isLoading}
					fullScreen={false}
				/>
			</View>
		);
	}
}

/**
 * CategoriesListScreenComponent's input props
 */
export type CategoriesListScreenComponentInput = {
	
	/**
	 * Flag to tell if the component is currently waiting on an async operation. If true, shows the loading screen.
	 */
	isLoading: boolean;

	/**
	 * Flag to tell if the categories list was invalidated. If true, requests a new reload.
	 */
	requiresReload: boolean;
}

/**
 * CategoriesListScreenComponent's output props
 */
export type CategoriesListScreenComponentOutput = {

	/**
	 * Callback to request the categories list (re)load
	 */
	fetchCategories: () => void;

	/**
	 * Callback to load the details of a new category
	 */
	loadNewCategoryDetails: () => void;

	/**
	 * Callback to load the details of an existing category
	 * @param category the existing category
	 */
	loadCategoryDetails: (category: CategoryInternal) => void;
}
