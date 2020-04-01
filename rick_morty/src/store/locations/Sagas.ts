import { call, put } from "redux-saga/effects";
import { locationsRequestSuccess, locationByIdRequestSuccess } from "./Actions";
import api from "../../apis/rick_morty";
import { Location } from "./LocationStore";

const locationsFetch = async (currentPage: number, searchTerm?: string) => {
    const filter =
        searchTerm === "" || searchTerm === undefined
            ? {}
            : { name: searchTerm };
    const response = await api.get<Location[]>(
        `/location/?page=${currentPage}`,
        {
            params: filter
        }
    );
    return response.data;
};

const locationByIdFetch = async (id: number) => {
    const response = await api.get<Location[]>(`/location/${id}`);
    return response.data;
};

export function* getLocations(action: any) {
    //Use axios interceptor to set loading status
    const locations = yield call(() =>
        locationsFetch(action.payload.currentPage, action.payload.searchTerm)
    );
    yield put(locationsRequestSuccess(locations.results));
}

export function* getLocationById(action: any) {
    const location = yield call(() => locationByIdFetch(action.payload));
    yield put(locationByIdRequestSuccess(location));
}
