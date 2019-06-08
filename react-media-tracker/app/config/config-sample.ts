import { Config } from 'app/config/type-config';

/**
 * Sample configuration that can be used as a template for other files, see config.ts
 */
export const sampleConfig: Config = {
	tempToDelete: {
		userId: '<temp_user_id>'
	},
	backEnd: {
		baseUrl: '<backend_server_url>',
		categories: {
			get: '/users/:userId/categories'
		}
	}
};
