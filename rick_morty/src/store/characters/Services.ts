import api from "../../apis/rick_morty";
import { Character } from "./CharacterStore";

export const charactersFetch = async (
    currentPage: number,
    searchTerm?: string
) => {
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

export const characterByIdFetch = async (id: number) => {
    const response = await api.get<Character[]>(`/character/${id}`);
    return response.data;
};
