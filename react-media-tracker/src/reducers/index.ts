import { combineReducers, Action } from 'redux';
import { mediaItems } from './MediaItemsReducer';
import { State } from 'src/model';

export default combineReducers<State, Action>({
	mediaItems
});