import { call, put } from "redux-saga/effects";
import {
    episodesRequestSuccess,
    episodeByIdRequestSuccess,
    episodesRequestError
} from "./Actions";
import { episodesFetch, episodeByIdFetch } from "./Services";

export function* getEpisodes(action: any) {
    try {
        const episodes = yield call(
            episodesFetch,
            action.payload.currentPage,
            action.payload.searchTerm
        );
        yield put(episodesRequestSuccess(episodes.results));
    } catch (error) {
        yield put(episodesRequestError(error));
    }
}

export function* getEpisodeById(action: any) {
    try {
        const episode = yield call(episodeByIdFetch, action.payload);
        yield put(episodeByIdRequestSuccess(episode));
    } catch (error) {
        yield put(episodesRequestError(error));
    }
}
