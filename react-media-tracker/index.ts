// eslint-disable-next-line import/no-unassigned-import
import 'reflect-metadata';
import { App } from 'app/app';
import { AppRegistry, YellowBox } from 'react-native';
import { name as appName } from './app.json';

YellowBox.ignoreWarnings([ 'Remote debugger' ]);

AppRegistry.registerComponent(appName, () => {
	return App;
});
