import {
    GET_LOCATIONS,
    GOT_LOCATIONS,
    GET_LOCATION_BYID,
    GOT_LOCATION_BYID,
    CLEAR_LOCATION_SELECTED,
    LOCATIONS_ERROR
} from "./Actions";
import { Reducer, AnyAction } from "redux";
import { InitialLocationStore, LocationStore } from "./LocationStore";

export const locationStoreReducer: Reducer<LocationStore, AnyAction> = (
    state = InitialLocationStore,
    action
) => {
    switch (action.type) {
        case LOCATIONS_ERROR:
            return {
                ...state,
                hasError: true,
                errorMessage: action.payload.message,
                loading: false
            };
        case GET_LOCATIONS:
        case GET_LOCATION_BYID:
            return { ...state, loading: true };
        case GOT_LOCATIONS:
            return {
                ...state,
                loading: false,
                locations: action.payload,
                errorMessage: "",
                hasError: false
            };
        case GOT_LOCATION_BYID:
            return {
                ...state,
                loading: false,
                errorMessage: "",
                hasError: false,
                selectedLocation: action.payload
            };
        case CLEAR_LOCATION_SELECTED:
            return { ...state, selectedLocation: undefined };
        default:
            return state;
    }
};
