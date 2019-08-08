import { Config } from 'app/config/type-config';

/**
 * Sample configuration that can be used as a template for other files, see config.ts
 */
export const sampleConfig: Config = {
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
			availableCategoryColors: [
				'#3c82eb',
				'#f25a5a',
				'#74eb74',
				'#ee9b52',
				'#f5e064',
				'#e75fe7',
				'#4bead7',
				'#6e6d66'
			]
		}
	},
	mocks: {
		categories: false
	}
};
