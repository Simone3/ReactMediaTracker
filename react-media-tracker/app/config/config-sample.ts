import { Config } from 'app/config/type-config';

const config: Config = {
	tempToDelete: {
		userId: '<temp_user_id>'
	},
	backEnd: {
		defaultTimeoutMilliseconds: 5000,
		baseUrl: '<backend_server_url>'
	},
	ui: {
		colors: {
			colorPrimary: '#3F51B5',
			colorPrimaryDark: '#303F9F',
			colorAccent: '#408cff',
			blue: '#3c82eb',
			red: '#f25a5a',
			green: '#74eb74',
			orange: '#ee9b52',
			yellow: '#f5e064',
			purple: '#e75fe7',
			cyan: '#4bead7',
			grey: '#6e6d66',
			availableCategoryColors: []
		}
	},
	mocks: {
		categories: false
	}
};

config.ui.colors.availableCategoryColors = [
	config.ui.colors.blue,
	config.ui.colors.red,
	config.ui.colors.green,
	config.ui.colors.orange,
	config.ui.colors.yellow,
	config.ui.colors.purple,
	config.ui.colors.cyan,
	config.ui.colors.grey
];

/**
 * Sample configuration that can be used as a template for other files, see config.ts
 */
export const sampleConfig: Config = config;
