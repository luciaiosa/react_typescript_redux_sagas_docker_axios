import { takeLatest } from "redux-saga/effects";
import {
    GETTING_CHARACTERS,
    apiCharacters,
    GETTING_CHARACTER_BYID,
    apiCharacterById
} from "./characters";

export function* rootSaga() {
    yield takeLatest(GETTING_CHARACTERS, apiCharacters);
    yield takeLatest(GETTING_CHARACTER_BYID, apiCharacterById);
}
