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
			getAll: string;
			add: string;
			update: string;
			delete: string;
		};
		ownPlatforms: {
			getAll: string;
			add: string;
			merge: string;
			update: string;
			delete: string;
		};
		groups: {
			getAll: string;
			add: string;
			update: string;
			delete: string;
		};
		books: MediaItemBackEndConfig;
		movies: MediaItemBackEndConfig;
		tvShows: MediaItemBackEndConfig;
		videogames: MediaItemBackEndConfig;
	};
}

/**
 * Helper type for configurations
 */
type MediaItemBackEndConfig = {
	filter: string;
	search: string;
	add: string;
	update: string;
	delete: string;
	catalogSearch: string;
	catalogDetails: string;
};
