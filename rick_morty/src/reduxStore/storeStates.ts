import {Character, Episode, Location} from './modelsInterfaces';

// This interface describes the entire state of my entire store
export interface StoreState {
    character: CharacterStoreState,
    episode: EpisodeStoreState,
    location: LocationStoreState,
    loading: boolean
}
export interface CharacterStoreState {
    characters: Character[],
    selectedCharacter: Character | undefined
}
export interface EpisodeStoreState {
    episodes: Episode[],
    selectedEpisode: Episode | undefined
}
export interface LocationStoreState {
    locations: Location[],
    selectedLocation: Location | undefined
}

export const InitialCharacterStoreState: CharacterStoreState = {
    characters: [],
    selectedCharacter: undefined
}

export const InitialEpisodeStoreState: EpisodeStoreState = {
    episodes: [],
    selectedEpisode: undefined
}
export const InitialLocationStoreState: LocationStoreState = {
    locations: [],
    selectedLocation: undefined
}

export const InitialStoreState: StoreState = {
    character: InitialCharacterStoreState,
    location: InitialLocationStoreState,
    episode: InitialEpisodeStoreState,
    loading: false
}

