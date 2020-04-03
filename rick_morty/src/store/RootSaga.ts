import { takeLatest } from "redux-saga/effects";
import {
    GET_CHARACTERS,
    getCharacters,
    GET_CHARACTER_BYID,
    getCharacterById,
    GET_CHARACTER_BYID_TO_COMPARE,
    getCharacterByIdToCompare
} from "./characters";
import {
    GET_EPISODES,
    getEpisodes,
    GET_EPISODE_BYID,
    getEpisodeById
} from "./episodes";
import {
    GET_LOCATIONS,
    getLocations,
    GET_LOCATION_BYID,
    getLocationById
} from "./locations";

export function* rootSaga() {
    yield takeLatest(GET_CHARACTERS, getCharacters);
    yield takeLatest(GET_CHARACTER_BYID, getCharacterById);
    yield takeLatest(GET_CHARACTER_BYID_TO_COMPARE, getCharacterByIdToCompare);

    yield takeLatest(GET_EPISODES, getEpisodes);
    yield takeLatest(GET_EPISODE_BYID, getEpisodeById);

    yield takeLatest(GET_LOCATIONS, getLocations);
    yield takeLatest(GET_LOCATION_BYID, getLocationById);
}
