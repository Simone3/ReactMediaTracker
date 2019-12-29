import { FlashError } from 'app/components/presentational/generic/error-flash';
import { i18n } from 'app/utilities/i18n';
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

			const pickedFile = await DocumentPicker.pick({
				type: [ DocumentPicker.types.allFiles ]
			});

			if(pickedFile.type !== 'application/json') {

				FlashError.showError(i18n.t('error.flash.messages.fileNotJson'));
				return undefined;
			}
			else {

				return pickedFile;
			}
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

