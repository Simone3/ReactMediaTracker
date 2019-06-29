import { Config } from 'app/config/type-config';

/**
 * Sample configuration that can be used as a template for other files, see config.ts
 */
export const sampleConfig: Config = {
	tempToDelete: {
		userId: '<temp_user_id>'
	},
	backEnd: {
		defaultTimeoutMilliseconds: 5000,
		baseUrl: '<backend_server_url>',
		categories: {
			getAll: '/users/:userId/categories',
			add: '/users/:userId/categories',
			update: '/users/:userId/categories/:id',
			delete: '/users/:userId/categories/:id'
		},
		ownPlatforms: {
			getAll: '/users/:userId/categories/:categoryId/own-platforms',
			add: '/users/:userId/categories/:categoryId/own-platforms',
			merge: '/users/:userId/categories/:categoryId/own-platforms/merge',
			update: '/users/:userId/categories/:categoryId/own-platforms/:id',
			delete: '/users/:userId/categories/:categoryId/own-platforms/:id'
		},
		groups: {
			getAll: '/users/:userId/categories/:categoryId/groups',
			add: '/users/:userId/categories/:categoryId/groups',
			update: '/users/:userId/categories/:categoryId/groups/:id',
			delete: '/users/:userId/categories/:categoryId/groups/:id'
		},
		books: {
			filter: '/users/:userId/categories/:categoryId/books/filter',
			search: '/users/:userId/categories/:categoryId/books/search',
			add: '/users/:userId/categories/:categoryId/books',
			update: '/users/:userId/categories/:categoryId/books/:id',
			delete: '/users/:userId/categories/:categoryId/books/:id',
			catalogSearch: '/catalog/books/search/:searchTerm',
			catalogDetails: '/catalog/books/:catalogId'
		},
		movies: {
			filter: '/users/:userId/categories/:categoryId/movies/filter',
			search: '/users/:userId/categories/:categoryId/movies/search',
			add: '/users/:userId/categories/:categoryId/movies',
			update: '/users/:userId/categories/:categoryId/movies/:id',
			delete: '/users/:userId/categories/:categoryId/movies/:id',
			catalogSearch: '/catalog/movies/search/:searchTerm',
			catalogDetails: '/catalog/movies/:catalogId'
		},
		tvShows: {
			filter: '/users/:userId/categories/:categoryId/tv-shows/filter',
			search: '/users/:userId/categories/:categoryId/tv-shows/search',
			add: '/users/:userId/categories/:categoryId/tv-shows',
			update: '/users/:userId/categories/:categoryId/tv-shows/:id',
			delete: '/users/:userId/categories/:categoryId/tv-shows/:id',
			catalogSearch: '/catalog/tv-shows/search/:searchTerm',
			catalogDetails: '/catalog/tv-shows/:catalogId'
		},
		videogames: {
			filter: '/users/:userId/categories/:categoryId/videogames/filter',
			search: '/users/:userId/categories/:categoryId/videogames/search',
			add: '/users/:userId/categories/:categoryId/videogames',
			update: '/users/:userId/categories/:categoryId/videogames/:id',
			delete: '/users/:userId/categories/:categoryId/videogames/:id',
			catalogSearch: '/catalog/videogames/search/:searchTerm',
			catalogDetails: '/catalog/videogames/:catalogId'
		}
	}
};
