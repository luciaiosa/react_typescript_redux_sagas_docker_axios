import { takeLatest } from "redux-saga/effects";
import {
    GETTING_CHARACTERS,
    apiCharacters,
    GETTING_CHARACTER_BYID,
    apiCharacterById,
    GETTING_CHARACTER_BYID_TO_COMPARE,
    apiCharacterByIdToCompare
} from "./characters";
import {
    GETTING_EPISODES,
    apiEpisodes,
    GETTING_EPISODE_BYID,
    apiEpisodeById
} from "./episodes";
import {
    GETTING_LOCATIONS,
    apiLocations,
    GETTING_LOCATION_BYID,
    apiLocationById
} from "./locations";

export function* rootSaga() {
    yield takeLatest(GETTING_CHARACTERS, apiCharacters);
    yield takeLatest(GETTING_CHARACTER_BYID, apiCharacterById);
    yield takeLatest(
        GETTING_CHARACTER_BYID_TO_COMPARE,
        apiCharacterByIdToCompare
    );

    yield takeLatest(GETTING_EPISODES, apiEpisodes);
    yield takeLatest(GETTING_EPISODE_BYID, apiEpisodeById);

    yield takeLatest(GETTING_LOCATIONS, apiLocations);
    yield takeLatest(GETTING_LOCATION_BYID, apiLocationById);
}
