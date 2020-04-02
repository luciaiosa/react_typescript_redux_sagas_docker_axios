import { call, put } from "redux-saga/effects";
import {
    locationsRequestSuccess,
    locationByIdRequestSuccess,
    locationsRequestError
} from "./Actions";
import { locationsFetch, locationByIdFetch } from "./Services";

export function* getLocations(action: any) {
    try {
        const locations = yield call(
            locationsFetch,
            action.payload.currentPage,
            action.payload.searchTerm
        );
        yield put(locationsRequestSuccess(locations.results));
    } catch (error) {
        yield put(locationsRequestError(error));
    }
}

export function* getLocationById(action: any) {
    try {
        const location = yield call(locationByIdFetch, action.payload);
        yield put(locationByIdRequestSuccess(location));
    } catch (error) {
        yield put(locationsRequestError(error));
    }
}
