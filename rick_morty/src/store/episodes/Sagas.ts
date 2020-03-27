import { call, put } from "redux-saga/effects";
import { episodesRequestSuccess, episodeByIdRequestSuccess } from "./Actions";
import api from "../../apis/rick_morty";
import { Episode } from "./EpisodeStore";
import { setLoading } from "../app";

const episodesFetch = async (currentPage: number, searchTerm?: string) => {
    const filter =
        searchTerm === "" || searchTerm === undefined
            ? {}
            : { name: searchTerm };
    const response = await api.get<Episode[]>(`/episode/?page=${currentPage}`, {
        params: filter
    });
    return response.data;
};

const episodeByIdFetch = async (id: number) => {
    const response = await api.get<Episode[]>(`/episode/${id}`);
    return response.data;
};

export function* apiEpisodes(action: any) {
    //Use axios interceptor to set loading status
    yield put(setLoading(true));
    const episodes = yield call(() =>
        episodesFetch(action.payload.currentPage, action.payload.searchTerm)
    );
    yield put(episodesRequestSuccess(episodes.results));
    yield put(setLoading(false));
}

export function* apiEpisodeById(action: any) {
    yield put(setLoading(true));
    const episode = yield call(() => episodeByIdFetch(action.payload));
    yield put(episodeByIdRequestSuccess(episode));
    yield put(setLoading(false));
}
