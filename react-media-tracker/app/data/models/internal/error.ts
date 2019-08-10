/**
 * An application error that can be thrown or promise-rejected in the code and then handled with a negative user message
 */
export class AppError extends Error {

	public static GENERIC = new AppError('generic.application', 'error.flash.messages.genericApplication');
	public static BACKEND_TIMEOUT = new AppError('backend.timeout', 'error.flash.messages.backendTimeout');
	public static BACKEND_GENERIC_ERROR = new AppError('backend.generic', 'error.flash.messages.backendGeneric');
	public static BACKEND_PARSE = new AppError('backend.parse', 'error.flash.messages.backendParse');

	public static BACKEND_CATEGORY_FETCH = new AppError('backend.category.fetch', 'error.flash.messages.backendCategoryFetch');
	public static BACKEND_CATEGORY_SAVE = new AppError('backend.category.save', 'error.flash.messages.backendCategorySave');
	public static BACKEND_CATEGORY_DELETE = new AppError('backend.category.delete', 'error.flash.messages.backendCategoryDelete');
	
	public static BACKEND_MEDIA_ITEM_FETCH = new AppError('backend.mediaItem.fetch', 'error.flash.messages.backendMediaItemFetch');

	private _errorCode: string;
	private _errorDescription: string;
	private _errorDetails?: string | AppError;

	private constructor(errorCode: string, errorDescription: string, errorDetails?: string | AppError) {
		
		super(`${errorCode} - ${errorDescription} - ${errorDetails}`);

		this._errorCode = errorCode;
		this._errorDescription = errorDescription;
		this._errorDetails = errorDetails;
	}

	/**
	 * The error code
	 * @returns the error code
	 */
	public get errorCode(): string {

		return this._errorCode;
	}

	/**
	 * The error description
	 * @returns the error description
	 */
	public get errorDescription(): string {

		return this._errorDescription;
	}

	/**
	 * The optional error details
	 * @returns the optional error details
	 */
	public get errorDetails(): string | AppError | undefined {

		return this._errorDetails;
	}

	/**
	 * Adds details to an error constant
	 * @param errorDetails the error details
	 * @returns a new AppError with the given details
	 */
	public withDetails(errorDetails: unknown): AppError {

		let convertedErrorDetails: string | AppError;
		if(errorDetails) {

			if(errorDetails instanceof AppError) {

				convertedErrorDetails = errorDetails;
			}
			else {

				convertedErrorDetails = String(errorDetails);
			}
		}
		else {

			convertedErrorDetails = '';
		}

		return new AppError(this.errorCode, this.errorDescription, convertedErrorDetails);
	}
}

/**
 * Portion of the state with the global error data
 */
export type ErrorState = {

	/**
	 * The error that occurred, if any.
	 * A string is displayed as is, an AppError gets displayed as its description.
	 */
	error?: AppError | string;
};
