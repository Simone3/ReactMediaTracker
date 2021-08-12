import { isCancel, pick, types } from 'react-native-document-picker';

/**
 * Descriptor of a picked file
 */
export type FilePickerResponse = {
	uri: string;
	type: string;
	name: string;
	size: number;
};

/**
 * Helper class to pick files from the user device
 */
export class FilePicker {

	/**
	 * Allows the user to select a JSON file from the device
	 * @returns an object containing the picked JSON file metadata or undefined if the user cancelled the operation, as a promise
	 */
	public static async pickJson(): Promise<FilePickerResponse | undefined> {

		try {

			const pickedDocuments = await pick({
				type: [ types.allFiles ],
				allowMultiSelection: false
			});

			if(!pickedDocuments || pickedDocuments.length === 0 || !pickedDocuments[0] || pickedDocuments[0].length === 0) {

				return undefined;
			}
			else if(pickedDocuments.length > 1 || pickedDocuments[0].length > 1) {

				throw new Error('Picking more than one file should not be possible!');
			}
			else {

				return pickedDocuments[0][0];
			}
		}
		catch(error) {
			
			if(isCancel(error)) {
				
				return undefined;
			}
			else {
	
				throw error;
			}
		}
	}
}

