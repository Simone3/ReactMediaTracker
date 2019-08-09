import { CategoryDetailsScreenContainer } from 'app/components/containers/category/details/screen';
import { CategoriesListScreenContainer } from 'app/components/containers/category/list/screen';
import { config } from 'app/config/config';
import { AppScreens } from 'app/utilities/screens';
import { createAppContainer, createStackNavigator } from 'react-navigation';

/**
 * The application navigator
 */
const AppNavigator = createStackNavigator({
	[AppScreens.CategoriesList]: CategoriesListScreenContainer,
	[AppScreens.CategoryDetails]: CategoryDetailsScreenContainer
}, {
	initialRouteName: AppScreens.CategoriesList,
	defaultNavigationOptions: {
		headerStyle: {
			backgroundColor: config.ui.colors.colorPrimary
		},
		headerTintColor: 'white',
		headerTitleStyle: {
			fontWeight: 'bold'
		}
	}
});

/**
 * The root container that wraps the navigation logic
 */
export const AppNavigationContainer = createAppContainer(AppNavigator);
