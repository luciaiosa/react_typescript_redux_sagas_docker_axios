import { combineReducers } from 'redux';
import charactersReducer from './characters';
import episodesReducer from './episodes';
import locationsReducer from './locations';

export const reducers = combineReducers({
    characters: charactersReducer,
    episodes: episodesReducer,
    locations: locationsReducer
});