import { ActionTypes, Action } from "../../enums/actionTypes";
import { StoreState, DefaultStoreState } from '../reducers';

export default (state: StoreState = DefaultStoreState, action: Action): StoreState => {
    switch (action.type) {
        case ActionTypes.getLocations:
            return {...state, locations: action.payload};
        // action LOCATIONS_RECEIVED created in sagas.js
        // case LOCATIONS_RECEIVED:
        //         return { ...state, ..._.mapKeys(action.payload, "id"), loading: false }
        default:
            return state;
    }
}
