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
			availableCategoryColors: string[];
		};
	};
	mocks: {
		categories: boolean;
	};
}
