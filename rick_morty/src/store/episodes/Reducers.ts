import {
    GET_EPISODES,
    GOT_EPISODES,
    GET_EPISODE_BYID,
    GOT_EPISODE_BYID,
    CLEAR_EPISODE_SELECTED,
    EPISODES_ERROR
} from "./Actions";
import { Reducer, AnyAction } from "redux";
import { InitialEpisodeStore, EpisodeStore } from "./EpisodeStore";

export const episodeStoreReducer: Reducer<EpisodeStore, AnyAction> = (
    state = InitialEpisodeStore,
    action
) => {
    switch (action.type) {
        case EPISODES_ERROR:
            return {
                ...state,
                hasError: true,
                errorMessage: action.payload.message,
                loading: false
            };
        case GET_EPISODES:
        case GET_EPISODE_BYID:
            return { ...state, loading: true };
        case GOT_EPISODES:
            return {
                ...state,
                loading: false,
                episodes: action.payload,
                errorMessage: "",
                hasError: false
            };
        case GOT_EPISODE_BYID:
            return {
                ...state,
                loading: false,
                errorMessage: "",
                hasError: false,
                selectedEpisode: action.payload
            };
        case CLEAR_EPISODE_SELECTED:
            return { ...state, selectedEpisode: undefined };
        default:
            return state;
    }
};
