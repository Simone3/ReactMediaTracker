/**
 * Type for configuration files
 */
export type Config = {
	tempToDelete: {
		userId: string;
	};
	backEnd: {
		defaultTimeoutMilliseconds: number;
		baseUrl: string;
	};
	ui: {
		colors: {
			colorPrimary: string;
			colorPrimaryDark: string;
			colorAccent: string;
			colorContrastText: string;
			colorModalBackground: string;
			colorModalContent: string;
			colorModalButton: string;
			colorModalButtonDisabled: string;
			colorFormInputs: string;
			colorDefaultIcon: string;
			blue: string;
			red: string;
			green: string;
			orange: string;
			yellow: string;
			purple: string;
			cyan: string;
			grey: string;
			availableCategoryColors: string[];
		};
	};
	mocks: {
		categories: boolean;
	};
}
