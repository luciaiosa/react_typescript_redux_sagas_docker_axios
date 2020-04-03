import api from "../../apis/rick_morty";
import { Location } from "./LocationStore";

export const locationsFetch = async (
    currentPage: number,
    searchTerm?: string
) => {
    const filter =
        searchTerm === "" || searchTerm === undefined
            ? {}
            : { name: searchTerm };
    const response = await api.get<Location[]>(
        `/location/?page=${currentPage}`,
        {
            params: filter
        }
    );
    return response.data;
};

export const locationByIdFetch = async (id: number) => {
    const response = await api.get<Location[]>(`/location/${id}`);
    return response.data;
};
