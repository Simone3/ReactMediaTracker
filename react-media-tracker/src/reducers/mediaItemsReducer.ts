import { MediaItem } from '../model';
import { ADD_MEDIA, AddMediaAction } from '../actions';

let nextId: number = 0;

// TODO is there a way to enforce "mediaItems" type (State field)?
export const mediaItems = (state: MediaItem[] = [], action: any) => {

	switch(action.type) {

		case ADD_MEDIA:

			let addMediaAction: AddMediaAction = action;
			addMediaAction.newMediaItem.key = String(nextId++);
			return [...state, addMediaAction.newMediaItem];

		default:
			return state;
	}
};
