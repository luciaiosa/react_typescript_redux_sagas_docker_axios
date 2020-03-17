import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects';
import api from './apis/rick_morty';

// Generator 
function* getLocations(action) {
    try {
        const json = yield api.get('/location')
            .then(response => response.json());
        yield put({ type: "LOCATIONS_RECEIVED", locations: json.results, });
    }
    catch (e) {
        yield put({ type: "LOCATIONS_RECEIVED", locations: [], });
    }
}

// I’m telling SAGA to wait for action GET_LOCATIONS to get dispatched. And ones GET_LOCATIONS was dispathced to call getLocations() function. 
// Inside of getLocations() function happens asynchronous call to API and when request arrived, next action { type: LOCATIONS_RECEIVED, json: json.results, } is dispatched.
// We don’t need to write action LOCATIONS_RECEIVED in actions/index.js!!
// BUT I HAVE TO let reducer know how to deal with this type of actions LOCATIONS_RECEIVED (in reducers/locations.js)!!

function* actionWatcher() {
    yield takeLatest('GET_LOCATIONS', getLocations)
}
export default function* saga() {
    yield all([
        actionWatcher(),
    ]);
}