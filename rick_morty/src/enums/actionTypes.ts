import { GetCharactersAction, GetEpisodesAction, GetLocationsAction } from '../reduxStore/actions';
export enum ActionTypes {
    getLocations,
    getCharacters,
    getEpisodes
}

// I'm creating here the different types of actions, and I use them into the reducers, in order to make the reducers less complex ana large

export type Action = GetCharactersAction | GetEpisodesAction | GetLocationsAction;