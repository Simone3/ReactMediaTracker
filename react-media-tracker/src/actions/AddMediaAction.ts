import { MediaItem } from '../model';
import { Action } from 'redux';

export const ADD_MEDIA = 'ADD_MEDIA';

/**
 * Action to add a new media item
 */
export type AddMediaAction =
	Action & {
	
	/**
	 * The media item to be added
	 */
	newMediaItem: MediaItem
};

type AddMediaActionGenerator = (newMediaItem: MediaItem) => AddMediaAction;

export const addMediaActionGenerator: AddMediaActionGenerator = (newMediaItem: MediaItem) => {
	return {
		type: ADD_MEDIA,
		newMediaItem};
};


