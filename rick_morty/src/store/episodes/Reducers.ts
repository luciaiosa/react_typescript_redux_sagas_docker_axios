import {
    GET_EPISODES,
    GOT_EPISODES,
    GET_EPISODE_BYID,
    GOT_EPISODE_BYID,
    CLEAR_EPISODE_SELECTED
} from "./Actions";
import { Reducer, AnyAction } from "redux";
import { InitialEpisodeStore, EpisodeStore } from "./EpisodeStore";

export const episodeStoreReducer: Reducer<EpisodeStore, AnyAction> = (
    state = InitialEpisodeStore,
    action
) => {
    switch (action.type) {
        case GET_EPISODES:
        case GET_EPISODE_BYID:
            return { ...state, loading: true };
        case GOT_EPISODES:
            return { ...state, loading: false, episodes: action.payload };
        case GOT_EPISODE_BYID:
            return {
                ...state,
                loading: false,
                selectedEpisode: action.payload
            };
        case CLEAR_EPISODE_SELECTED:
            return { ...state, selectedEpisode: undefined };
        default:
            return state;
    }
};
