import { combineReducers } from 'redux';
import charactersReducer from './characters';
import episodesReducer from './episodes';
import locationsReducer from './locations';

// Typescript makes sure that charactersReducer, ... returns a value of type Character[], ... 
export const rootReducers = combineReducers({
    characters: charactersReducer,
    episodes: episodesReducer,
    locations: locationsReducer
});