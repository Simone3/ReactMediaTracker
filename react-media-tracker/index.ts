import { App } from 'app/app';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => {
	return App;
});
