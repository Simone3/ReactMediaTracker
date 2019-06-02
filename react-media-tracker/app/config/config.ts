import { devConfig } from 'app/config/config-dev';
import { Config } from 'app/config/type-config';
import ReactNativeConfig from 'react-native-config';

/**
 * The application expects to find several configuration files:
 * - config-dev.ts for development environment
 * - config-prod.ts for production environment
 *
 * In general, config-{ENV}.ts where {ENV} is defined by the MEDIA_TRACKER_APP_ENV variable (defined in the ".env" files)
 *
 * config-dev.ts and config-prod.ts are NOT versioned. They can be defined starting from
 * the helper config-sample.ts
 */

const environment = ReactNativeConfig.MEDIA_TRACKER_APP_ENV;

// Get config based on environment
let envConfig: Config;
switch(environment) {

	case 'dev':
		envConfig = devConfig;
		break;

	default:
		throw new Error(`MEDIA_TRACKER_APP_ENV property is not set or is not recognized: ${environment}`);
}

/**
 * The application centralized configuration properties, varies by environment and during automatic testing
 */
export const config: Config = envConfig;
