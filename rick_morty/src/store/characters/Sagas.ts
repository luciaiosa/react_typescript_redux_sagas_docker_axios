import { call, put } from "redux-saga/effects";
import {
    charactersRequestSuccess,
    characterByIdRequestSuccess,
    characterByIdRequestToCompareSuccess,
    charactersRequestError
} from "./Actions";
import { charactersFetch, characterByIdFetch } from "./Services";

export function* getCharacters(action: any) {
    try {
        const response = yield call(
            charactersFetch,
            action.payload.currentPage,
            action.payload.searchTerm
        );
        yield put(charactersRequestSuccess(response));
    } catch (error) {
        yield put(charactersRequestError(error));
    }
}

export function* getCharacterById(action: any) {
    try {
        const character = yield call(characterByIdFetch, action.payload);
        yield put(characterByIdRequestSuccess(character));
    } catch (error) {
        yield put(charactersRequestError(error));
    }
}

export function* getCharacterByIdToCompare(action: any) {
    try {
        const character = yield call(characterByIdFetch, action.payload);
        yield put(characterByIdRequestToCompareSuccess(character));
    } catch (error) {
        yield put(charactersRequestError(error));
    }
}
