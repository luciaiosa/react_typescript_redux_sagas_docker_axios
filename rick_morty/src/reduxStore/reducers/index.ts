import { combineReducers } from 'redux';
import charactersReducer from './characters';
import episodesReducer from './episodes';
import locationsReducer from './locations';
import {Character} from '../actions/characters';
import {Episode} from '../actions/episodes';
import {Location} from '../actions/locations';

// This interface describes the entire state of my entire store
export interface StoreState {
    characters: Character[],
    episodes: Episode[],
    locations: Location[]
}

export const DefaultStoreState = {
    characters: [],
    locations: [],
    episodes: []
}

// Typescript makes sure that charactersReducer, ... returns a value of type Character[], ... 
export const reducers = combineReducers({
    characters: charactersReducer,
    episodes: episodesReducer,
    locations: locationsReducer
});