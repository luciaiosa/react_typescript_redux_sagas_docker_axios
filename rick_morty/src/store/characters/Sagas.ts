import { call, put } from "redux-saga/effects";
import { push } from "react-router-redux";
import {
    charactersRequestSuccess,
    characterByIdRequestSuccess,
    characterByIdRequestToCompareSuccess
} from "./Actions";
import api from "../../apis/rick_morty";
import { Character } from "./CharacterStore";

const charactersFetch = async (currentPage: number, searchTerm?: string) => {
    const filter =
        searchTerm === "" || searchTerm === undefined
            ? {}
            : { name: searchTerm };
    const response = await api.get<Character[]>(
        `/character/?page=${currentPage}`,
        {
            params: filter
        }
    );

    return response.data;
};

const characterByIdFetch = async (id: number) => {
    const response = await api.get<Character[]>(`/character/${id}`);
    return response.data;
};

export function* getCharacters(action: any) {
    //Use axios interceptor to set loading status
    try {
        const response = yield call(() =>
            charactersFetch(
                action.payload.currentPage,
                action.payload.searchTerm
            )
        );
        yield put(charactersRequestSuccess(response));
    } catch (error) {
        yield push("/error");
        console.error(error);
    }
}

export function* getCharacterById(action: any) {
    const character = yield call(() => characterByIdFetch(action.payload));
    yield put(characterByIdRequestSuccess(character));
}

export function* getCharacterByIdToCompare(action: any) {
    const character = yield call(() => characterByIdFetch(action.payload));
    yield put(characterByIdRequestToCompareSuccess(character));
}
