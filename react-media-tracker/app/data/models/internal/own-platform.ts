import { config } from 'app/config/config';

/**
 * A media item own platform, internal type just for display purposes
 */
export type OwnPlatformInternal = {

	id: string;
	name: string;
	color: string;
}

/**
 * The default initial own platform, internal type just for display purposes
 */
export const DEFAULT_OWN_PLATFORM: OwnPlatformInternal = {
	id: '',
	name: '',
	color: config.ui.colors.availableOwnPlatformColors[0]
};
