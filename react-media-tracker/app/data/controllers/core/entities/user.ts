import { UserMockedController } from 'app/data/controllers/impl-mocks/entities/user';
import { UserInternal, UserSecretInternal } from 'app/data/models/internal/user';

/**
 * The data controller for the user entities
 */
export interface UserController {

	/**
	 * Gets the user (if any) currently saved locally on this device
	 * @returns the saved user or undefined, as a promise
	 */
	getStoredUser(): Promise<UserInternal | undefined>;

	/**
	 * Signs a user up
	 * @param user the full user data
	 * @returns the user data, as a promise
	 */
	signup(user: UserSecretInternal): Promise<UserInternal>;
	
	/**
	 * Logs a user in
	 * @param user the full user data
	 * @returns the user data, as a promise
	 */
	login(user: UserSecretInternal): Promise<UserInternal>;

	/**
	 * Logs a user out
	 * @returns a void promise
	 */
	logout(): Promise<void>;
}

/**
 * Singleton implementation of the user controller
 */
export const userController: UserController = new UserMockedController();

