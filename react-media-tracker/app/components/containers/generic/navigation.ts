import { CategoryDetailsScreenContainer } from 'app/components/containers/category/details/screen';
import { CategoriesListScreenContainer } from 'app/components/containers/category/list/screen';
import { GroupDetailsScreenContainer } from 'app/components/containers/group/details/screen';
import { MediaItemDetailsScreenContainer } from 'app/components/containers/media-item/details/screen';
import { MediaItemsListScreenContainer } from 'app/components/containers/media-item/list/screen';
import { config } from 'app/config/config';
import { AppScreens } from 'app/utilities/screens';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

/**
 * The application navigator
 */
const AppNavigator = createStackNavigator({
	[AppScreens.CategoriesList]: CategoriesListScreenContainer,
	[AppScreens.CategoryDetails]: CategoryDetailsScreenContainer,
	[AppScreens.GroupDetails]: GroupDetailsScreenContainer,
	[AppScreens.MediaItemsList]: MediaItemsListScreenContainer,
	[AppScreens.MediaItemDetails]: MediaItemDetailsScreenContainer
}, {
	initialRouteName: AppScreens.CategoriesList,
	defaultNavigationOptions: {
		headerStyle: {
			backgroundColor: config.ui.colors.colorPrimary
		},
		headerTintColor: config.ui.colors.colorContrastText,
		headerTitleStyle: {
			fontWeight: 'bold'
		}
	}
});

/**
 * The root container that wraps the navigation logic
 */
export const AppNavigationContainer = createAppContainer(AppNavigator);
