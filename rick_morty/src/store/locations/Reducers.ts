import {
    GET_LOCATIONS,
    GOT_LOCATIONS,
    GET_LOCATION_BYID,
    GOT_LOCATION_BYID,
    CLEAR_LOCATION_SELECTED
} from "./Actions";
import { Reducer, AnyAction } from "redux";
import { InitialLocationStore, LocationStore } from "./LocationStore";

export const locationStoreReducer: Reducer<LocationStore, AnyAction> = (
    state = InitialLocationStore,
    action
) => {
    switch (action.type) {
        case GET_LOCATIONS:
        case GET_LOCATION_BYID:
            return { ...state, loading: true };
        case GOT_LOCATIONS:
            return { ...state, loading: false, locations: action.payload };
        case GOT_LOCATION_BYID:
            return {
                ...state,
                loading: false,
                selectedLocation: action.payload
            };
        case CLEAR_LOCATION_SELECTED:
            return { ...state, selectedLocation: undefined };
        default:
            return state;
    }
};
