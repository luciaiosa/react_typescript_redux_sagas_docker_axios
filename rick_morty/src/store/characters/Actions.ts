export const GETTING_CHARACTERS = "GETTING_CHARACTERS";
export const GOT_CHARACTERS = "GOT_CHARACTERS";
export const GETTING_CHARACTER_BYID = "GETTING_CHARACTER_BYID";
export const GOT_CHARACTER_BYID = "GOT_CHARACTER_BYID";
export const GETTING_CHARACTER_BYID_TO_COMPARE =
    "GETTING_CHARACTER_BYID_TO_COMPARE";
export const GOT_CHARACTER_BYID_TO_COMPARE = "GOT_CHARACTER_BYID_TO_COMPARE";

export const CLEAR_CHARACTER_SELECTED = "CLEAR_CHARACTER_SELECTED";
export const REMOVE_CHARACTER_TO_COMPARE = "REMOVE_CHARACTER_TO_COMPARE";
export const REMOVE_CHARACTER_FROM_HISTORY = "REMOVE_CHARACTER_FROM_HISTORY";

export const charactersRequest = (
    currentPage: number,
    searchTerm?: string
) => ({
    type: GETTING_CHARACTERS,
    payload: { currentPage, searchTerm }
});

export const charactersRequestSuccess = (payload: any) => ({
    type: GOT_CHARACTERS,
    payload
});

export const characterByIdRequest = (id: number) => ({
    type: GETTING_CHARACTER_BYID,
    payload: id
});

export const characterByIdRequestSuccess = (payload: any) => ({
    type: GOT_CHARACTER_BYID,
    payload
});

export const characterByIdToCompareRequest = (id: number) => ({
    type: GETTING_CHARACTER_BYID_TO_COMPARE,
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
