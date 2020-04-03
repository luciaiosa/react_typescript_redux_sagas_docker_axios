import api from "../../apis/rick_morty";
import { Episode } from "./EpisodeStore";

export const episodesFetch = async (
    currentPage: number,
    searchTerm?: string
) => {
    const filter =
        searchTerm === "" || searchTerm === undefined
            ? {}
            : { name: searchTerm };
    const response = await api.get<Episode[]>(`/episode/?page=${currentPage}`, {
        params: filter
    });
    return response.data;
};

export const episodeByIdFetch = async (id: number) => {
    const response = await api.get<Episode[]>(`/episode/${id}`);
    return response.data;
};
