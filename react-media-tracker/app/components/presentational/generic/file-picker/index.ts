import DocumentPicker, { DocumentPickerResponse } from 'react-native-document-picker';

/**
 * Helper class to pick files from the user device
 */
export class FilePicker {

	/**
	 * Allows the user to select a JSON file from the device
	 * @returns an object containing the picked JSON file metadata or undefined if the user cancelled the operation, as a promise
	 */
	public static async pickJson(): Promise<DocumentPickerResponse | undefined> {

		try {

			return await DocumentPicker.pick({
				type: [ DocumentPicker.types.allFiles ]
			});
		}
		catch(error) {
			
			if(DocumentPicker.isCancel(error)) {
				
				return undefined;
			}
			else {
	
				throw error;
			}
		}
	}
}

