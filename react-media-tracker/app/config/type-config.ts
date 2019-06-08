/**
 * Type for configuration files
 */
export type Config = {
	tempToDelete: {
		userId: string;
	};
	backEnd: {
		baseUrl: string;
		categories: {
			get: string;
		};
	};
}
