import { CategoryDetailsScreenContainer } from 'app/containers/category/details/category-details-screen';
import { CategoriesListScreenContainer } from 'app/containers/category/list/categories-list-screen';
import { createAppContainer, createStackNavigator } from 'react-navigation';

/**
 * Util object to extract all route names as constants
 */
export const AppRoutes = {
	CategoryList: 'CategoryList',
	CategoryDetails: 'CategoryDetails'
};

/**
 * The application navigator
 */
const AppNavigator = createStackNavigator({
	[AppRoutes.CategoryList]: CategoriesListScreenContainer,
	[AppRoutes.CategoryDetails]: CategoryDetailsScreenContainer
}, {
	initialRouteName: AppRoutes.CategoryList
});

/**
 * The root container that wraps the navigation logic
 */
export const AppNavigationContainer = createAppContainer(AppNavigator);
