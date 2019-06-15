import { CategoryDetailsScreenComponent } from 'app/components/category/details/category-details-screen';
import { CategoryListScreenComponent } from 'app/components/category/list/category-list-screen';
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
	[AppRoutes.CategoryList]: CategoryListScreenComponent,
	[AppRoutes.CategoryDetails]: CategoryDetailsScreenComponent
}, {
	initialRouteName: AppRoutes.CategoryList
});

/**
 * The root container that wraps the navigation logic
 */
export const AppNavigationContainer = createAppContainer(AppNavigator);
