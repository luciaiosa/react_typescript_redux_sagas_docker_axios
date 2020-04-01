export const GET_CHARACTERS = "GET_CHARACTERS";
export const GOT_CHARACTERS = "GOT_CHARACTERS";
export const GET_CHARACTER_BYID = "GET_CHARACTER_BYID";
export const GOT_CHARACTER_BYID = "GOT_CHARACTER_BYID";
export const GET_CHARACTER_BYID_TO_COMPARE = "GET_CHARACTER_BYID_TO_COMPARE";
export const GOT_CHARACTER_BYID_TO_COMPARE = "GOT_CHARACTER_BYID_TO_COMPARE";

export const CLEAR_CHARACTER_SELECTED = "CLEAR_CHARACTER_SELECTED";
export const REMOVE_CHARACTER_TO_COMPARE = "REMOVE_CHARACTER_TO_COMPARE";
export const REMOVE_CHARACTER_FROM_HISTORY = "REMOVE_CHARACTER_FROM_HISTORY";

export const charactersRequest = (
    currentPage: number,
    searchTerm?: string
) => ({
    type: GET_CHARACTERS,
    payload: { currentPage, searchTerm }
});

export const charactersRequestSuccess = (payload: any) => ({
    type: GOT_CHARACTERS,
    payload
});

export const characterByIdRequest = (id: number) => ({
    type: GET_CHARACTER_BYID,
    payload: id
});

export const characterByIdRequestSuccess = (payload: any) => ({
    type: GOT_CHARACTER_BYID,
    payload
});

export const characterByIdToCompareRequest = (id: number) => ({
    type: GET_CHARACTER_BYID_TO_COMPARE,
    payload: id
});

export const characterByIdRequestToCompareSuccess = (payload: any) => ({
    type: GOT_CHARACTER_BYID_TO_COMPARE,
    payload
});

export const clearCharacterSelected = () => ({
    type: CLEAR_CHARACTER_SELECTED,
    payload: undefined
});

export const removeCharacterToCompare = (id: number) => ({
    type: REMOVE_CHARACTER_TO_COMPARE,
    payload: id
});

export const removeCharacterFromHistory = (id: number) => ({
    type: REMOVE_CHARACTER_FROM_HISTORY,
    payload: id
});
