import { MediaItem } from '../model';

export const ADD_MEDIA = 'ADD_MEDIA';

export class AddMediaAction {
	constructor(public type: string, public newMediaItem: MediaItem) {}
}

type AddMediaActionGenerator = (newMediaItem: MediaItem) => AddMediaAction;

export const addMediaActionGenerator: AddMediaActionGenerator = (newMediaItem: MediaItem) => {
	return {
		type: ADD_MEDIA,
		newMediaItem} as AddMediaAction;
};


