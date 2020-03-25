import { call, put } from "redux-saga/effects";
import {
    charactersRequestSuccess,
    characterByIdRequestSuccess
} from "./Actions";
import api from "../../apis/rick_morty";
import { Character } from "./CharacterStore";
import { setLoading } from "../app";

const charactersFetch = async (searchTerm?: string, currentPage?: number) => {
    let response = { data: {} };

    if (currentPage === 1) {
        const filter = searchTerm === "" ? {} : { name: searchTerm };
        response = await api.get<Character[]>(`/character/`, {
            params: filter
        });
    } else {
        response = await api.get<Character[]>(
            `/character/?page=${currentPage}`
        );
    }
    return response.data;
};

const characterByIdFetch = async (id: number) => {
    const response = await api.get<Character[]>(`/character/${id}`);
    return response.data;
};

export function* apiCharacters(action: any) {
    //Use axios interceptor to set loading status
    yield put(setLoading(true));
    const response = yield call(() =>
        charactersFetch(action.payload.searchTerm, action.payload.currentPage)
    );
    yield put(charactersRequestSuccess(response));
    yield put(setLoading(false));
}

export function* apiCharacterById(action: any) {
    yield put(setLoading(true));
    const character = yield call(() => characterByIdFetch(action.payload));
    yield put(characterByIdRequestSuccess(character));
    yield put(setLoading(false));
}
