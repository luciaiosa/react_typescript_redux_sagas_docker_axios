import { ActionTypes, Action } from "../../enums/actionTypes";
import { LocationStoreState, InitialLocationStoreState } from "../storeStates";

export default (state: LocationStoreState = InitialLocationStoreState, action: Action): LocationStoreState => {
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
