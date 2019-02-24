/**
 * A generic media item model
 */
export class MediaItem {

	/**
	 * Unique ID
	 */
	key: string;

	/**
	 * Name
	 */
	name: string;

	constructor(key: string = '-1', name: string = '') {

		this.key = key;
		this.name = name;
	}
}



