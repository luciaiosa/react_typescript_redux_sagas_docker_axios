import { ActionTypes, Action } from "../../enums/actionTypes";
import { EpisodeStoreState, InitialEpisodeStoreState } from "../storeStates";

export default (state: EpisodeStoreState = InitialEpisodeStoreState, action: Action): EpisodeStoreState => {
    switch (action.type) {
        case ActionTypes.getEpisodes:
            return {...state, episodes: action.payload};
        default:
            return state;
    }
}