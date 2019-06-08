import { PathParams } from 'app/utilities/helper-types';

/**
 * Helper class with misc useful methods
 */
class MiscUtils {

	/**
	 * Helper to build a URL
	 * @param urlParts list of URL parts to be appended in order
	 * @param pathParams optional path params to replace in the full URL (the URL string must contain them in the ':' notation, e.g. http://mywebsite.com/:myPathParam/mypage)
	 * @returns the final URL
	 */
	public buildUrl(urlParts: string[], pathParams?: PathParams): string {

		// Empty case
		if(!urlParts || urlParts.length === 0) {
			return '';
		}
		
		// Build full URL
		let fullUrl = urlParts[0] ? urlParts[0] : '';
		for(let i = 1; i < urlParts.length; i++) {

			if(urlParts[i] && urlParts[i].length > 0) {

				const fullEnds = fullUrl.endsWith('/');
				const partStarts = urlParts[i].startsWith('/');
				if(fullEnds && partStarts) {
					
					fullUrl += urlParts[i].substring(1);
				}
				else if(!fullEnds && !partStarts) {

					fullUrl += `/${urlParts[i]}`;
				}
				else {

					fullUrl += urlParts[i];
				}
			}
		}

		// Replace path params
		if(pathParams) {

			for(const key in pathParams) {

				fullUrl = fullUrl.replace(`:${key}`, pathParams[key]);
			}
		}
		
		return fullUrl;
	}
}

/**
 * Singleton implementation of the misc utilities
 */
export const miscUtils = new MiscUtils();
