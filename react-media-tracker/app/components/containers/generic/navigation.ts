import { AuthLoadingScreenContainer } from 'app/components/containers/auth/loading';
import { UserLoginScreenContainer } from 'app/components/containers/auth/login';
import { UserSignupScreenContainer } from 'app/components/containers/auth/signup';
import { CategoryDetailsScreenContainer } from 'app/components/containers/category/details/screen';
import { CategoriesListScreenContainer } from 'app/components/containers/category/list/screen';
import { GroupDetailsScreenContainer } from 'app/components/containers/group/details/screen';
import { MediaItemDetailsScreenContainer } from 'app/components/containers/media-item/details/screen';
import { MediaItemsListScreenContainer } from 'app/components/containers/media-item/list/screen';
import { OwnPlatformDetailsScreenContainer } from 'app/components/containers/own-platform/details/screen';
import { UserSettingsScreenContainer } from 'app/components/containers/settings/screen';
import { CreditsScreenComponent } from 'app/components/presentational/credits/screen';
import { drawerIconBuilder } from 'app/components/presentational/generic/drawer-icon';
import { config } from 'app/config/config';
import { i18n } from 'app/utilities/i18n';
import { images } from 'app/utilities/images';
import { AppScreens, AppSections } from 'app/utilities/screens';
import { createAppContainer, createSwitchNavigator, NavigationRoute, NavigationScreenConfig } from 'react-navigation';
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
 * The navigator for the unauthenticated section of the app
 */
const UnauthenticatedStackNavigator = createStackNavigator({
	[AppScreens.UserLogin]: UserLoginScreenContainer,
	[AppScreens.UserSignup]: UserSignupScreenContainer
}, {
	initialRouteName: AppScreens.UserLogin,
	defaultNavigationOptions: defaultScreenOptions
});

/**
 * The navigator for the main section of the authenticated app, with the categories and media items lists
 */
const MediaStackNavigator = createStackNavigator({
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
	[AppScreens.Settings]: UserSettingsScreenContainer
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
 * The navigator to switch between the main authenticated app sections via drawer
 */
const AuthenticatedDrawerNavigator = createDrawerNavigator({
	[AppSections.Media]: {
		screen: MediaStackNavigator,
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
	initialRouteName: AppSections.Media,
	unmountInactiveRoutes: true
});

/**
 * The navigator to switch between unauthenticated and authenticated flows
 */
const AuthSwitchNavigator = createSwitchNavigator({
	[AppScreens.AuthLoading]: AuthLoadingScreenContainer,
	[AppSections.Unauthenticated]: UnauthenticatedStackNavigator,
	[AppSections.Authenticated]: AuthenticatedDrawerNavigator
}, {
	initialRouteName: AppScreens.AuthLoading
});

/**
 * The root container that wraps the navigation logic
 */
export const AppNavigationContainer = createAppContainer(AuthSwitchNavigator);
