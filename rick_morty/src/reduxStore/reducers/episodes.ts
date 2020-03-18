import { ActionTypes, Action } from "../../enums/actionTypes";
import {StoreState, DefaultStoreState} from '../reducers';

export default (state: StoreState = DefaultStoreState, action: Action): StoreState => {
    switch (action.type) {
        case ActionTypes.getEpisodes:
            return {...state, episodes: action.payload};
        default:
            return state;
    }
}