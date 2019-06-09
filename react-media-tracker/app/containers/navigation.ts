import { CategoryPageComponent } from 'app/components/category/category-page';
import { MediaItemPageComponent } from 'app/components/media-item/media-item-page';
import { createAppContainer, createStackNavigator } from 'react-navigation';

/**
 * The application navigator
 */
const AppNavigator = createStackNavigator({
	Categories: CategoryPageComponent,
	MediaItems: MediaItemPageComponent
}, {
	initialRouteName: 'Categories'
});

/**
 * The root container that wraps the navigation logic
 */
export const AppNavigationContainer = createAppContainer(AppNavigator);
