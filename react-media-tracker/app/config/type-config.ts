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
}
