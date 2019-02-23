/**
 * A generic media item model
 */
export default class MediaItem {

	/**
	 * Unique ID
	 */
	key: string;

	/**
	 * Name
	 */
	name: string = "";

	constructor(key: string) {

		this.key = key;
	}
}



