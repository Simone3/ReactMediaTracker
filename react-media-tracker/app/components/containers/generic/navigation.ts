import { CategoryDetailsScreenContainer } from 'app/components/containers/category/details/screen';
import { CategoriesListScreenContainer } from 'app/components/containers/category/list/screen';
import { GroupDetailsScreenContainer } from 'app/components/containers/group/details/screen';
import { MediaItemDetailsScreenContainer } from 'app/components/containers/media-item/details/screen';
import { MediaItemsListScreenContainer } from 'app/components/containers/media-item/list/screen';
import { OwnPlatformDetailsScreenContainer } from 'app/components/containers/own-platform/details/screen';
import { CreditsScreenComponent } from 'app/components/presentational/credits/screen';
import { drawerIconBuilder } from 'app/components/presentational/generic/drawer-icon';
import { SettingsScreenComponent } from 'app/components/presentational/settings/screen';
import { config } from 'app/config/config';
import { i18n } from 'app/utilities/i18n';
import { images } from 'app/utilities/images';
import { AppScreens, AppSections } from 'app/utilities/screens';
import { createAppContainer, NavigationRoute, NavigationScreenConfig } from 'react-navigation';
import { createDrawerNavigator, NavigationDrawerScreenProps } from 'react-navigation-drawer';
import { createStackNavigator, NavigationStackOptions, NavigationStackProp, NavigationStackScreenProps } from 'react-navigation-stack';

/**
 * Helper type to define a screen configuration
 */
export type ScreenConfig = NavigationScreenConfig<NavigationStackOptions, NavigationStackProp<NavigationRoute, unknown>>;

/**
 * Helper type to define a screen input props
 */
export type ScreenProps = NavigationStackScreenProps | NavigationDrawerScreenProps;

/**
 * Default screen options
 */
const defaultScreenOptions: ScreenConfig = {
	headerStyle: {
		backgroundColor: config.ui.colors.colorPrimary
	},
	headerTintColor: config.ui.colors.colorContrastText,
	headerTitleStyle: {
		fontWeight: 'bold'
	},
	headerLeft: null
};

/**
 * The navigator for the main section of the app, with the categories and media items lists
 */
const MainAppStackNavigator = createStackNavigator({
	[AppScreens.CategoriesList]: CategoriesListScreenContainer,
	[AppScreens.CategoryDetails]: CategoryDetailsScreenContainer,
	[AppScreens.MediaItemsList]: MediaItemsListScreenContainer,
	[AppScreens.MediaItemDetails]: MediaItemDetailsScreenContainer,
	[AppScreens.GroupDetails]: GroupDetailsScreenContainer,
	[AppScreens.OwnPlatformDetails]: OwnPlatformDetailsScreenContainer
}, {
	initialRouteName: AppScreens.CategoriesList,
	defaultNavigationOptions: defaultScreenOptions
});

/**
 * The navigator for the settings section of the app
 */
const SettingsStackNavigator = createStackNavigator({
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[AppScreens.Settings]: SettingsScreenComponent as any
}, {
	initialRouteName: AppScreens.Settings,
	defaultNavigationOptions: defaultScreenOptions
});

/**
 * The navigator for the credits section of the app
 */
const CreditsStackNavigator = createStackNavigator({
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[AppScreens.Credits]: CreditsScreenComponent as any
}, {
	initialRouteName: AppScreens.Credits,
	defaultNavigationOptions: defaultScreenOptions
});

/**
 * The navigator to switch between the app sections via drawer
 */
const DrawerStackNavigator = createDrawerNavigator({
	[AppSections.MainApp]: {
		screen: MainAppStackNavigator,
		navigationOptions: {
			drawerLabel: i18n.t('common.drawer.home'),
			drawerIcon: drawerIconBuilder(images.none())
		}
	},
	[AppSections.Settings]: {
		screen: SettingsStackNavigator,
		navigationOptions: {
			drawerLabel: i18n.t('common.drawer.settings'),
			drawerIcon: drawerIconBuilder(images.none())
		}
	},
	[AppSections.Credits]: {
		screen: CreditsStackNavigator,
		navigationOptions: {
			drawerLabel: i18n.t('common.drawer.credits'),
			drawerIcon: drawerIconBuilder(images.none())
		}
	}
}, {
	initialRouteName: AppSections.MainApp
});

/**
 * The root container that wraps the navigation logic
 */
export const AppNavigationContainer = createAppContainer(DrawerStackNavigator);
